import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, BarChart3, MapPin, TrendingUp, Leaf, Users } from "lucide-react";

const demoFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Interactive dashboards showing live climate data, carbon metrics, and predictive insights for your region."
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Geospatial mapping and analysis tools that provide location-specific climate adaptation strategies."
  },
  {
    icon: TrendingUp,
    title: "Impact Tracking",
    description: "Monitor your environmental impact and carbon sequestration progress with detailed reporting tools."
  },
  {
    icon: Leaf,
    title: "AI Recommendations",
    description: "Get personalized recommendations for sustainable practices based on your land use and climate conditions."
  }
];

const Demo = () => {
  return (
    <>
      <Helmet>
        <title>Platform Demo - Jani Intelligence Climate Intelligence</title>
        <meta name="description" content="Experience Jani Intelligence's AI-powered climate platform demo. Try our real-time analytics, impact tracking, and climate adaptation tools." />
        <meta name="keywords" content="climate AI demo, platform demo, climate analytics, carbon tracking, AI agriculture demo" />
        <meta property="og:title" content="Platform Demo - Jani Intelligence Climate Intelligence" />
        <meta property="og:description" content="Try our AI-powered climate platform with real-time analytics and impact tracking tools." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Platform Demo - Jani Intelligence Climate Intelligence" />
        <meta name="twitter:description" content="Experience our AI climate platform demo with real-time analytics and insights." />
        <link rel="canonical" href="/demo" />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Experience Our <span className="text-transparent bg-gradient-primary bg-clip-text">Climate Intelligence Platform</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Explore the power of AI-driven climate solutions with our interactive platform demo.
              </p>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Launch Interactive Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Platform <span className="text-transparent bg-gradient-primary bg-clip-text">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how our Climate Intelligence platform transforms climate data into actionable insights for sustainable agriculture and forestry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {demoFeatures.map((feature, index) => (
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

            {/* Demo Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Data accuracy in climate predictions</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Average increase in crop yields</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Farmers using our platform</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero rounded-lg p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Join the growing community of farmers and foresters using AI to build climate resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4">
                  <Users className="mr-2 h-5 w-5" />
                  Request Platform Access
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Demo;