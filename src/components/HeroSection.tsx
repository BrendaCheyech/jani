import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
      
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
