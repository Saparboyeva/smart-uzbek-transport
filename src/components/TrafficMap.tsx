import { AlertTriangle, Clock } from "lucide-react";

const zones = [
  { name: "Chorsu atrofi", level: "Yuqori", color: "bg-destructive/10 text-destructive border-destructive/20" },
  { name: "Amir Temur ko'chasi", level: "O'rtacha", color: "bg-warning/10 text-warning border-warning/20" },
  { name: "Yunusobod tomon", level: "Past", color: "bg-success/10 text-success border-success/20" },
  { name: "Sergeli yo'li", level: "O'rtacha", color: "bg-warning/10 text-warning border-warning/20" },
];

const TrafficMap = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Xarita</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Tirbandlik holati</h2>
        <p className="text-muted-foreground mt-3">Shahar bo'ylab real vaqt tirbandlik</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-secondary-foreground/30"
                style={{
                  top: `${12 + i * 12}%`,
                  left: "5%",
                  right: "5%",
                  transform: `rotate(${(i % 3 - 1) * 15}deg)`,
                }}
              />
            ))}
          </div>
          <div className="relative text-center text-secondary-foreground">
            <div className="text-6xl font-extrabold mb-2">Toshkent</div>
            <p className="text-secondary-foreground/60 text-sm">Real vaqt tirbandlik ma'lumotlari</p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-destructive animate-pulse-dot" />
                <span className="text-secondary-foreground/80">Yuqori</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-secondary-foreground/80">O'rtacha</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-secondary-foreground/80">Past</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {zones.map((z) => (
            <div key={z.name} className={`rounded-xl p-4 border flex items-center justify-between ${z.color}`}>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-semibold text-sm">{z.name}</span>
              </div>
              <span className="text-xs font-bold">{z.level}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-card rounded-xl p-4 shadow-card flex items-center gap-3">
          <Clock className="h-5 w-5 text-accent" />
          <div>
            <div className="text-sm font-semibold text-card-foreground">Rush Hour: 08:00 - 10:00, 17:00 - 19:00</div>
            <div className="text-xs text-muted-foreground">Bu vaqtlarda tirbandlik yuqori bo'ladi</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrafficMap;
