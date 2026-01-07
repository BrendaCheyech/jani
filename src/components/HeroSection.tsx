import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dreamy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-orange-100" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/60 to-cyan-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200/60 to-yellow-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-200/40 to-purple-200/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
            Climate data shapes Africa's future.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-primary/80">
            Is it shaping yours?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4">
            Turn climate intelligence into carbon credits, sustainable agriculture, and measurable impact for African communities.
          </p>
          
          <div className="pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-10 py-6 text-lg rounded-full shadow-dramatic hover:shadow-glow transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
