import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, TreePine, DollarSign, Leaf } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Advanced machine learning algorithms analyze climate data to provide actionable insights for sustainable agriculture and forestry practices."
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Comprehensive data analytics platform that processes environmental data to optimize carbon trading and climate impact assessment."
  },
  {
    icon: Sprout,
    title: "Smart Agriculture",
    description: "AI-powered solutions that help farmers adapt to climate change while maximizing crop yields and minimizing environmental impact."
  },
  {
    icon: TreePine,
    title: "Soil Carbon",
    description: "Advanced soil carbon monitoring and measurement systems that track sequestration rates and optimize carbon storage in agricultural soils."
  },
  {
    icon: Leaf,
    title: "Regenerative Agriculture",
    description: "Comprehensive regenerative farming practices that restore soil health, increase biodiversity, and enhance carbon sequestration capabilities."
  },
  {
    icon: DollarSign,
    title: "Carbon Credit Systems",
    description: "End-to-end carbon credit verification, monitoring, and trading systems that connect smallholder farmers to premium carbon markets."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
            Climate <span className="text-transparent bg-gradient-primary bg-clip-text drop-shadow-glow">Intelligence Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform combines data analytics with local expertise to deliver climate solutions tailored for African agriculture and forestry sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-intense hover:-translate-y-2 transition-all duration-500 border-border/50 hover:border-primary/40 bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-dramatic group-hover:shadow-glow">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;