import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Zap, Globe, Recycle, Wind, Sun } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Carbon Reduction",
    description: "Advanced technologies that significantly reduce carbon emissions and environmental impact across industries."
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description: "Innovative renewable energy solutions that harness natural resources for sustainable power generation."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Scalable climate solutions designed to create positive environmental change on a worldwide scale."
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Promoting sustainable practices through waste reduction, recycling, and resource optimization."
  },
  {
    icon: Wind,
    title: "Wind Technology",
    description: "Cutting-edge wind energy systems that maximize efficiency and minimize environmental disruption."
  },
  {
    icon: Sun,
    title: "Solar Innovation",
    description: "Next-generation solar technology that makes clean energy more accessible and cost-effective."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leading Climate <span className="text-transparent bg-gradient-primary bg-clip-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to climate technology addresses the most pressing environmental challenges with innovative, scalable solutions.
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