import { useState } from "react";
import { UserCheck, Clock, MapPin, Zap, Car, Train, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Habit = {
  id: number;
  time: string;
  from: string;
  to: string;
  transport: string;
  frequency: string;
  icon: typeof Car;
};

type Suggestion = {
  id: number;
  message: string;
  action: string;
  icon: typeof Zap;
  type: "info" | "action" | "warning";
};

const mockHabits: Habit[] = [
  { id: 1, time: "08:30", from: "Uy", to: "Ish joyi", transport: "Metro", frequency: "Har kuni", icon: Train },
  { id: 2, time: "18:00", from: "Ish joyi", to: "Uy", transport: "Taksi", frequency: "Har kuni", icon: Car },
  { id: 3, time: "10:00", from: "Uy", to: "Chorsu bozor", transport: "Avtobus", frequency: "Shanba", icon: Train },
  { id: 4, time: "14:00", from: "Uy", to: "Fitness", transport: "Yurish", frequency: "Du/Cho/Ju", icon: MapPin },
];

const mockSuggestions: Suggestion[] = [
  { id: 1, message: "Har kuni 8:30 da ishga chiqasiz. Taksi chaqiraymi?", action: "Taksi chaqirish", icon: Car, type: "action" },
  { id: 2, message: "Bugun tirbandlik bor, ertaroq chiqing (08:00)", action: "Eslatma qo'yish", icon: Clock, type: "warning" },
  { id: 3, message: "Shanba kuni Chorsu bozorga borasiz. Avtobus 15 daqiqada keladi", action: "Kuzatish", icon: Train, type: "info" },
  { id: 4, message: "Bu hafta metro bilan 12,000 so'm tejadingiz!", action: "Batafsil", icon: Zap, type: "info" },
];

const typeStyles: Record<string, string> = {
  info: "bg-primary/10 border-primary/20",
  action: "bg-success/10 border-success/20",
  warning: "bg-warning/10 border-warning/20",
};

const PersonalAI = () => {
  const [activeTab, setActiveTab] = useState<"habits" | "suggestions">("suggestions");
  const { toast } = useToast();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <UserCheck className="h-4 w-4" /> Personal AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Shaxsiy AI yordamchi
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            AI sizning kundalik odatlaringizni o'rganib, aqlli tavsiyalar beradi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex bg-muted rounded-xl p-1 mb-8">
            <button
              onClick={() => setActiveTab("suggestions")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "suggestions" ? "bg-card text-card-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              🤖 AI tavsiyalar
            </button>
            <button
              onClick={() => setActiveTab("habits")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "habits" ? "bg-card text-card-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              📊 Odatlarim
            </button>
          </div>

          {activeTab === "suggestions" && (
            <div className="space-y-4">
              {mockSuggestions.map((s) => (
                <div key={s.id} className={`rounded-2xl p-5 border ${typeStyles[s.type]}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center shrink-0 shadow-sm">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground text-sm">{s.message}</p>
                      <button
                        onClick={() => toast({ title: "✅ Bajarildi", description: s.action + " — amalga oshirildi" })}
                        className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                      >
                        {s.action} <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "habits" && (
            <div className="space-y-3">
              {mockHabits.map((h) => (
                <div key={h.id} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-card-foreground">{h.from} → {h.to}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {h.time} · {h.transport} · {h.frequency}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-lg shrink-0">
                    {h.frequency}
                  </span>
                </div>
              ))}
              <p className="text-center text-xs text-muted-foreground mt-4">
                AI 7 kunlik ma'lumotlardan o'rgandi
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalAI;
