'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        // Auto-close after 2 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '40px' }}
      >
        {/* Close X Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
          style={{ fontSize: '24px', lineHeight: '1', width: '30px', height: '30px' }}
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#4A6895' }}>
          We&apos;d Love To Hear From You!
        </h2>

        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/images/logo/BRAXTON.png"
            alt="Braxton Custom Homes"
            width={400}
            height={115}
            className="mx-auto"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Introductory Text */}
        <p className="text-center text-gray-700 mb-8">
          Fill out the form and our team will be in touch with you promptly. Thank you for your interest!
        </p>

        {/* Two Column Layout: Contact Info (Left) and Form (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">
                <strong>Address:</strong><br />
                10232 E. Cindercone Trail<br />
                Scottsdale, AZ 85262
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Phone:</strong> 480.538.0864
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:charlie@braxtonhomesaz.com" className="hover:underline" style={{ color: '#4A6895' }}>
                  charlie@braxtonhomesaz.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Website:</strong>{' '}
                <a href="https://www.braxtonhomesaz.com" className="hover:underline" style={{ color: '#4A6895' }}>
                  www.braxtonhomesaz.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  Your Name <span className="text-red-500">(required)</span>
                </p>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  Your Email <span className="text-red-500">(required)</span>
                </p>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <p className="mb-2 text-gray-700 font-medium">Subject</p>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Your Message<br />
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-braxton-blue-solid focus:border-braxton-blue-solid mt-2 resize-y"
                    style={{ backgroundColor: 'white' }}
                  />
                </label>
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#E8A825' }}
              >
                {isSubmitting ? 'Sending...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-semibold"
            style={{ backgroundColor: '#E8A825' }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

