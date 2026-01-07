import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Smallholder",
    subtitle: "Individual farmers, small plots",
    auditPrice: "$99",
    monthlyPrice: "$29",
    commitment: "No minimum • Cancel anytime",
    cta: "Get Started",
    highlight: "Essential climate tracking for growing farms",
  },
  {
    name: "Cooperative",
    subtitle: "Farmer groups, cooperatives",
    auditPrice: "$499",
    monthlyPrice: "$149",
    commitment: "3-month minimum",
    cta: "Book Demo",
    highlight: "Complete intelligence for scaling operations",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Large estates, corporations",
    auditPrice: "Custom",
    monthlyPrice: "Custom",
    commitment: "Annual contract",
    cta: "Contact Sales",
    highlight: "Custom solutions for market leaders",
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-orange-100" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/60 to-yellow-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Turn Climate Visibility Into Growth.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand how AI perceives your farm, improve your ranking, and track your progress over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                plan.featured 
                  ? "bg-gradient-to-br from-primary to-purple-500 text-white border-none shadow-intense" 
                  : "bg-white/70 backdrop-blur-sm border-white/60"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-1 ${plan.featured ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.subtitle}
              </p>

              <div className="mb-4">
                <p className={`text-sm ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>Audit & Benchmark</p>
                <p className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-primary"}`}>
                  {plan.auditPrice}
                  <span className={`text-sm font-normal ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}> one-time</span>
                </p>
              </div>

              <div className="mb-6">
                <p className={`text-sm ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>Monitor & Track</p>
                <p className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-primary"}`}>
                  {plan.monthlyPrice}
                  <span className={`text-sm font-normal ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}> per month</span>
                </p>
              </div>

              <p className={`text-xs mb-6 ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {plan.commitment}
              </p>

              <Button 
                className={`w-full rounded-full py-6 ${
                  plan.featured 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>

              <p className={`text-sm mt-4 text-center ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>
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
