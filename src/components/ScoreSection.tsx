import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ScoreSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-100" />
      <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            AI Has Its Own Universe.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary/80 mb-6">
            Is Your Farm in Orbit?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Win the carbon market — and the sustainable future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-white/60 rounded-3xl p-8 shadow-intense">
            <h4 className="text-lg font-semibold text-primary mb-6">Your Climate Intelligence Score</h4>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Rank</p>
                <p className="text-3xl font-bold text-primary">#2<span className="text-lg text-muted-foreground"> of 3</span></p>
                <p className="text-xs text-muted-foreground mt-1">(Your Position)</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Score</p>
                <p className="text-3xl font-bold text-primary">89<span className="text-lg text-muted-foreground">/100</span></p>
                <p className="text-xs text-muted-foreground mt-1">(Your Progress)</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Progress</p>
                <p className="text-3xl font-bold text-green-600 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 mr-1" />
                  10%
                </p>
                <p className="text-xs text-muted-foreground mt-1">(Since last month)</p>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-4"># Region Score</p>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Kenya", tag: "Leader", desc: "Carbon Pioneer", score: 92 },
                  { rank: 2, name: "Your Farm", tag: "You", desc: "Growing Strong", score: 89 },
                  { rank: 3, name: "Tanzania", tag: "Emerging", desc: "Rising Fast", score: 78 },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center justify-between p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-primary">{item.rank}.</span>
                      <div>
                        <p className="font-semibold text-primary">
                          {item.name}
                          {item.tag === "You" && <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">You</span>}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.tag} • {item.desc}</p>
                      </div>
                    </div>
                    <p className="font-bold text-primary">{item.score}/100</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScoreSection;
