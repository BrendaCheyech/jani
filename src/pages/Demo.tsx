import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, MapPin, Leaf, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <Helmet>
        <title>Platform Demo - Jani Intelligence | AI-Powered Soil Carbon & Regenerative Agriculture</title>
        <meta name="description" content="Experience our AI-powered platform for soil carbon monitoring and regenerative agriculture in Africa. See real-time soil health analytics, carbon sequestration tools, and sustainable farming insights." />
        <meta name="keywords" content="soil carbon demo, regenerative agriculture platform, soil health monitoring, carbon sequestration, sustainable farming Africa, soil carbon trading" />
        <link rel="canonical" href="/demo" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="w-4 h-4 mr-1" />
                Live Demo
              </Badge>
            </div>
          </div>
        </header>

        {/* Demo Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Platform <span className="text-transparent bg-gradient-primary bg-clip-text">Demo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our AI-powered platform for soil carbon monitoring and regenerative agriculture practices across Africa
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid gap-8 mb-12">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                    <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        Soil Carbon & Regenerative Agriculture Dashboard
                      </CardTitle>
                      <CardDescription>
                        Real-time soil health monitoring and regenerative agriculture metrics
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Real-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">2.4M</div>
                      <div className="text-sm text-muted-foreground">Hectares Monitored</div>
                    </div>
                    <div className="text-center p-6 bg-green-500/5 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">450K</div>
                      <div className="text-sm text-muted-foreground">Tons Soil Carbon Sequestered</div>
                    </div>
                    <div className="text-center p-6 bg-blue-500/5 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$12.8M</div>
                      <div className="text-sm text-muted-foreground">Soil Carbon Credits Value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Soil Health Mapping
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      AI-powered satellite imagery analysis for precise soil health mapping and carbon sequestration potential assessment.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Soil Maps
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Regenerative Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Monitor soil carbon levels and track regenerative agriculture practices with our advanced sensor network and AI analytics.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Track Practices
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Soil Carbon Markets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Connect with global soil carbon markets and monetize your regenerative agriculture practices and soil carbon improvements.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Access Soil Carbon Markets
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Farmer Impact */}
              <Card className="bg-gradient-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Farmer Impact
                  </CardTitle>
                  <CardDescription>
                    Real stories from farmers using our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-lg">
                      <p className="text-muted-foreground mb-4">
                        "Through regenerative agriculture practices guided by Jani Intelligence, I increased my soil carbon by 30% and accessed $15,000 in soil carbon credits last year."
                      </p>
                      <div className="font-medium">Sarah M., Kenya</div>
                      <div className="text-sm text-muted-foreground">Regenerative Maize Farmer, 45 hectares</div>
                    </div>
                    <div className="bg-card p-6 rounded-lg">
                      <p className="text-muted-foreground mb-4">
                        "The soil health monitoring system helps me track my regenerative practices, improving both soil carbon and crop yields significantly."
                      </p>
                      <div className="font-medium">John A., Ghana</div>
                      <div className="text-sm text-muted-foreground">Regenerative Cocoa Farmer, 23 hectares</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Join thousands of African farmers already benefiting from our AI-powered soil carbon and regenerative agriculture platform.
              </p>
              <Button size="lg" className="px-8">
                Request Full Access
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Demo;