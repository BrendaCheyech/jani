import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, AlertTriangle, Users, Zap, Target } from "lucide-react";

const adaptationFeatures = [
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "AI-powered analysis of climate vulnerabilities and adaptive capacity to help communities prepare for and respond to climate challenges."
  },
  {
    icon: TrendingUp,
    title: "Resilience Building",
    description: "Data-driven strategies that strengthen community resilience through improved agricultural practices and sustainable resource management."
  },
  {
    icon: AlertTriangle,
    title: "Early Warning Systems",
    description: "Advanced prediction models that provide timely alerts for climate-related risks, enabling proactive response and mitigation measures."
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Building local capacity through training and knowledge transfer, ensuring communities can independently manage climate adaptation initiatives."
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
            Our AI platform helps African communities adapt to climate change through data-driven insights, early warning systems, and capacity building initiatives that strengthen resilience across agriculture and forestry sectors.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
            <p className="text-muted-foreground">Average soil carbon increase with AI-guided farming practices</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">$150/ha</div>
            <p className="text-muted-foreground">Annual carbon credit revenue potential per hectare</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">Hectares monitored for soil carbon across Africa</p>
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
            <h3 className="text-3xl font-bold">Building Soil Carbon Through Intelligence</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Soil carbon represents the largest opportunity for climate mitigation in agriculture. Our AI platform analyzes soil conditions, farming practices, and environmental factors to create personalized carbon farming strategies that work.
              </p>
              <p className="leading-relaxed">
                From cover crop recommendations to precision nutrient management, we help farmers implement practices that build soil carbon while maintaining productivity and accessing carbon credit markets.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Zap className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Real-Time Carbon Tracking</h4>
                <p className="text-sm text-muted-foreground">Continuous monitoring algorithms that track soil carbon changes and optimize farming practices in real-time</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Target className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Precision Carbon Farming</h4>
                <p className="text-sm text-muted-foreground">Location-specific solutions that account for local soil types, climate patterns, and farming systems for maximum carbon impact</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-4">Carbon Success Story</h4>
              <blockquote className="text-muted-foreground italic mb-4">
                "Using Jani Intelligence's platform, we implemented cover crops and reduced tillage. Our soil carbon increased by 60% in two years, and we earned $2,400 in carbon credits last season alone."
              </blockquote>
              <p className="text-sm font-medium">— Mary Wanjiku, Farmer in Central Kenya</p>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                Start Your Carbon Project
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Join farmers already earning from soil carbon across Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptationSection;