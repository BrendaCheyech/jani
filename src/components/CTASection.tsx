import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    website: "",
    farmName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Don't Let Your Farm Be Left Out of the Carbon Market
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            AI platforms are already verifying your competitors — and when AI trusts them, buyers do too.
            We've opened our Climate Intelligence Mapping service to a small group of forward-thinking farms. Reach out now to secure early access.
          </p>

          <Card className="bg-white/70 backdrop-blur-sm border-white/60 rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2 text-left">
                  Your Website (Required)
                </label>
                <Input
                  type="url"
                  placeholder="https://yourfarm.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="bg-white/80 border-primary/20 rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2 text-left">
                  Your Farm Name (Required)
                </label>
                <Input
                  type="text"
                  placeholder="Wanjiku Farms"
                  value={formData.farmName}
                  onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                  className="bg-white/80 border-primary/20 rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2 text-left">
                  Your Email (Required)
                </label>
                <Input
                  type="email"
                  placeholder="you@yourfarm.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/80 border-primary/20 rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg shadow-dramatic hover:shadow-glow transition-all duration-300"
              >
                Map My Farm in AI's Mind
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
