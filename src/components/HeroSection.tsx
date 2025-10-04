import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/forest-agriculture-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Dramatic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            <span className="text-transparent bg-gradient-primary bg-clip-text animate-fade-in">AI Solutions</span> for Africa's Climate Resilience
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Leveraging data analytics and artificial intelligence to tackle climate challenges across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 text-primary-foreground px-8 py-4 text-lg shadow-intense hover:shadow-glow transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Try Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/25 hover:border-white/60 hover:scale-105 px-8 py-4 text-lg shadow-dramatic transition-all duration-300">
              Learn About Our Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;