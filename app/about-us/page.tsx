import Image from 'next/image';
import Link from 'next/link';
import FlipBox from '@/components/FlipBox';

export default function AboutUs() {
  return (
    <main id="main" className="clearfix w-full bg-white" style={{ position: 'relative', zIndex: 3 }}>
      <div className="w-full bg-white">
        {/* Header/Banner - Slider with "Braxton Homes" text */}
        <div className="relative w-full" style={{ height: '300px', maxHeight: '300px' }}>
          <div className="relative w-full h-full">
            <Image
              src="/images/about/about-banner.jpg"
              alt="Braxton Homes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 
                  className="mb-0"
                  style={{
                    fontSize: '75px',
                    lineHeight: '1.2',
                    fontWeight: 'normal',
                    margin: '0px',
                    color: '#ffffff'
                  }}
                >
                  Braxton Homes
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: About Braxton Homes */}
        <section className="py-0 px-0" style={{ backgroundColor: '#ffffff' }}>
          <div className="w-full">
            {/* Heading */}
            <div className="text-center" style={{ paddingTop: '40px' }}>
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
                ABOUT BRAXTON HOMES
              </h2>
            </div>
            
            {/* Separator */}
            <div className="max-w-[200px] mx-auto" style={{ marginTop: '5px', marginBottom: '45px' }}>
              <div className="border-t border-gray-300" style={{ height: '20px' }}></div>
            </div>
            
            {/* Large Image */}
            <div className="text-center mb-0">
              <div className="inline-block" style={{ borderRadius: '5px' }}>
                <Image
                  src="/images/about/summit-22.jpg"
                  alt="Luxury Custom Home Builder Scottsdale Arizona Braxton Homes Summit 22"
                  width={2048}
                  height={1367}
                  className="w-full h-auto max-w-full"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            {/* Separator */}
            <div className="w-full" style={{ marginTop: '20px', marginBottom: '10px' }}>
              <div className="border-t border-transparent"></div>
            </div>
            
            {/* Text Content */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pb-0" style={{ paddingTop: '20px' }}>
              <div className="space-y-4 text-gray-700">
                <p style={{ fontWeight: 400 }}>
                  The goals Braxton Builders has for the truly custom home are architecturally unique, pleasing and functional home with a comfortable feeling.
                </p>
                <p style={{ fontWeight: 400 }}>
                  We begin by bringing clients together with the architect to determine the needs of the client, the style of the home, orientation of the home, interior layout and exterior elevations and the best views of the home on the property. This process allows us to consider every detail i.e. materials, finish, space, light, form, position, building green, comfort, warmth and aesthetic appeal.
                </p>
                <p style={{ fontWeight: 400 }}>
                  We strive to meet the needs of the homeowner and build with particular attention to every detail. &nbsp;&nbsp;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: It's All About Custom Heading */}
        <section className="py-[10px] px-0" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
          <div className="w-full">
            <div className="text-center">
              <h2 
                className="text-center"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.29',
                  fontWeight: 'normal',
                  margin: '0',
                  color: '#ffffff'
                }}
              >
                It&apos;s All About Custom
              </h2>
            </div>
          </div>
        </section>

        {/* Section 3: Two-column layout with flip boxes */}
        <section 
          className="py-[80px] px-0" 
          style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            backgroundImage: 'url(/images/backgrounds/bkgd-lines.jpg)',
            backgroundRepeat: 'repeat',
            backgroundBlendMode: 'overlay',
            paddingTop: '80px',
            paddingBottom: '30px'
          }}
        >
          <div className="w-full max-w-full mx-auto px-6 md:px-12">
            <div className="flex flex-col xl:flex-row gap-4">
              {/* Left Column - It's All About Custom */}
              <div className="xl:w-[30.6666%] xl:mr-[4%] w-full">
                <h3 
                  className="text-center text-black"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.33',
                    fontWeight: 'normal',
                    margin: '0',
                    color: '#000000'
                  }}
                >
                  It&apos;s All About Custom
                </h3>
                
                {/* Separator */}
                <div className="max-w-[200px] mx-auto" style={{ marginTop: '5px', marginBottom: '20px' }}>
                  <div className="border-t border-black/30" style={{ height: '20px', borderTopWidth: '1px' }}></div>
                </div>
                
                <p className="text-center text-black" style={{ fontWeight: 400, fontSize: 'clamp(16px, 2.5vw, 18px)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  When creating your dream home, we are sure to include your personal ideas and wishes. We can assist you with your ideas and provide additional options to make your home unique.
                </p>
                
                {/* Separator */}
                <div className="w-full" style={{ marginTop: '5px', marginBottom: '5px' }}>
                  <div className="border-t border-transparent"></div>
                </div>
                
                {/* Contact Us Button */}
                <div className="text-center mt-4">
                  <Link
                    href="/contact-us"
                    className="inline-block px-6 py-3 font-semibold text-base transition-all border rounded hover:bg-white/40"
                    style={{
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: '#6796bf',
                      borderWidth: '1px',
                      color: '#6796bf'
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Three Flip Boxes */}
              <div className="xl:w-[65.3333%] w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Flip Box 1: Designed for Your Lifestyle */}
                  <FlipBox
                    frontIcon={<i className="fas fa-drafting-compass"></i>}
                    frontTitle="Designed for Your Lifestyle"
                    backContent="Our Architects will help you design a house based on your lifestyle, your style preferences, the lot style and the lot views."
                    backColor="#4a7eab"
                    iconColor="#e9a825"
                  />
                  
                  {/* Flip Box 2: The Location of Your Choice */}
                  <FlipBox
                    frontIcon={<i className="fas fa-map-marker-alt"></i>}
                    frontTitle="The Location of Your Choice"
                    backContent="Your custom home will be built on your lot or we can assist you with a home site evaluation.&nbsp; We work with you."
                    backColor="#e0be8a"
                    iconColor="#4a7eab"
                  />
                  
                  {/* Flip Box 3: Energy-Efficiency is Our Priority */}
                  <FlipBox
                    frontIcon={<i className="far fa-lightbulb"></i>}
                    frontTitle="Energy-Efficiency is Our Priority"
                    backContent="Braxton Custom Homes are built with energy-efficiency &amp; family comfort in mind.&nbsp; All our homes are energy-efficient."
                    backColor="#b6c387"
                    iconColor="#e9a825"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Bottom CTA Section (same as homepage) */}
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
    </main>
  );
}
