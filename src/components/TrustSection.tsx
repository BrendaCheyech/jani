import { Card } from "@/components/ui/card";

const metrics = [
  { score: 70, label: "Soil Health", color: "from-green-400 to-emerald-500" },
  { score: 73, label: "Carbon Capture", color: "from-blue-400 to-cyan-500" },
  { score: 65, label: "Biodiversity", color: "from-purple-400 to-pink-500" },
  { score: 78, label: "Water Usage", color: "from-orange-400 to-amber-500" },
];

const TrustSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-orange-100" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/50 to-cyan-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            If data doesn't back your claims, buyers won't trust you.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We track how AI verifies your Soil Health, Carbon Capture, Biodiversity, and Water Usage — showing exactly where you're gaining ground or losing credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <Card key={metric.label} className="bg-white/70 backdrop-blur-sm border-white/60 rounded-3xl p-6 text-center shadow-lg hover:shadow-intense transition-all duration-300 hover:-translate-y-1">
              <div className="relative mb-4">
                <div className="text-5xl font-bold text-primary">{metric.score}</div>
                <div className="text-lg text-muted-foreground">/100</div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-4">{metric.label}</h3>
              
              {/* Progress bar */}
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000`}
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
