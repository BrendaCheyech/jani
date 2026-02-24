import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, TreePine, DollarSign, Leaf } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Machine learning models that analyze climate project data, providing startups and NGOs with actionable insights to maximize their impact."
  },
  {
    icon: BarChart3,
    title: "Impact Intelligence",
    description: "Comprehensive analytics platform that processes environmental data to help organizations measure, report, and verify their climate outcomes."
  },
  {
    icon: Sprout,
    title: "Project Monitoring",
    description: "Real-time monitoring tools for climate change projects — from reforestation to clean energy — with automated progress tracking and alerts."
  },
  {
    icon: TreePine,
    title: "MRV Solutions",
    description: "Measurement, Reporting, and Verification systems that help organizations meet compliance standards and attract climate finance."
  },
  {
    icon: Leaf,
    title: "Carbon Market Access",
    description: "Connect your climate projects to carbon markets with AI-powered verification, credit estimation, and marketplace integration."
  },
  {
    icon: DollarSign,
    title: "Climate Finance Tools",
    description: "Grant readiness assessments, impact forecasting, and investor reporting tools designed for climate-focused startups and NGOs."
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
            Our AI platform equips climate startups and NGOs with the data intelligence they need to measure impact, access carbon markets, and secure climate finance.
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
