import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Used by Farms Ready to Lead in the <span className="text-primary">Carbon Era</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Forward-thinking farmers trust Jani to navigate the carbon market landscape
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-background border-border rounded-2xl p-10">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Wanjiku Farms</h3>
            <p className="text-muted-foreground mb-6">Coffee Cooperative, Kenya</p>

            <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
              "Jani helped us understand the gaps in our carbon verification across AI platforms, and where there's opportunity to grow our association with Sustainability in the coffee industry, which is core to our mission."
            </blockquote>

            <p className="text-muted-foreground">
              — Wanjiku, Owner at Wanjiku Farms
            </p>
          </div>
        </Card>

        {/* Founder Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground">The Founder Story</h3>
          </div>

          <Card className="bg-background border-border rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Dr. Amara Okonkwo</h4>
                <p className="text-primary font-medium mb-6">Founder of Jani Intelligence</p>

                <p className="text-foreground leading-relaxed mb-4">
                  My research focused on <strong>computational agriculture</strong> and <strong>AI-driven climate modeling</strong>, exploring how machines can help predict and optimize carbon sequestration in African soils.
                </p>

                <p className="text-foreground leading-relaxed mb-4">
                  After working as a climate scientist across East Africa, I realized that the same questions I asked about soil and AI models also apply to farms: <em>why does AI "think" one farm is more sustainable than another?</em>
                </p>

                <p className="text-primary italic font-medium">
                  "That question became the foundation of Jani — a platform that helps farms understand how AI understands them."
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-2xl bg-secondary flex items-center justify-center">
                  <span className="text-6xl">👩🏾‍🔬</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
