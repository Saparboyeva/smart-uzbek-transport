import { useState } from "react";
import { Shield, AlertTriangle, Construction, Camera, MapPin, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Hazard = {
  id: number;
  type: "accident" | "pothole" | "construction" | "other";
  title: string;
  location: string;
  distance: string;
  severity: "Yuqori" | "O'rtacha" | "Past";
  reportedBy: string;
  time: string;
};

const hazardIcons: Record<string, typeof AlertTriangle> = {
  accident: AlertTriangle,
  pothole: MapPin,
  construction: Construction,
  other: Camera,
};

const severityStyles: Record<string, string> = {
  Yuqori: "bg-destructive/10 text-destructive border-destructive/20",
  "O'rtacha": "bg-warning/10 text-warning border-warning/20",
  Past: "bg-success/10 text-success border-success/20",
};

const mockHazards: Hazard[] = [
  { id: 1, type: "accident", title: "Avtohalokat", location: "Amir Temur ko'chasi, Toshkent", distance: "1.2 km", severity: "Yuqori", reportedBy: "3 foydalanuvchi", time: "5 daqiqa oldin" },
  { id: 2, type: "pothole", title: "Chuqur (yama)", location: "Shota Rustaveli ko'chasi", distance: "800 m", severity: "O'rtacha", reportedBy: "AI kamera", time: "15 daqiqa oldin" },
  { id: 3, type: "construction", title: "Ta'mir ishlari", location: "Buyuk Ipak Yo'li ko'chasi", distance: "2.5 km", severity: "O'rtacha", reportedBy: "Rasmiy ma'lumot", time: "1 soat oldin" },
  { id: 4, type: "accident", title: "Kichik to'qnashuv", location: "Beruniy ko'chasi", distance: "3.1 km", severity: "Past", reportedBy: "1 foydalanuvchi", time: "30 daqiqa oldin" },
  { id: 5, type: "pothole", title: "Yo'l buzilishi", location: "Nukus ko'chasi", distance: "500 m", severity: "Yuqori", reportedBy: "AI kamera", time: "2 daqiqa oldin" },
];

const SafetyAI = () => {
  const [filter, setFilter] = useState<string>("all");
  const { toast } = useToast();

  const filtered = filter === "all" ? mockHazards : mockHazards.filter((h) => h.type === filter);

  const reportHazard = () => {
    toast({
      title: "📸 Xabar yuborildi",
      description: "Yo'l xavfi haqida ma'lumot AI ga yuborildi. Rahmat!",
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" /> Safety AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Yo'l xavfsizligi AI
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            AI kamera va foydalanuvchi xabarlari orqali xavfli hududlarni aniqlaydi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Alert Banner */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-4 mb-8 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 animate-pulse" />
            <div>
              <p className="font-bold text-sm text-destructive">Diqqat!</p>
              <p className="text-xs text-card-foreground">Sizning yo'nalishingizda {mockHazards.filter(h => h.severity === "Yuqori").length} ta xavfli hudud aniqlandi</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { key: "all", label: "Barchasi" },
              { key: "accident", label: "🚗 Halokat" },
              { key: "pothole", label: "🕳️ Yama" },
              { key: "construction", label: "🚧 Ta'mir" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Hazard List */}
          <div className="space-y-3 mb-8">
            {filtered.map((h) => {
              const Icon = hazardIcons[h.type];
              return (
                <div key={h.id} className={`rounded-xl p-4 border ${severityStyles[h.severity]}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{h.title}</span>
                        <span className="text-xs font-bold">{h.severity}</span>
                      </div>
                      <p className="text-xs opacity-80 mt-0.5">{h.location}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs opacity-60">
                        <span>📍 {h.distance}</span>
                        <span>👥 {h.reportedBy}</span>
                        <span>🕐 {h.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Report Button */}
          <button
            onClick={reportHazard}
            className="w-full bg-accent text-accent-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-3 hover:bg-accent/90 transition-colors"
          >
            <Camera className="h-5 w-5" />
            Yo'l xavfini xabar berish
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafetyAI;
