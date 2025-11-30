import PortfolioGallery from '@/components/PortfolioGallery';
import { portfolioImages } from '@/data/portfolio-images';

export default function SonoranReserve() {
  return (
    <PortfolioGallery 
      images={portfolioImages['sonoran-reserve']}
      title="Sonoran Reserve"
      autoplayInterval={7000} // 7 seconds like the WordPress site
    />
  );
}
