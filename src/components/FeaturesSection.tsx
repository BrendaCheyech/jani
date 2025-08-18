import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, DollarSign, Leaf } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Soil Analysis",
    description: "Advanced machine learning algorithms analyze soil conditions, carbon content, and regenerative potential to provide actionable insights for sustainable farming practices."
  },
  {
    icon: BarChart3,
    title: "Soil Carbon Intelligence",
    description: "Comprehensive soil carbon analytics platform that processes satellite imagery, soil sensors, and farming data to optimize regenerative agriculture management."
  },
  {
    icon: Sprout,
    title: "Regenerative Agriculture",
    description: "AI-powered regenerative farming solutions that help farmers build soil carbon, improve soil health, and increase yields through sustainable practices."
  },
  {
    icon: Leaf,
    title: "Soil Health Monitoring",
    description: "Real-time monitoring of soil carbon levels and health indicators using satellite data and ground sensors to track regenerative agriculture progress."
  },
  {
    icon: DollarSign,
    title: "Soil Carbon Trading",
    description: "Streamlined soil carbon credit verification and trading platform that connects African regenerative farmers to global soil carbon markets."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soil Carbon <span className="text-transparent bg-gradient-primary bg-clip-text">AI Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform combines soil carbon analytics with regenerative agriculture expertise to deliver sustainable farming solutions tailored for African agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
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