import { Feedback } from '@/app/ui/Feedback/Feedback';
import { ReviewsSection } from './ui/ReviewsSection/ReviewsSection';

export default function Home() {
  return (
    <main>
      <ReviewsSection />
      <Feedback />
    </main>
  );
}
