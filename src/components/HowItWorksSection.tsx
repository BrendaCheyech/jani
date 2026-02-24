import { Card } from "@/components/ui/card";
import { BarChart3, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: BarChart3,
    title: "Assess Your Project",
    description: "AI-powered climate project analysis",
  },
  {
    icon: Target,
    title: "Get Your Action Plan",
    description: "Tailored recommendations for impact",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Impact",
    description: "With data-driven climate strategies",
  },
];

const phases = [
  {
    id: "understand",
    label: "Understand",
    subtitle: "Map your climate impact",
    description: "Our AI analyzes your project data, benchmarks your impact against global standards, and identifies gaps in your MRV processes.",
    features: ["Impact Analysis", "MRV Audit", "Gap Assessment"],
  },
  {
    id: "improve",
    label: "Improve",
    subtitle: "Optimize your outcomes",
    description: "Get actionable recommendations to strengthen your climate project — from better data collection to improved reporting and verification workflows.",
    features: ["Action Plans", "Data Pipelines", "Reporting Tools"],
  },
  {
    id: "lead",
    label: "Lead",
    subtitle: "Unlock climate finance",
    description: "Position your organization for carbon market access, grant funding, and investor confidence with verified, AI-backed impact data.",
    features: ["Market Access", "Grant Readiness", "Investor Reports"],
  },
];

const HowItWorksSection = () => {
  const [activePhase, setActivePhase] = useState("understand");
  const currentPhase = phases.find(p => p.id === activePhase) || phases[0];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to climate visibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background border-border rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Deep Dive Into Our Process
          </h3>
          <p className="text-center text-muted-foreground mb-8">Click on each phase to explore</p>

          <div className="flex justify-center gap-4 mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                  activePhase === phase.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/40"
                }`}
              >
                <span className="font-bold">{phase.label}</span>
                <span className="block text-xs opacity-80">{phase.subtitle}</span>
              </button>
            ))}
          </div>

          <Card className="bg-background border-border rounded-2xl p-8">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <p className="text-xs text-primary font-semibold mb-2">PHASE {phases.findIndex(p => p.id === activePhase) + 1}</p>
                <h4 className="text-2xl font-bold text-foreground mb-2">{currentPhase.label}</h4>
                <p className="text-muted-foreground mb-6">{currentPhase.subtitle}</p>
                <p className="text-foreground leading-relaxed mb-6">{currentPhase.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {currentPhase.features.map((feature) => (
                    <Card key={feature} className="bg-secondary/50 border-border rounded-xl p-4 text-center hover:bg-secondary transition-colors cursor-pointer">
                      <p className="font-medium text-foreground text-sm">{feature}</p>
                      <p className="text-xs text-muted-foreground mt-1">Click to learn more →</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
