'use client';

import { ReactNode } from 'react';

interface FlipBoxProps {
  frontIcon: ReactNode;
  frontTitle: string;
  backContent: string;
  backColor: string;
  iconColor: string;
}

export default function FlipBox({ frontIcon, frontTitle, backContent, backColor, iconColor }: FlipBoxProps) {
  return (
    <div className="flip-box-container" style={{ minHeight: '255px', perspective: '1000px' }}>
      <div className="flip-box-inner">
        {/* Front */}
        <div className="flip-box-front">
          <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="mb-4" style={{ color: iconColor, fontSize: '48px' }}>
              {frontIcon}
            </div>
            <h2 
              className="mb-0"
              style={{
                fontSize: '21px',
                lineHeight: '1.29',
                fontWeight: 'normal',
                color: '#333333',
                margin: '0'
              }}
            >
              {frontTitle}
            </h2>
          </div>
        </div>
        
        {/* Back */}
        <div className="flip-box-back" style={{ backgroundColor: backColor }}>
          <div className="p-6 h-full flex items-center justify-center">
            <p 
              className="mb-0 text-center text-white" 
              style={{ 
                color: '#ffffff',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: '1.5',
                width: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              {backContent}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

