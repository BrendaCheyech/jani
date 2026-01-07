import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dreamy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-orange-100" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/60 to-cyan-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200/60 to-yellow-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-200/40 to-purple-200/30 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
            AI Solutions for Africa's
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Climate Resilience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leveraging data analytics and artificial intelligence to tackle climate challenges across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-dramatic hover:shadow-glow transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Try Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="border-primary/30 bg-white/50 backdrop-blur-sm text-primary hover:bg-white/80 hover:border-primary/50 hover:scale-105 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300">
              Learn About Our Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
