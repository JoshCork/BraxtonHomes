'use client';

import { useState } from 'react';
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
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6 md:px-12">
        <div className="mb-8">
          <Link href="/" className="hover:underline" style={{ color: '#4A6895' }}>
            Braxton Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email <span className="text-red-500">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#4A6895' }}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Fill out the form and our team will be in touch with you promptly. Thank you for your interest!
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Phone:</strong> 602.363.0048
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:crcork@braxtonhomesaz.com" className="hover:underline" style={{ color: '#4A6895' }}>
                    crcork@braxtonhomesaz.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-block text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-semibold"
                style={{ backgroundColor: '#4A6895' }}
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

