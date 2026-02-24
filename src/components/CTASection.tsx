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
    <section className="relative py-24 overflow-hidden bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Whether you're a startup or an NGO, we'd love to work with you.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            Get in touch today — we're onboarding a select group of climate organizations onto our AI platform.
          </p>

          <Card className="bg-background border-none rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Your Website (Required)
                </label>
                <Input
                  type="url"
                  placeholder="https://yourorganization.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="bg-background border-border rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Organization Name (Required)
                </label>
                <Input
                  type="text"
                  placeholder="Your Startup or NGO"
                  value={formData.farmName}
                  onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                  className="bg-background border-border rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 text-left">
                  Your Email (Required)
                </label>
                <Input
                  type="email"
                  placeholder="you@yourfarm.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border rounded-xl py-6 focus:border-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg transition-all duration-300"
              >
                Get Climate Intelligence
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
