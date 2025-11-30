import PortfolioGallery from '@/components/PortfolioGallery';
import { portfolioImages } from '@/data/portfolio-images';

export default function Talus() {
  return (
    <PortfolioGallery 
      images={portfolioImages['talus']}
      title="Talus"
      autoplayInterval={7000} // 7 seconds like the WordPress site
    />
  );
}
