import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, TreePine, DollarSign, MapPin } from "lucide-react";

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
    title: "Forestry Management",
    description: "Intelligent forest monitoring and management systems that optimize carbon sequestration and sustainable forestry practices."
  },
  {
    icon: DollarSign,
    title: "Carbon Trading",
    description: "Streamlined carbon credit verification and trading platform that connects African farmers and foresters to global carbon markets."
  },
  {
    icon: MapPin,
    title: "Kenya Pilot Program",
    description: "Starting our impact in Kenya with localized solutions that understand regional climate challenges and opportunities."
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