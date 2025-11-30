'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/design-details', label: 'Signature Design' },
  {
    href: '/our-work',
    label: 'Projects',
    children: [
      { href: '/our-work', label: 'All Projects' },
      { href: '/portfolio-items/pinnacle-canyon', label: 'Pinnacle Canyon' },
      { href: '/portfolio-items/sonoran-reserve', label: 'Sonoran Reserve' },
      { href: '/portfolio-items/talus', label: 'Talus' },
    ],
  },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  // Auto-expand submenu if any child is active
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.children && item.children.some(child => isActive(child.href))) {
        setExpandedItems(prev => new Set(prev).add(item.label));
      }
    });
  }, [pathname]);

  const toggleSubmenu = (label: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <nav className="flex-1" aria-label="Main Menu">
      <ul className="space-y-0">
        {navItems.map((item, index) => (
          <li key={item.href}>
            {/* Separator line between menu items - spans full width */}
            {index > 0 && (
              <div className="border-t border-gray-200"></div>
            )}
            {item.children ? (
              <div className="space-y-1">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`flex-1 block py-2 text-gray-700 hover:bg-[#f5f0e8] relative ${
                      item.children.some(child => isActive(child.href))
                        ? 'bg-[#f5f0e8] font-semibold'
                        : ''
                    }`}
                    style={{ 
                      fontSize: '14px', 
                      lineHeight: '1.5'
                    }}
                    aria-haspopup="true"
                  >
                    <span className="menu-text" style={{ paddingLeft: '58px', paddingRight: '58px', display: 'block' }}>{item.label}</span>
                    {item.children.some(child => isActive(child.href)) && (
                      <span className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#4A6895' }}></span>
                    )}
                  </Link>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="px-2 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={expandedItems.has(item.label)}
                    style={{ fontSize: '14px' }}
                  >
                    <span className={`transition-transform duration-200 ${expandedItems.has(item.label) ? 'rotate-90' : ''}`}>
                      ▶
                    </span>
                  </button>
                </div>
                {expandedItems.has(item.label) && (
                  <ul className="ml-4 space-y-0">
                    {item.children.map((child, childIndex) => (
                      <li key={child.href}>
                        {/* Separator line between submenu items */}
                        {childIndex > 0 && (
                          <div className="border-t border-gray-200" style={{ marginLeft: '-16px' }}></div>
                        )}
                        <Link
                          href={child.href}
                          className={`block py-2 text-gray-600 hover:bg-[#f5f0e8] relative ${
                            isActive(child.href) ? 'bg-[#f5f0e8] font-semibold' : ''
                          }`}
                          style={{ 
                            fontSize: '13px', 
                            lineHeight: '1.5'
                          }}
                        >
                          <span style={{ paddingLeft: '58px', paddingRight: '58px', display: 'block' }}>{child.label}</span>
                          {isActive(child.href) && (
                            <span className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#4A6895' }}></span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`block py-2 text-gray-700 hover:bg-[#f5f0e8] relative ${
                  isActive(item.href) ? 'bg-[#f5f0e8] font-semibold' : ''
                }`}
                style={{ 
                  fontSize: '14px', 
                  lineHeight: '1.5'
                }}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <span className="menu-text" style={{ paddingLeft: '58px', paddingRight: '58px', display: 'block' }}>{item.label}</span>
                {isActive(item.href) && (
                  <span className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#4A6895' }}></span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
      
      {/* Separator line above contact info - spans full width */}
      <div className="border-t border-gray-200"></div>

      {/* Contact Info - Right below Contact Us, with more padding above */}
      <div className="space-y-2" style={{ 
        fontSize: '13px', 
        lineHeight: '1.5', 
        paddingTop: '16px' 
      }}>
        <div style={{ paddingLeft: '58px', paddingRight: '58px' }}>
          <p className="text-gray-700" style={{ color: '#4A6895' }}>602.363.0048</p>
          <Link 
            href="mailto:crcork@braxtonhomesaz.com" 
            className="hover:opacity-80 block"
            style={{ color: '#4A6895' }}
          >
            crcork@braxtonhomesaz.com
          </Link>
        </div>
      </div>
    </nav>
  );
}

