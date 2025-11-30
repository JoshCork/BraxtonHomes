'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function Home() {
  const { openModal } = useContactModal();
  return (
    <main id="main" className="clearfix w-full">
      <div className="max-w-full">
        {/* Hero Section - Slider */}
        <HeroSlider />

        {/* Row 1: Welcome Text Section with background pattern */}
        <section className="relative py-[95px] px-0" style={{
          backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'left top'
        }}>
          <div className="absolute inset-0 opacity-[0.08] blur-[46px]" style={{
            backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'left top'
          }}></div>
          <div className="relative max-w-full mx-auto px-6 md:px-12">
            <div className="flex">
              {/* Left column - 30.6666% width, 4% margin-right */}
              <div className="w-[30.6666%] mr-[4%] flex items-center">
                <div className="py-0">
                  <h3 className="text-left text-lg leading-[1.33] font-normal text-gray-800">
                    Since 1996, we at Braxton Builders have been endeavoring to provide our clients with truly custom homes that are architecturally unique yet functional with a comfortable feeling.
                  </h3>
                </div>
              </div>
              {/* Right column - 65.3333% width (2/3) */}
              <div className="w-[65.3333%]">
                <div className="relative w-full rounded-[5px] overflow-hidden" style={{ aspectRatio: '3587/1502' }}>
                  <Image
                    src="/images/hero/home-2.jpg"
                    alt="Luxury Custom Home Builder Scottsdale Arizona"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 2: Recent Projects Button Bar - Vertically Centered */}
        <section className="py-[25px] px-0" style={{ backgroundColor: '#4A6895' }}>
          <div className="max-w-full mx-auto">
            <div className="flex items-center">
              {/* Left column - separator line */}
              <div className="flex-1 flex items-center">
                <div className="w-full h-px bg-white/40"></div>
              </div>
              {/* Middle column - button */}
              <div className="px-8 flex-shrink-0">
                <Link
                  href="/our-work"
                  className="inline-block border text-white px-8 py-3 hover:opacity-90 transition-opacity font-semibold text-lg whitespace-nowrap"
                  style={{
                    borderColor: 'rgba(255,255,255,.6)',
                    borderWidth: '1px'
                  }}
                >
                  Recent Projects
                </Link>
              </div>
              {/* Right column - separator line */}
              <div className="flex-1 flex items-center">
                <div className="w-full h-px bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 3: Portfolio Grid - Responsive absolute positioning */}
        <section className="py-0 px-0">
          {/* Narrow screen version (2 columns) - shown on mobile */}
          <div 
            className="md:hidden relative w-full"
            style={{ 
              margin: '0px',
              height: '710px'
            }}
          >
            {/* Pinnacle Canyon */}
            <Link
              href="/portfolio-items/pinnacle-canyon"
              className="absolute group"
              style={{
                left: '0px',
                top: '0px',
                width: '50%',
                height: '355px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero/slider-1.jpg"
                  alt="Pinnacle Canyon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Pinnacle Canyon
                  </h4>
                </div>
              </div>
            </Link>
            
            {/* Sonoran Reserve */}
            <Link
              href="/portfolio-items/sonoran-reserve"
              className="absolute group"
              style={{
                left: '50%',
                top: '0px',
                width: '50%',
                height: '355px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero/slider-2.jpg"
                  alt="Sonoran Reserve"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Sonoran Reserve
                  </h4>
                </div>
              </div>
            </Link>
            
            {/* Talus - spans full width on second row */}
            <Link
              href="/portfolio-items/talus"
              className="absolute group"
              style={{
                left: '0px',
                top: '355px',
                width: '100%',
                height: '355px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/projects/talus.jpg"
                  alt="Talus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Talus
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Wide screen version (3 columns) - shown on desktop */}
          <div 
            className="hidden md:block relative w-full"
            style={{ 
              margin: '0px',
              height: '374px'
            }}
          >
            {/* Pinnacle Canyon */}
            <Link
              href="/portfolio-items/pinnacle-canyon"
              className="absolute group"
              style={{
                left: '0px',
                top: '0px',
                width: '33.333%',
                height: '374px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero/slider-1.jpg"
                  alt="Pinnacle Canyon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Pinnacle Canyon
                  </h4>
                </div>
              </div>
            </Link>
            
            {/* Sonoran Reserve */}
            <Link
              href="/portfolio-items/sonoran-reserve"
              className="absolute group"
              style={{
                left: '33.333%',
                top: '0px',
                width: '33.333%',
                height: '374px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero/slider-2.jpg"
                  alt="Sonoran Reserve"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Sonoran Reserve
                  </h4>
                </div>
              </div>
            </Link>
            
            {/* Talus */}
            <Link
              href="/portfolio-items/talus"
              className="absolute group"
              style={{
                left: '66.666%',
                top: '0px',
                width: '33.333%',
                height: '374px',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/projects/talus.jpg"
                  alt="Talus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all flex items-center justify-center">
                  <h4 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-center"
                    style={{
                      fontSize: '48px',
                      color: 'white',
                      fontWeight: '700',
                      textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)',
                      letterSpacing: '2px',
                      lineHeight: '1.2',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    Talus
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Row 4: Separators */}
        <section className="hidden md:block py-0 px-0 -mt-[43px] -mb-[40px]">
          <div className="max-w-full">
            <div className="border-t border-gray-300"></div>
            <div className="border-t border-gray-300"></div>
          </div>
        </section>

        {/* Row 5: Some Words From Our Clients Heading */}
        <section className="hidden md:block py-[27px] px-0" style={{
          backgroundColor: 'rgba(255,255,255,0.73)',
          backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)',
          backgroundSize: 'cover'
        }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-center text-[21px] leading-[1.29] font-normal text-gray-800">
              Some Words From Our Clients
            </h2>
          </div>
        </section>

        {/* Row 6: Testimonial Section */}
        <section className="py-[40px] md:py-[85px] px-0" style={{
          backgroundImage: 'url(/images/backgrounds/blur-blue.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top'
        }}>
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg" style={{ borderRadius: '100px' }}>
                <Image
                  src="/images/testimonials/testimonial-image.jpg"
                  alt="Client testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                <p>
                  Now that we have a chance to live in our home for a couple of months, we thank you for being our contractor…every day we remind ourselves how fortunate we are to be here. Thanks again for your help through the process of building our home…<Link href="/testimonial" className="text-white underline">read more</Link>
                </p>
              </blockquote>
              <div className="text-white">
                <strong>Chris & Jeanette</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Row 7: We Are With You Section */}
        <section className="py-[27px] px-0 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-center text-[21px] leading-[1.29] font-normal text-gray-800">
              We Are With You Every Step of the Way
            </h2>
          </div>
        </section>

        {/* Row 8: We Strive Section */}
        <section className="py-[60px] px-0" style={{
          backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'left top'
        }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h1 className="text-center text-[34px] leading-[1.41] font-normal text-gray-800 mb-[10px]">
              We Strive to Meet Your Ultimate Satisfaction
            </h1>
            <div className="max-w-[350px] mx-auto mt-[10px] mb-[40px]">
              <div className="border-t border-black/30 h-[20px]"></div>
            </div>
            <h3 className="text-lg leading-[1.33] font-normal text-gray-800 mb-8">
              Over the years our company has been known for its honesty and integrity. We strive to create pride of ownership in each home that is custom designed and built to meet our client&apos;s needs.
            </h3>
            <div className="relative w-full h-[400px] md:h-[500px] mb-8 text-center">
              <Image
                src="/images/blueprints/blueprint-meeting.jpg"
                alt="Team reviewing blueprints"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Row 9: Your Dream Home Awaits Button */}
        <section className="py-[25px] px-0" style={{
          backgroundColor: 'rgba(255,255,255,0.73)',
          backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)'
        }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4">
              {/* Left column - separator */}
              <div className="flex-1 flex items-center">
                <div className="w-full border-t border-black/40"></div>
              </div>
              {/* Middle column - button */}
              <div className="flex-shrink-0">
                <Link
                  href="/contact-us"
                  className="inline-block border border-black/60 text-black px-8 py-3 hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  Your Dream Home Awaits
                </Link>
              </div>
              {/* Right column - separator */}
              <div className="flex-1 flex items-center">
                <div className="w-full border-t border-black/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Row 10: Final CTA Section with background image */}
        <section className="relative py-[100px] px-0 overflow-hidden" style={{
          backgroundColor: 'rgba(0,47,108,0.73)',
          backgroundImage: 'url(/images/backgrounds/bottom-contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundBlendMode: 'overlay',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Parallax inner background layer */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: -1,
              backgroundImage: 'url(/images/backgrounds/bottom-contact.jpg)',
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: 'rgba(0, 47, 108, 0.73)',
              backgroundBlendMode: 'overlay',
              minHeight: '150px'
            }}
          />
          
          <div className="relative w-full max-w-full mx-auto px-6 md:px-12 text-center" style={{ zIndex: 1 }}>
            {/* Logo - Responsive scaling */}
            <div className="mb-8">
              <div className="max-w-[1200px] mx-auto">
                <Image
                  src="/images/logo/braxton-white-gold.png"
                  alt="Braxton Builders"
                  width={1200}
                  height={344}
                  className="w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            {/* Heading */}
            <h1 
              className="text-white text-center mb-2"
              style={{
                fontSize: 'clamp(24px, 4vw, 34px)',
                lineHeight: '1.41',
                fontWeight: 'normal',
                margin: '0 0 0.5rem 0',
                color: '#ffffff'
              }}
            >
              We Build From Concept To Completion
            </h1>
            
            {/* Subheading */}
            <p 
              className="text-white text-center"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 18px)',
                marginTop: '0',
                marginBottom: '0',
                color: '#ffffff'
              }}
            >
              Through Creative Ideas, Innovation & Quality
            </p>
            
            {/* Separator */}
            <div className="max-w-full mx-auto mt-[9px] mb-[9px]">
              <div className="border-t border-white/40"></div>
            </div>
            
            {/* Button */}
            <div className="mt-4">
              <button
                onClick={openModal}
                className="inline-block border text-white px-8 py-3 font-semibold text-lg transition-all hover:bg-white/10 hover:border-white cursor-pointer"
                style={{
                  borderColor: 'rgba(255,255,255,.6)',
                  borderWidth: '1px',
                  backgroundColor: 'rgba(255,255,255,0)',
                }}
              >
                Let&apos;s Get Started!
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
