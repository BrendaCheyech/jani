import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ScoreSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            We turn climate data into <span className="text-primary">intelligence.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping startups and NGOs measure, track, and amplify their climate impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-border rounded-2xl p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-foreground mb-6">Your Project Impact Score</h4>

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
                <p className="text-3xl font-bold text-primary flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 mr-1" />
                  10%
                </p>
                <p className="text-xs text-muted-foreground mt-1">(Since last month)</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-4"># Organization Score</p>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "GreenTech Startup", tag: "Leader", desc: "Climate Pioneer", score: 92 },
                  { rank: 2, name: "Your Organization", tag: "You", desc: "Growing Strong", score: 89 },
                  { rank: 3, name: "Climate NGO", tag: "Emerging", desc: "Rising Fast", score: 78 },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-primary">{item.rank}.</span>
                      <div>
                        <p className="font-semibold text-foreground">
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
