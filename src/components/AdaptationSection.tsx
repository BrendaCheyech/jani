import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, AlertTriangle, Users, Zap, Target } from "lucide-react";

const adaptationFeatures = [
  {
    icon: Shield,
    title: "Early Warning Systems",
    description: "AI-powered climate monitoring that provides advance warnings for extreme weather events, helping farmers and communities prepare and protect their assets."
  },
  {
    icon: TrendingUp,
    title: "Adaptive Planning",
    description: "Data-driven insights that help communities develop long-term adaptation strategies based on projected climate scenarios and local conditions."
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive risk analysis tools that identify vulnerabilities and prioritize adaptation investments for maximum impact and resilience."
  },
  {
    icon: Users,
    title: "Community Resilience",
    description: "Building local capacity through training and knowledge sharing, ensuring communities can independently manage climate risks and opportunities."
  }
];

const AdaptationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/10 to-primary/10 relative overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
            Climate <span className="text-transparent bg-gradient-primary bg-clip-text drop-shadow-glow">Adaptation & Resilience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our Climate Intelligence platform doesn't just measure impact — it builds adaptive capacity. We help startups and NGOs anticipate, prepare for, and respond to climate variability while scaling their projects.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 shadow-dramatic hover:shadow-intense hover:scale-105 transition-all duration-500 animate-fade-in">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 drop-shadow-glow">85%</div>
            <p className="text-muted-foreground font-medium">Improved project outcomes with AI-guided strategies</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-accent/30 shadow-dramatic hover:shadow-intense hover:scale-105 transition-all duration-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 drop-shadow-glow">2x Faster</div>
            <p className="text-muted-foreground font-medium">Average time-to-market for climate project reporting</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 shadow-dramatic hover:shadow-intense hover:scale-105 transition-all duration-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 drop-shadow-glow">50+</div>
            <p className="text-muted-foreground font-medium">Climate organizations in our pilot program</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {adaptationFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-intense hover:-translate-y-2 transition-all duration-500 bg-card/80 backdrop-blur-md border-primary/30 hover:border-primary/60 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-dramatic group-hover:shadow-glow">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Building Climate Resilience Through Intelligence</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Climate adaptation isn't just about responding to change—it's about building systems that thrive despite uncertainty. Our Climate Intelligence platform analyzes historical climate data, current conditions, and future projections to create adaptive strategies that work.
              </p>
              <p className="leading-relaxed">
                From drought-resistant crop recommendations to optimized planting schedules, we help farmers and forest managers make decisions that build resilience into their operations while maximizing carbon sequestration potential.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Zap className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Real-Time Adaptation</h4>
                <p className="text-sm text-muted-foreground">Continuous learning algorithms that adapt strategies based on new data and changing conditions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Target className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Precision Resilience</h4>
                <p className="text-sm text-muted-foreground">Location-specific solutions that account for local climate patterns, soil conditions, and socioeconomic factors</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm rounded-xl p-8 border border-primary/30 shadow-dramatic hover:shadow-intense transition-all duration-500">
              <h4 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Adaptation Success Story</h4>
              <blockquote className="text-muted-foreground italic mb-4 text-lg leading-relaxed">
               "Using Jani's platform, our NGO automated its impact reporting and accessed carbon markets for the first time. We secured $200K in climate finance within 6 months of onboarding."
              </blockquote>
              <p className="text-sm font-bold text-primary">— David Mwangi, Director at EcoResilience Kenya</p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-primary hover:scale-110 text-primary-foreground px-10 py-6 text-lg shadow-intense hover:shadow-glow transition-all duration-500 font-bold">
                Join Our Adaptation Program
              </Button>
              <p className="text-sm text-muted-foreground mt-3 font-medium">
                Limited spots available for climate startups and NGOs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptationSection;