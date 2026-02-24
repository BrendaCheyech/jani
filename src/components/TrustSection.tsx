import { Card } from "@/components/ui/card";

const metrics = [
  { score: 70, label: "Soil Health" },
  { score: 73, label: "Carbon Capture" },
  { score: 65, label: "Biodiversity" },
  { score: 78, label: "Water Usage" },
];

const TrustSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our roots are in Kenya.{" "}
            <span className="text-primary">Our reach is global.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We track how AI verifies your Soil Health, Carbon Capture, Biodiversity, and Water Usage — showing exactly where you're gaining ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <Card key={metric.label} className="bg-background border-border rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300">
              <div className="mb-4">
                <div className="text-5xl font-bold text-primary">{metric.score}</div>
                <div className="text-lg text-muted-foreground">/100</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{metric.label}</h3>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${metric.score}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Poor</span>
                <span>Average</span>
                <span>Excellent</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
