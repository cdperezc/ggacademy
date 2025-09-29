import { Header } from "@/components/Header";
import { LearningHero } from "@/components/LearningHero";
import { CategorySection } from "@/components/CategorySection";
import { VideoSection } from "@/components/VideoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LearningHero />
        <CategorySection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
