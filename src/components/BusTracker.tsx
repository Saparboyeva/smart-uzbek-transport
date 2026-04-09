import { Bus, Bell, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const buses = [
  { id: "35", name: "35-marshrut", from: "Chorsu", to: "Sergeli", eta: 3, status: "kelmoqda" },
  { id: "67", name: "67-marshrut", from: "Oybek", to: "Buyuk Ipak Yo'li", eta: 7, status: "yo'lda" },
  { id: "12", name: "12-marshrut", from: "Minor", to: "Yunusobod", eta: 1, status: "yaqin" },
  { id: "94", name: "94-marshrut", from: "Tinchlik", to: "Beruniy", eta: 12, status: "yo'lda" },
  { id: "51", name: "51-marshrut", from: "Hamid Olimjon", to: "Chilonzor", eta: 5, status: "kelmoqda" },
];

const statusColors: Record<string, string> = {
  yaqin: "bg-success text-success-foreground",
  kelmoqda: "bg-primary text-primary-foreground",
  "yo'lda": "bg-muted text-muted-foreground",
};

const BusTracker = () => {
  const [times, setTimes] = useState(buses.map((b) => b.eta));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes((prev) => prev.map((t) => (t > 0 ? t - 1 : Math.floor(Math.random() * 10) + 2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tracker" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Real vaqt</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Avtobus kuzatuv</h2>
          <p className="text-muted-foreground mt-3">Yaqin avtobuslarni real vaqtda kuzating</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {buses.map((bus, i) => (
            <div key={bus.id} className="bg-card rounded-xl p-4 shadow-card flex items-center justify-between hover:shadow-card-hover transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{bus.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {bus.from} → {bus.to}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[bus.status]}`}>
                  {times[i]} daq
                </span>
                <button className="text-muted-foreground hover:text-accent transition-colors" title="Bildirishnoma">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusTracker;
