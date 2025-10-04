import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Sprout, TreePine, DollarSign, Leaf } from "lucide-react";
import { useState } from "react";

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
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/10 to-accent/5 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-accent/5" />
      
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
          {features.map((feature, index) => {
            const isFlipped = flippedCards.includes(index);
            return (
              <div 
                key={index} 
                className="h-80 cursor-pointer animate-fade-in perspective-1000"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => toggleFlip(index)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <Card className="absolute w-full h-full backface-hidden group hover:shadow-intense transition-all duration-500 border-border/50 hover:border-primary/40 bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-dramatic group-hover:shadow-glow">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">Click to learn more</p>
                    </CardContent>
                  </Card>
                  
                  {/* Back of Card */}
                  <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-primary text-white border-primary/40 shadow-intense">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-[calc(100%-80px)]">
                      <CardDescription className="text-base leading-relaxed text-white/95">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;