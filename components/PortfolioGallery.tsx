'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface PortfolioGalleryProps {
  images: string[];
  title: string;
  autoplayInterval?: number; // in milliseconds, default 7000 (7 seconds)
}

export default function PortfolioGallery({ images, title, autoplayInterval = 7000 }: PortfolioGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoplayInterval]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const openLightbox = useCallback((src: string) => {
    setLightboxImage({ src, alt: `${title} - Image ${currentIndex + 1}` });
    setIsPlaying(false); // Pause when lightbox opens
  }, [title, currentIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    setIsPlaying(true); // Resume when lightbox closes
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxImage) return; // Don't handle keys when lightbox is open

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'Escape':
          if (lightboxImage) {
            closeLightbox();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToPrevious, goToNext, togglePlayPause, lightboxImage, closeLightbox]);

  // Touch/swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Main Image Display */}
        <div 
          className="relative w-full h-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[600ms] ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-contain cursor-pointer"
                priority={index === 0}
                onClick={() => openLightbox(image)}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-[63px] h-[63px] flex items-center justify-center transition-opacity duration-200 opacity-0 hover:opacity-100 rounded-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Previous image"
        >
          <span className="text-[25px] leading-none text-white">‹</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-[63px] h-[63px] flex items-center justify-center transition-opacity duration-200 opacity-0 hover:opacity-100 rounded-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Next image"
        >
          <span className="text-[25px] leading-none text-white">›</span>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-12 h-12 flex items-center justify-center transition-opacity duration-200 opacity-70 hover:opacity-100 rounded-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <span className="text-white text-xl" style={{ fontFamily: 'monospace' }}>⏸</span>
          ) : (
            <span className="text-white text-xl" style={{ fontFamily: 'monospace' }}>▶</span>
          )}
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <span className="text-white text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/60 py-4 overflow-x-auto">
          <div className="flex gap-2 justify-center px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-white scale-110' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxImage !== null}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
        onClose={closeLightbox}
      />
    </>
  );
}

