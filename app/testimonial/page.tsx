'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function Testimonial() {
  const { openModal } = useContactModal();

  return (
    <main id="main" className="clearfix w-full bg-white" style={{ position: 'relative', zIndex: 3 }}>
      {/* Hero Section - Testimonials Heading */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ height: '300px', maxHeight: '300px' }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/08/Luxury-Custom-Home-Builder-Scottsdale-Arizona-Braxton-Homes-Home-7.jpg?fit=2048%2C1534&ssl=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark gradient overlay for better text contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
            zIndex: 1,
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
              textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
              letterSpacing: '2px',
            }}
          >
            Testimonials
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-0 px-0" style={{ backgroundColor: 'rgba(255,255,255,0.5)', paddingBottom: '50px', paddingTop: '60px' }}>
        <div className="max-w-full mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-5" style={{ marginTop: '0' }}>
            <h3 
              className="text-center"
              style={{
                fontSize: '18px',
                lineHeight: '1.33',
                fontWeight: 'normal',
                margin: '0',
                color: '#000000'
              }}
            >
              Santa Elizabeth Home Testimonial
            </h3>
          </div>
          
          {/* Separator */}
          <div className="max-w-[200px] mx-auto" style={{ marginTop: '5px', marginBottom: '45px' }}>
            <div className="border-t" style={{ height: '20px', borderTopWidth: '1px', borderColor: '#e0e0e0' }}></div>
          </div>

          {/* Testimonial Text */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="text-gray-700 space-y-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              <p>Charlie,</p>
              <p>
                Now that we have a chance to live in our home for a couple of months, we thank you for being our contractor. During the process, it was sometimes overwhelming but you kept us on schedule. We are working on finishing things up on the inside, closets, pantry, garage, etc. and almost every day we remind ourselves how fortunate we are to live here. Thanks again for your help through the process of building our home.
              </p>
              <p>Thank you,</p>
              <p>Chris &amp; Jeanette</p>
            </div>
          </div>

          {/* Testimonial Image */}
          <div className="text-center mb-8">
            <div className="inline-block" style={{ borderRadius: '5px', boxShadow: '0 0 3px rgba(0,0,0,0.3)' }}>
              <Image
                src="https://i0.wp.com/braxtonhomesaz.com/wp-content/uploads/2018/09/Luxury-Custom-Home-Builder-Scottsdale-Arizona-Braxton-Homes-Testimonial.jpg?fit=2016%2C1512&ssl=1"
                alt="Luxury Custom Home Builder Scottsdale Arizona Braxton Homes - Testimonial"
                width={1200}
                height={900}
                className="mx-auto"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
          </div>

          {/* Thank You Bowl Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-4xl mx-auto mb-8">
            <div className="md:col-span-3"></div>
            <div className="md:col-span-6 text-center">
              <p className="text-gray-700" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Beautiful Wood Segmented Bowl made by Chris as a Thank You for all the hard work on the house.
              </p>
            </div>
            <div className="md:col-span-3"></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section with Background Image */}
      <section 
        className="relative py-[100px] px-0 overflow-hidden"
        style={{
          backgroundColor: 'rgba(0,47,108,0.73)',
          backgroundImage: 'url(https://braxton.gosparksites.com/wp-content/uploads/2018/08/Bottom-of-Home-Page-contact-page3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
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
            We Build From Concept To Completion
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
            Through Creative Ideas, Innovation & Quality
          </p>

          {/* Separator */}
          <div className="w-full" style={{ marginTop: '9px', marginBottom: '9px' }}>
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
    </main>
  );
}

