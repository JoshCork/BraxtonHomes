'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';

export default function SignatureDesign() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div id="main" className="clearfix w-full bg-white" style={{ position: 'relative', zIndex: 3 }}>
      <div className="w-full bg-white">
        {/* Hero Section */}
        <section 
          className="relative w-full py-[130px] px-0 overflow-hidden"
          style={{
            backgroundImage: 'url(https://braxton.gosparksites.com/wp-content/uploads/2018/08/26-HERO.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="relative max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="md:w-[48%]">
                <h1 
                  className="text-white mb-0"
                  style={{
                    fontSize: '34px',
                    lineHeight: '1.41',
                    fontWeight: 'normal',
                    margin: '0',
                    color: '#ffffff'
                  }}
                >
                  SIGNATURE DESIGN
                </h1>
                
                {/* Separator */}
                <div className="w-full mt-5 mb-5">
                  <div className="border-t border-white/40"></div>
                </div>
                
                {/* Contact Us Button */}
                <div className="mt-4">
        <Link
                    href="/contact-us"
                    className="inline-block border text-white px-8 py-3 font-semibold text-lg transition-all hover:bg-white/10 hover:border-white"
                    style={{
                      borderColor: '#ffffff',
                      borderWidth: '1px',
                      backgroundColor: '#4a7eab',
                    }}
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Empty */}
              <div className="md:w-[48%]"></div>
            </div>
          </div>
        </section>

        {/* BATHROOM DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              BATHROOM DESIGN
            </h2>
          </div>
        </section>

        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-[4%]">
              {/* Left Image - 3/5 width (58.4%) */}
              <div 
                className="w-full md:w-[58.4%] bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                onClick={() => openLightbox('https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/26-leftview-1366x880.jpg', 'Bathroom design')}
              >
                <div className="relative w-full" style={{ aspectRatio: '1366/880' }}>
                  <Image
                    src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/26-leftview-1366x880.jpg"
                    alt="Bathroom design"
                    fill
                    className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Right Image - 2/5 width (37.6%) */}
              <div 
                className="w-full md:w-[37.6%] bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                onClick={() => openLightbox('https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/27-square-750x750.jpg', 'Bathroom design detail')}
              >
                <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/27-square-750x750.jpg"
                    alt="Bathroom design detail"
                    fill
                    className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Header Image - Backyard */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxtonhomesaz.com/wp-content/uploads/2023/11/BACKYARD-SECTION-HEADER-IMAGE.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* BACKYARD DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              BACKYARD DESIGN
            </h2>
          </div>
        </section>

        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-[4%]">
              {/* Left Image - 3/5 width (58.4%) */}
              <div 
                className="w-full md:w-[58.4%] bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                onClick={() => openLightbox('https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/36-pool-1366x880.jpg', 'Pool design')}
              >
                <div className="relative w-full" style={{ aspectRatio: '1366/880' }}>
                  <Image
                    src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/36-pool-1366x880.jpg"
                    alt="Pool design"
                    fill
                    className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Right Image - 2/5 width (37.6%) */}
              <div 
                className="w-full md:w-[37.6%] bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                onClick={() => openLightbox('https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/40-Pool-square-750x750.jpg', 'Pool design detail')}
              >
                <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/40-Pool-square-750x750.jpg"
                    alt="Pool design detail"
                    fill
                    className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div 
              className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
              onClick={() => openLightbox('https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Luxury-Custom-Home-Builder-Scottsdale-Arizona-Braxton-Homes-Talus-7.webp', 'Luxury custom home backyard')}
            >
              <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                <Image
                    src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Luxury-Custom-Home-Builder-Scottsdale-Arizona-Braxton-Homes-Talus-7.webp"
                  alt="Luxury custom home backyard"
                  fill
                  className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Header Image - Architecture */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxtonhomesaz.com/wp-content/uploads/2023/11/section-header-architecture.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* ARCHITECTURAL DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              ARCHITECTURAL DESIGN
            </h2>
          </div>
        </section>

        {/* 4 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Braxton-Homes-Sonoran-Reserve-110-Home-2023-Update-Slider-Pics-architecture-1.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Braxton-Homes-Sonoran-Reserve-101-architecture-Home.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-DJI_0010-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-DJI_0008-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Architecture design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Architecture design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-Braxton-Homes-2023-Update-Slider-Pics-DJI-84.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-Braxton-Homes-2023-Update-Slider-Pics-DJI-55.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Architecture design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Architecture design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-Braxton-Homes-2023-Update-Slider-Pics-DJI-35.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-2683-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-2669-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Architecture design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Architecture design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Another 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architecture-3A4A2792-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Architeture-2724-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Architecture design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Architecture design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Header Image - Man Cave */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxton.gosparksites.com/wp-content/uploads/2018/08/19-ManCave-1950x650-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* MAN CAVE DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              MAN CAVE DESIGN
            </h2>
          </div>
        </section>

        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/mancave-pooltable-1366x880.jpg',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/mancave-kitchen-1366x880.jpg',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/mancave-entrance-1366x880.jpg',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Man cave design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '1366/880' }}>
                    <Image
                      src={src}
                      alt={`Man cave design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Header Image - Kitchen */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Section-Image.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* KITCHEN DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              KITCHEN DESIGN
            </h2>
          </div>
        </section>

        {/* 4 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-5X7A2475-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Prep-Kitchen-5X7A2552-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Braxton-Homes-2023-Update-Slider-Pics-2569.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Braxton-Homes-2023-Update-Slider-Pics-2584.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Kitchen design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Kitchen design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Another 4 Column Grid (duplicate) */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-5X7A2475-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Prep-Kitchen-5X7A2552-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Braxton-Homes-2023-Update-Slider-Pics-2569.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Braxton-Homes-2023-Update-Slider-Pics-2584.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Kitchen design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Kitchen design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-5X7A2455-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Kitchen-Braxton-Homes-2023-Update-Slider-Pics-5X7A2586.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Kitchen design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Kitchen design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Header Image - Indoor/Outdoor */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxtonhomesaz.com/wp-content/uploads/2023/11/Header-Image-IOE.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* INDOOR/OUTDOOR ENTERTAINMENT DESIGN Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              INDOOR/OUTDOOR ENTERTAINMENT DESIGN
            </h2>
          </div>
        </section>

        {/* 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-Braxton-Homes-2023-Update-Slider-Pics-DJI-77.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-3A4A2783-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Indoor/Outdoor design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Indoor/Outdoor design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Another 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-5X7A2605-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-5X7A2586-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Indoor/Outdoor design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Indoor/Outdoor design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Another 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-5X7A2605-Edit-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Indoor_Outdoor-5X7A2522-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Indoor/Outdoor design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Indoor/Outdoor design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Header Image - Pools */}
        <div style={{ position: 'relative', width: '100%', marginLeft: '-225px', left: '225px' }}>
          <section 
            className="px-0"
            style={{
              width: 'calc(100vw - 225px)',
              paddingTop: '200px',
              paddingBottom: '50px',
              backgroundImage: 'url(https://braxtonhomesaz.com/wp-content/uploads/2023/11/SECTION-HEADER-IMAGE-POOLS.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="fusion-builder-row fusion-row"></div>
          </section>
        </div>

        {/* POOL DESIGNS Section */}
        <section className="py-[70px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <h2 
              className="text-center"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              POOL DESIGNS
            </h2>
          </div>
        </section>

        {/* 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Backyard_Pool-2717-Braxton-Homes-2023-Update-Slider-Pics.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Backyard_Pool-2-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Pool design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Pool design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Another 2 Column Grid */}
        <section className="pb-[110px] px-0 bg-white">
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Pools-Braxton-Homes-2023-Update-Slider-Pics-DJI-74.webp',
                'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/11/Backyard_Pool-2717-Braxton-Homes-2023-Update-Slider-Pics.webp',
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f8f8] p-4 rounded overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(src, `Pool design ${idx + 1}`)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2000/1300' }}>
                    <Image
                      src={src}
                      alt={`Pool design ${idx + 1}`}
                      fill
                      className="object-cover rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative py-[100px] px-0 overflow-hidden" style={{
          backgroundColor: 'rgba(0,47,108,0.73)',
          backgroundImage: 'url(https://braxton.gosparksites.com/wp-content/uploads/2018/08/Bottom-of-Home-Page-contact-page3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundBlendMode: 'overlay',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="relative w-full max-w-full mx-auto px-6 md:px-12 text-center" style={{ zIndex: 1 }}>
            {/* Logo */}
            <div className="mb-8">
              <div className="max-w-[1200px] mx-auto">
                <Image
                  src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/BRAXTON-WHITE-GOLD.png"
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
              <Link
                href="/contact-us"
                className="inline-block border text-white px-8 py-3 font-semibold text-lg transition-all hover:bg-white/10 hover:border-white"
                style={{
                  borderColor: 'rgba(255,255,255,.6)',
                  borderWidth: '1px',
                  backgroundColor: 'rgba(255,255,255,0)',
                }}
              >
                Let&apos;s Get Started!
        </Link>
      </div>
    </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxImage !== null}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
        onClose={closeLightbox}
      />
    </div>
  );
}
