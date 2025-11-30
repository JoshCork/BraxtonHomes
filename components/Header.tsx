import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
  return (
    <aside 
      className="fixed left-0 top-0 h-full bg-white shadow-md z-50 hidden md:block"
      style={{ width: '225px', boxSizing: 'border-box' }}
    >
      <div className="flex flex-col h-full" style={{ padding: '0 20px' }}>
        {/* Logo */}
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Link href="/" className="block">
            <Image
              src="/images/logo/braxton-logo-sm.png"
              alt="Braxton Custom Homes Logo"
              width={150}
              height={43}
              style={{ maxHeight: '86px', height: 'auto', width: 'auto', maxWidth: '100%' }}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Contact Info */}
        <div className="mt-auto pt-8 space-y-2" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          <p className="text-gray-700" style={{ color: '#4A6895' }}>602.363.0048</p>
          <Link 
            href="mailto:crcork@braxtonhomesaz.com" 
            className="hover:opacity-80"
            style={{ color: '#4A6895' }}
          >
            crcork@braxtonhomesaz.com
          </Link>
        </div>
      </div>
    </aside>
  );
}

