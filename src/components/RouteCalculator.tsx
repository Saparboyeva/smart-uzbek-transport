import { ArrowRight, Bus, Car, Train, Clock, Banknote } from "lucide-react";
import { useState } from "react";

const routes = [
  { type: "Avtobus", icon: Bus, time: "25 daq", cost: "1,500 so'm", color: "text-primary" },
  { type: "Metro", icon: Train, time: "18 daq", cost: "1,800 so'm", color: "text-success" },
  { type: "Taksi", icon: Car, time: "12 daq", cost: "15,000 so'm", color: "text-accent" },
];

const RouteCalculator = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [show, setShow] = useState(false);

  return (
    <section id="route" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Kalkulyator</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Arzon yo'nalish topish</h2>
          <p className="text-muted-foreground mt-3">Transport turlarini solishtiring va eng yaxshi variantni tanlang</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Qayerdan?"
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <ArrowRight className="h-5 w-5 text-muted-foreground self-center hidden md:block" />
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Qayerga?"
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              onClick={() => setShow(true)}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Yo'nalish topish
            </button>
          </div>

          {show && (
            <div className="mt-6 space-y-3 animate-slide-up">
              {routes.map(({ type, icon: Icon, time, cost, color }) => (
                <div key={type} className="bg-card rounded-xl p-4 shadow-card flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="font-semibold text-card-foreground">{type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {time}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-card-foreground">
                      <Banknote className="h-3.5 w-3.5" /> {cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RouteCalculator;
