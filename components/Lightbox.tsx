'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const lightboxContent = (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
      style={{ 
        zIndex: 99999,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'fixed'
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
        style={{
          fontSize: '32px',
          lineHeight: '1',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
        }}
      >
        ×
      </button>

      {/* Image container - click on image doesn't close */}
      <div
        className="w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );

  // Render to document body using portal to escape layout constraints
  return createPortal(lightboxContent, document.body);
}

