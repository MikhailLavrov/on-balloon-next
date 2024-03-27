import { Feedback } from '@/app/ui/Feedback/Feedback';
import { ReviewsSection } from './ui/ReviewsSection/ReviewsSection';
import { GallerySection } from './ui/GallerySection/GallerySection';
import { Advantages } from './ui/Advantages/Advantages';
import { HitsSection } from './ui/HitsSection/HitsSection';

export default function Home() {
  return (
    <main>
      <HitsSection />
      <Advantages />
      <GallerySection />
      <ReviewsSection />
      <Feedback />
    </main>
  );
}
