import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    subtitle: "Early-stage startups, small NGOs",
    auditPrice: "$99",
    monthlyPrice: "$29",
    commitment: "No minimum • Cancel anytime",
    cta: "Get Started",
    highlight: "Essential climate analytics for growing teams",
  },
  {
    name: "Growth",
    subtitle: "Scaling startups, mid-size NGOs",
    auditPrice: "$499",
    monthlyPrice: "$149",
    commitment: "3-month minimum",
    cta: "Book Demo",
    highlight: "Full intelligence suite for scaling impact",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Large organizations, multilaterals",
    auditPrice: "Custom",
    monthlyPrice: "Custom",
    commitment: "Annual contract",
    cta: "Contact Sales",
    highlight: "Custom solutions for maximum impact",
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Turn Climate Visibility Into <span className="text-primary">Growth.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your organization — from early-stage startups to established climate NGOs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background border-border hover:shadow-md"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-1 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.subtitle}
              </p>

              <div className="mb-4">
                <p className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Audit & Benchmark</p>
                <p className={`text-3xl font-bold ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.auditPrice}
                  <span className={`text-sm font-normal ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}> one-time</span>
                </p>
              </div>

              <div className="mb-6">
                <p className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Monitor & Track</p>
                <p className={`text-3xl font-bold ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.monthlyPrice}
                  <span className={`text-sm font-normal ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}> per month</span>
                </p>
              </div>

              <p className={`text-xs mb-6 ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.commitment}
              </p>

              <Button
                className={`w-full rounded-full py-6 ${
                  plan.featured
                    ? "bg-background text-primary hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>

              <p className={`text-sm mt-4 text-center ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.highlight}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
