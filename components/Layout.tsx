import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Header />
      <MobileMenu />
      <main className="flex-1 md:ml-[225px] w-full" style={{ minWidth: 0 }}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

