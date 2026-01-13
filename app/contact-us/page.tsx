'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="main" className="clearfix w-full bg-white" style={{ position: 'relative', zIndex: 3 }}>
      {/* Top Section - Two Column Layout */}
      <div className="w-full bg-white" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
            {/* Left Column - Logo and Contact Info */}
            <div className="w-full md:w-[48%] md:mr-[4%] bg-white">
              <div className="text-center mb-10">
                <Image
                  src="/images/logo/BRAXTON.png"
                  alt="Braxton Custom Homes"
                  width={600}
                  height={172}
                  className="mx-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              
              <div className="w-full max-w-[200px] mx-auto my-8 border-t border-gray-300"></div>
              
              <h3 className="text-center text-lg leading-[1.33] mb-8" style={{ fontSize: '18px', lineHeight: '1.33', color: '#4A6895' }}>
                We&apos;d love To Meet You In Person Or Via The Web!
              </h3>
              
              <div className="w-full max-w-[200px] mx-auto my-6 border-t border-gray-300"></div>
              
              <div className="text-center space-y-4 text-gray-700">
                <p className="leading-relaxed">Fill out the form and our team will be in touch with you promptly. Thank you for your interest!</p>
                <p className="leading-relaxed">
                  <strong>Main Office:</strong> 10789 E. Troon North Dr. Scottsdale, AZ 85262<br />
                  <strong>Phone:</strong> 602.363.0048<br />
                  <strong>Email:</strong> crcork@braxtonhomesaz.com
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-[48%] bg-white">
              <form onSubmit={handleSubmit} className="space-y-6 bg-white" style={{ backgroundColor: 'white' }}>
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <p className="mb-2.5 text-gray-700 font-medium">Your Name <span className="text-red-500">(required)</span></p>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                      style={{ backgroundColor: 'white' }}
                    />
                  </div>
                  
                  <div>
                    <p className="mb-2.5 text-gray-700 font-medium">Your Email <span className="text-red-500">(required)</span></p>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                      style={{ backgroundColor: 'white' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <p className="mb-2.5 text-gray-700 font-medium">Subject</p>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                    style={{ backgroundColor: 'white' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2.5 text-gray-700 font-medium">
                    Your Message<br />
                    <textarea
                      name="message"
                      rows={10}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid mt-2 resize-y"
                      style={{ backgroundColor: 'white' }}
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#E8A825' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-md">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section with Background Image */}
      <div 
        className="w-full relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          backgroundImage: 'url(/images/hero/Bottom-of-Home-Page-contact-page3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 47, 108, 0.73)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="max-w-full mx-auto px-4 md:px-8">
          <div className="text-center mb-6">
            <Image
              src="/images/logo/BRAXTON-WHITE-GOLD.png"
              alt="Braxton Custom Homes"
              width={600}
              height={172}
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          
          <div className="text-center">
            <h1 className="text-[34px] leading-[1.41] mb-4 text-white" style={{ fontSize: '34px', lineHeight: '1.41' }}>
              We Build From Concept To Completion
            </h1>
            <p className="text-lg mt-[-20px] mb-4 text-white" style={{ fontSize: '18px', marginTop: '-20px' }}>
              Through Creative Ideas, Innovation & Quality
            </p>
            
            <div className="w-full max-w-full mx-auto my-2 border-t border-white/30"></div>
            
            <div className="mt-4">
              <Link
                href="/"
                className="inline-block text-white px-8 py-3 border border-white/60 rounded hover:bg-white/10 transition-all font-semibold"
                style={{
                  borderWidth: '1px',
                }}
              >
                Let&apos;s Get Started!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
