'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded shadow-lg"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/logo/braxton-logo.png"
                alt="Braxton Custom Homes Logo"
                width={200}
                height={80}
                className="mb-2"
              />
              <div>
                <p className="font-bold text-xl" style={{ color: '#4A6895' }}>BRAXTON</p>
                <p className="text-xs" style={{ color: '#4A6895' }}>BUILDERS, LLC | FINE CUSTOM HOMES</p>
              </div>
            </Link>
          </div>
          <nav className="p-6" aria-label="Main Menu">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#E8A825]/20 rounded"
                        aria-haspopup="true"
                      >
                        <span className="menu-text">{item.label}</span> {openSubmenu === item.label ? '−' : '+'}
                      </button>
                      {openSubmenu === item.label && (
                        <ul className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 text-sm text-gray-600 hover:bg-[#E8A825]/20 rounded relative ${
                                  isActive(child.href) ? 'bg-[#E8A825]/20 font-semibold' : ''
                                }`}
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
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-gray-700 hover:bg-[#E8A825]/20 rounded relative ${
                        isActive(item.href) ? 'bg-[#E8A825]/20 font-semibold' : ''
                      }`}
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
        </div>
      )}
    </div>
  );
}

