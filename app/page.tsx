import { Feedback } from '@/app/ui/Feedback/Feedback';
import { ReviewsSection } from './ui/ReviewsSection/ReviewsSection';
import { GallerySection } from './ui/GallerySection/GallerySection';

export default function Home() {
  return (
    <main>
      <GallerySection />
      <ReviewsSection />
      <Feedback />
    </main>
  );
}
