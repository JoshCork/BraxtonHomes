'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/images/hero/slider-1.jpg', alt: 'Braxton Homes custom home' },
  { src: '/images/hero/slider-2.jpg', alt: 'Braxton Homes custom home' },
  { src: '/images/hero/slider-3.webp', alt: 'Sonoran Reserve custom home' },
  { src: '/images/hero/slider-4.webp', alt: 'Sonoran Reserve custom home' },
  { src: '/images/hero/slider-5.jpg', alt: 'Aerial view of custom home' },
  { src: '/images/hero/slider-6.jpg', alt: 'Luxury custom home' },
  { src: '/images/hero/slider-7.jpg', alt: 'Luxury custom home' },
  { src: '/images/hero/slider-8.jpg', alt: 'Luxury custom home' },
  { src: '/images/hero/slider-9.jpg', alt: 'Luxury custom home' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Autoplay interval (7 seconds)

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[600ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay with text - only show on first slide */}
      {currentSlide === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h2 
              className="mb-0 tracking-wide"
              style={{ 
                fontSize: '75px', 
                lineHeight: '1.2',
                fontFamily: 'serif',
                fontWeight: 'normal',
                margin: '0px',
                color: '#fff'
              }}
            >
              Braxton Builders
            </h2>
            <h3 
              className="mt-4"
              style={{ 
                fontSize: '30px', 
                lineHeight: '1.2',
                fontWeight: 'normal',
                margin: '0px',
                color: '#fff'
              }}
            >
              Welcome Home
            </h3>
          </div>
        </div>
      )}

      {/* Navigation Arrows - Dark, transparent, show on hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-[63px] h-[63px] flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 rounded-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        aria-label="Previous slide"
      >
        <span className="text-[25px] leading-none text-white">‹</span>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-[63px] h-[63px] flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 rounded-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        aria-label="Next slide"
      >
        <span className="text-[25px] leading-none text-white">›</span>
      </button>
    </div>
  );
}

