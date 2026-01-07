import { Card } from "@/components/ui/card";
import { BarChart3, Target, TrendingUp, Brain, Leaf, DollarSign } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: BarChart3,
    title: "See How AI Ranks You",
    description: "Across 5+ climate platforms",
  },
  {
    icon: Target,
    title: "Get Your Action Plan",
    description: "Targeted improvements that work",
  },
  {
    icon: TrendingUp,
    title: "Outrank Competitors",
    description: "With proven carbon strategies",
  },
];

const phases = [
  {
    id: "understand",
    label: "Understand",
    subtitle: "Know your carbon footprint",
    description: "Discover exactly how AI platforms measure and verify your carbon capture compared to regional competitors.",
    features: ["AI Ranking", "Carbon Score", "Accuracy Check"],
  },
  {
    id: "improve",
    label: "Improve",
    subtitle: "Close the sustainability gap",
    description: "Get actionable recommendations to improve your soil health, increase carbon sequestration, and boost biodiversity metrics.",
    features: ["Action Plans", "Best Practices", "Real-time Monitoring"],
  },
  {
    id: "lead",
    label: "Lead",
    subtitle: "Stay ahead of climate evolution",
    description: "Continuously track your progress and maintain market leadership in the carbon credit ecosystem.",
    features: ["Market Insights", "Trend Analysis", "Competitive Edge"],
  },
];

const HowItWorksSection = () => {
  const [activePhase, setActivePhase] = useState("understand");
  const currentPhase = phases.find(p => p.id === activePhase) || phases[0];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-100" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to climate visibility
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/60 rounded-3xl p-8 text-center shadow-lg hover:shadow-intense transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-dramatic">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Deep Dive */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Deep Dive Into Our Process
          </h3>
          <p className="text-center text-muted-foreground mb-8">Click on each phase to explore</p>

          {/* Phase Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePhase === phase.id
                    ? "bg-primary text-white shadow-dramatic"
                    : "bg-white/70 text-primary hover:bg-white/90"
                }`}
              >
                <span className="font-bold">{phase.label}</span>
                <span className="block text-xs opacity-80">{phase.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Phase Content */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/60 rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <p className="text-xs text-primary font-semibold mb-2">PHASE {phases.findIndex(p => p.id === activePhase) + 1}</p>
                <h4 className="text-2xl font-bold text-primary mb-2">{currentPhase.label}</h4>
                <p className="text-muted-foreground mb-6">{currentPhase.subtitle}</p>
                <p className="text-foreground leading-relaxed mb-6">{currentPhase.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {currentPhase.features.map((feature) => (
                    <Card key={feature} className="bg-white/50 border-primary/20 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors cursor-pointer">
                      <p className="font-medium text-primary text-sm">{feature}</p>
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
