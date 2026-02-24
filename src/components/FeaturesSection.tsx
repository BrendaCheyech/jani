import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Climate Intelligence Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform combines data analytics with local expertise to deliver climate solutions tailored for African agriculture and forestry sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border hover:border-primary/30 bg-background rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
