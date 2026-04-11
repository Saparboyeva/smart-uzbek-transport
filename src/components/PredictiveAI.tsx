import { useState } from "react";
import { Brain, Clock, TrendingUp, AlertTriangle, Navigation, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRegion } from "@/contexts/RegionContext";
import { regionPredictions } from "@/data/regionData";

const levelColor: Record<string, string> = {
  Yuqori: "bg-destructive/10 text-destructive border-destructive/20",
  "O'rtacha": "bg-warning/10 text-warning border-warning/20",
  Past: "bg-success/10 text-success border-success/20",
};

const levelDot: Record<string, string> = {
  Yuqori: "bg-destructive",
  "O'rtacha": "bg-warning",
  Past: "bg-success",
};

const PredictiveAI = () => {
  const { selected, regionName } = useRegion();
  const predictions = regionPredictions[selected];
  const [activePrediction, setActivePrediction] = useState<typeof predictions[0] | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { toast } = useToast();

  const runAnalysis = () => {
    setAnalyzing(true);
    setActivePrediction(null);
    setTimeout(() => {
      setAnalyzing(false);
      const pick = predictions[Math.floor(Math.random() * predictions.length)];
      setActivePrediction(pick);
      toast({ title: "🧠 AI bashorat tayyor", description: pick.message });
    }, 2000);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Brain className="h-4 w-4" /> Predictive AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Tirbandlikni oldindan bashorat qilish — {regionName}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            AI oldingi ma'lumotlar, vaqt, ob-havo va bayramlarni tahlil qilib, tirbandlikni oldindan aytadi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            className="w-full mb-8 bg-primary text-primary-foreground rounded-2xl p-5 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {analyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                AI tahlil qilmoqda...
              </>
            ) : (
              <>
                <Brain className="h-5 w-5" />
                Bashorat qilish
              </>
            )}
          </button>

          {activePrediction && (
            <div className="bg-card rounded-2xl shadow-card overflow-hidden mb-8 animate-fade-in">
              <div className="bg-secondary p-4 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${levelDot[activePrediction.level]}`} />
                <span className="font-bold text-secondary-foreground">{activePrediction.route}</span>
                <span className="ml-auto text-xs text-secondary-foreground/60">
                  Ishonchlilik: {activePrediction.confidence}%
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-card-foreground">{activePrediction.message}</p>
                    <p className="text-sm text-muted-foreground mt-1">Soat {activePrediction.time} da kutilmoqda</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-success/10 rounded-xl p-4 border border-success/20">
                  <Navigation className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-success">AI tavsiyasi:</p>
                    <p className="text-sm text-card-foreground mt-1">{activePrediction.suggestion}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>AI ishonchliligi</span>
                    <span>{activePrediction.confidence}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${activePrediction.confidence}%` }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" /> Barcha bashoratlar
          </h3>
          <div className="space-y-3">
            {predictions.map((p) => (
              <div
                key={p.id}
                onClick={() => { setActivePrediction(p); toast({ title: `📊 ${p.route}`, description: p.message }); }}
                className={`rounded-xl p-4 border cursor-pointer hover:shadow-card transition-shadow ${levelColor[p.level]}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4" />
                    <div>
                      <span className="font-semibold text-sm">{p.route}</span>
                      <p className="text-xs opacity-80 mt-0.5">{p.minutesUntil} daqiqadan keyin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">{p.level}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveAI;
