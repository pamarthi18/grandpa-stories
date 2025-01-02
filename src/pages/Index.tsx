import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPosts } from "@/components/FeaturedPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturedPosts />
      </main>
    </div>
  );
};

export default Index;