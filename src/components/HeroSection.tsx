import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-primary font-medium tracking-wide">
            Hi, we are
          </p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-primary">
            Jani Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build <strong className="text-foreground">Climate AI solutions</strong> for{" "}
            <strong className="text-foreground">startups and NGOs</strong> working on climate change projects — turning complex climate data into actionable intelligence.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-primary text-primary hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
