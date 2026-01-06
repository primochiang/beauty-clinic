import HeroCarousel from '../components/home/HeroCarousel';
import TreatmentGrid from '../components/home/TreatmentGrid';
import ArticlePreview from '../components/home/ArticlePreview';
import CasePreview from '../components/home/CasePreview';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TreatmentGrid />
      <ArticlePreview />
      <CasePreview />
      <CTASection
        title="開始您的美麗旅程"
        subtitle="專業諮詢，為您量身打造最適合的療程方案"
      />
    </>
  );
}
