import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, TreePine, DollarSign, MapPin } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Advanced machine learning algorithms analyze climate data to provide actionable insights for sustainable agriculture and carbon management."
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Comprehensive data analytics platform that processes environmental data to optimize carbon sequestration and agricultural productivity."
  },
  {
    icon: Sprout,
    title: "Smart Agriculture",
    description: "AI-powered solutions that help farmers optimize crop yields while implementing sustainable and climate-smart agricultural practices."
  },
  {
    icon: TreePine,
    title: "Soil Carbon",
    description: "Advanced soil carbon monitoring and measurement systems that track carbon sequestration in agricultural soils and provide verification data."
  },
  {
    icon: Sprout,
    title: "Regenerative Agriculture",
    description: "Holistic farming practices that restore soil health, increase biodiversity, and enhance carbon storage while improving farm productivity."
  },
  {
    icon: DollarSign,
    title: "Carbon Credit",
    description: "Streamlined carbon credit verification and trading platform that connects African farmers to global carbon markets for soil and agricultural carbon projects."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Climate <span className="text-transparent bg-gradient-primary bg-clip-text">AI Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform combines data analytics with local expertise to deliver climate solutions tailored for African agriculture and forestry sectors.
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