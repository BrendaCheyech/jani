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
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Climate <span className="text-transparent bg-gradient-primary bg-clip-text">Adaptation & Resilience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our AI platform doesn't just measure climate impact—it builds adaptive capacity. We help African communities anticipate, prepare for, and respond to climate variability while building long-term resilience.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <p className="text-muted-foreground">Improved crop resilience with AI-guided adaptation strategies</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
            <p className="text-muted-foreground">Average advance warning time for climate events</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Kenyan farmers in our pilot adaptation program</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {adaptationFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
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
                Climate adaptation isn't just about responding to change—it's about building systems that thrive despite uncertainty. Our AI platform analyzes historical climate data, current conditions, and future projections to create adaptive strategies that work.
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
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-4">Adaptation Success Story</h4>
              <blockquote className="text-muted-foreground italic mb-4">
                "Using Jani Intelligence's platform, we shifted to drought-resistant varieties and adjusted our planting calendar. Despite irregular rains this season, our yields increased by 40% while earning carbon credits."
              </blockquote>
              <p className="text-sm font-medium">— Samuel Kimani, Farmer in Kiambu County, Kenya</p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Join Our Adaptation Program
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Limited spots available for our Kenya pilot program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptationSection;