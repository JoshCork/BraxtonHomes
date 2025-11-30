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
              width={200}
              height={57}
              style={{ width: '200px', height: 'auto' }}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <Navigation />
      </div>
    </aside>
  );
}

