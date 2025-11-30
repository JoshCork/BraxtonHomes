import PortfolioGallery from '@/components/PortfolioGallery';
import { portfolioImages } from '@/data/portfolio-images';

export default function PinnacleCanyon() {
  return (
    <PortfolioGallery 
      images={portfolioImages['pinnacle-canyon']}
      title="Pinnacle Canyon"
      autoplayInterval={7000} // 7 seconds like the WordPress site
    />
  );
}
