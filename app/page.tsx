import { ReviewsSection } from '@/app/ui/ReviewsSection/ReviewsSection';
import { GallerySection } from '@/app/ui/GallerySection/GallerySection';
import { Feedback } from '@/app/ui/Feedback/Feedback';
import { Advantages } from '@/app/ui/Advantages/Advantages';
import { HitsSection } from '@/app/ui/HitsSection/HitsSection';

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
