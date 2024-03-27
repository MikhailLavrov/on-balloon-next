import { Feedback } from '@/app/ui/Feedback/Feedback';
import { ReviewsSection } from './ui/ReviewsSection/ReviewsSection';
import { GallerySection } from './ui/GallerySection/GallerySection';
import { Advantages } from './ui/Advantages/Advantages';

export default function Home() {
  return (
    <main>
      <Advantages />
      <GallerySection />
      <ReviewsSection />
      <Feedback />
    </main>
  );
}
