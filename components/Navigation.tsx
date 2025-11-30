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
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.href}>
            {item.children ? (
              <div className="space-y-1">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`flex-1 block px-4 py-2 text-gray-700 hover:bg-[#E8A825]/20 rounded relative ${
                      item.children.some(child => isActive(child.href))
                        ? 'bg-[#E8A825]/20 font-semibold'
                        : ''
                    }`}
                    style={{ fontSize: '14px', lineHeight: '1.5' }}
                    aria-haspopup="true"
                  >
                    <span className="menu-text">{item.label}</span>
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
                  <ul className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-gray-600 hover:bg-[#E8A825]/20 rounded relative ${
                            isActive(child.href) ? 'bg-[#E8A825]/20 font-semibold' : ''
                          }`}
                          style={{ fontSize: '13px', lineHeight: '1.5' }}
                        >
                          <span>{child.label}</span>
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
                className={`block px-4 py-2 text-gray-700 hover:bg-[#E8A825]/20 rounded relative ${
                  isActive(item.href) ? 'bg-[#E8A825]/20 font-semibold' : ''
                }`}
                style={{ fontSize: '14px', lineHeight: '1.5' }}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <span className="menu-text">{item.label}</span>
                {isActive(item.href) && (
                  <span className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#4A6895' }}></span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

