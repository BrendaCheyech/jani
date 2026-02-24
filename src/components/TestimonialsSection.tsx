import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Organizations Driving <span className="text-primary">Climate Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Startups and NGOs rely on Jani to power their climate intelligence
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-background border-border rounded-2xl p-10">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">GreenShift Africa</h3>
            <p className="text-muted-foreground mb-6">Climate Tech Startup, Nairobi</p>

            <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
              "Jani helped us streamline our MRV pipeline and access carbon markets faster. Their AI tools cut our reporting time in half and gave our investors the confidence they needed to fund our next phase."
            </blockquote>

            <p className="text-muted-foreground">
              — Amina, Co-founder at GreenShift Africa
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
                  My research focused on <strong>climate informatics</strong> and <strong>AI-driven impact modeling</strong>, exploring how technology can accelerate climate action across the Global South.
                </p>

                <p className="text-foreground leading-relaxed mb-4">
                  After working with climate NGOs and startups across East Africa, I saw the same problem everywhere: <em>organizations doing critical climate work but lacking the data tools to prove and scale their impact.</em>
                </p>

                <p className="text-primary italic font-medium">
                  "That gap became the foundation of Jani — a platform that gives climate organizations the AI tools they need to win."
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
