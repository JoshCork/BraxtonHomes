'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OurWork() {
  const projects = [
    {
      id: 'pinnacle-canyon',
      name: 'Pinnacle Canyon',
      image: 'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/07/Home-Braxton-Homes-2023-Update-Slider-DJI-0005.jpg?resize=1170%2C761&ssl=1',
      href: '/portfolio-items/pinnacle-canyon',
      hasGallery: false,
    },
    {
      id: 'sonoran-reserve',
      name: 'Sonoran Reserve',
      image: 'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/08/Braxton-Homes-Sonoran-Reserve-110-Home-2023-Update-Slider-Pics.jpg?resize=1170%2C761&ssl=1',
      href: '/portfolio-items/sonoran-reserve',
      hasGallery: true,
      galleryImage: 'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2023/08/Braxton-Homes-Sonoran-Reserve-110-Home-2023-Update-Slider-Pics.jpg?fit=2000%2C1300&ssl=1',
    },
    {
      id: 'talus',
      name: 'Talus',
      image: 'https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/Luxury-Custom-Home-Builder-Scottsdale-Arizona-Braxton-Homes-Talus-1.jpg?resize=1170%2C761&ssl=1',
      href: '/portfolio-items/talus',
      hasGallery: false,
    },
  ];

  return (
    <div id="main" className="clearfix w-full bg-white">
      <div className="w-full bg-white">
        {/* Hero Section - Slider with "Projects" heading */}
        <section 
          className="relative w-full overflow-hidden"
          style={{ height: '300px', maxHeight: '300px' }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/36-pool-1366x880.jpg?fit=1366%2C880&ssl=1)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 
              className="text-white text-center"
              style={{
                fontSize: '75px',
                lineHeight: '1.2',
                fontWeight: 'normal',
                margin: '0px',
              }}
            >
              Projects
            </h2>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-[70px] px-0 bg-white" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
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
              RECENT PROJECTS
            </h2>
            
            {/* Separator */}
            <div className="max-w-[200px] mx-auto" style={{ marginTop: '5px', marginBottom: '45px' }}>
              <div className="border-t" style={{ height: '20px', borderTopWidth: '1px', borderColor: '#e0e0e0' }}></div>
            </div>

            {/* Portfolio Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ margin: '0px', position: 'relative', minHeight: '387px' }}>
              {projects.map((project) => (
                <article 
                  key={project.id}
                  className="relative"
                >
                  <div className="relative group" style={{ border: 'medium', opacity: 1 }}>
                    <Link href={project.href} className="block">
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1170/761' }}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center pointer-events-none">
                          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.hasGallery && (
                              <>
                                <div className="block mb-2 text-white" style={{ fontSize: '15px', lineHeight: '1.33' }}>
                                  Gallery
                                </div>
                                <div className="w-12 h-px bg-white mx-auto mb-2"></div>
                              </>
                            )}
                            <h4 
                              className="text-white"
                              style={{
                                fontSize: '15px',
                                lineHeight: '1.33',
                                fontWeight: 'normal',
                                margin: '0'
                              }}
                            >
                              {project.name}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section 
          className="py-[25px] px-0"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.73)',
            paddingTop: '25px',
            paddingBottom: '20px'
          }}
        >
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left column - separator */}
              <div className="hidden md:block">
                <div className="border-t" style={{ marginTop: '43px', borderColor: 'rgba(0,0,0,0.4)', borderTopWidth: '1px', height: '20px' }}></div>
              </div>
              
              {/* Center column - button */}
              <div className="text-center">
                <div className="border-t" style={{ marginTop: '14px', marginBottom: '0px' }}></div>
                <Link
                  href="/contact-us"
                  className="inline-block border text-black px-8 py-3 font-semibold text-lg transition-all hover:bg-black/10 hover:border-black/60 mt-4"
                  style={{
                    borderColor: 'rgba(0,0,0,0.6)',
                    borderWidth: '1px',
                    backgroundColor: 'rgba(255,255,255,0)',
                  }}
                >
                  Your Dream Home Awaits
                </Link>
              </div>
              
              {/* Right column - separator */}
              <div className="hidden md:block">
                <div className="border-t" style={{ marginTop: '43px', borderColor: 'rgba(0,0,0,0.4)', borderTopWidth: '1px', height: '20px' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section 
          className="relative py-[100px] px-0 overflow-hidden"
          style={{
            backgroundImage: 'url(https://braxton.gosparksites.com/wp-content/uploads/2018/08/Bottom-of-Home-Page-contact-page3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'left top',
            backgroundColor: 'rgba(0,47,108,0.73)',
            backgroundBlendMode: 'overlay',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="relative w-full max-w-full mx-auto px-6 md:px-12 text-center" style={{ zIndex: 1 }}>
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/BRAXTON-WHITE-GOLD.png?fit=3327%2C954&ssl=1"
                alt="Braxton Builders"
                width={1200}
                height={344}
                className="w-full h-auto mx-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Heading */}
            <h1 
              className="text-white text-center mb-2"
              style={{
                fontSize: '34px',
                lineHeight: '1.41',
                fontWeight: 'normal',
                margin: '0',
                color: '#ffffff'
              }}
            >
              <span style={{ color: '#ffffff' }}>We Build From Concept To Completion</span>
            </h1>
            
            {/* Subheading */}
            <p 
              className="text-white text-center"
              style={{
                fontSize: '18px',
                marginTop: '-20px',
                textAlign: 'center',
                color: '#ffffff'
              }}
            >
              <span style={{ color: '#ffffff' }}>Through Creative Ideas, Innovation & Quality</span>
            </p>

            {/* Separator */}
            <div className="w-full" style={{ marginTop: '9px', marginBottom: '9px' }}>
              <div className="border-t border-transparent"></div>
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
    </div>
  );
}
