import { useState } from "react";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Region = {
  name: string;
  zones: { name: string; level: "Yuqori" | "O'rtacha" | "Past" }[];
  rushHour: string;
};

const regions: Record<string, Region> = {
  toshkent: {
    name: "Toshkent",
    zones: [
      { name: "Chorsu atrofi", level: "Yuqori" },
      { name: "Amir Temur ko'chasi", level: "O'rtacha" },
      { name: "Yunusobod tomon", level: "Past" },
      { name: "Sergeli yo'li", level: "O'rtacha" },
    ],
    rushHour: "08:00 - 10:00, 17:00 - 19:00",
  },
  samarqand: {
    name: "Samarqand",
    zones: [
      { name: "Registon atrofi", level: "Yuqori" },
      { name: "Universitet ko'chasi", level: "O'rtacha" },
      { name: "Siyob bozori", level: "Yuqori" },
      { name: "Bog'ishamol tomon", level: "Past" },
    ],
    rushHour: "07:30 - 09:30, 17:00 - 19:00",
  },
  buxoro: {
    name: "Buxoro",
    zones: [
      { name: "Ark qal'a atrofi", level: "O'rtacha" },
      { name: "Markaz ko'chasi", level: "Yuqori" },
      { name: "Kogon yo'li", level: "Past" },
      { name: "Bozor atrofi", level: "O'rtacha" },
    ],
    rushHour: "08:00 - 09:30, 17:30 - 19:00",
  },
  andijon: {
    name: "Andijon",
    zones: [
      { name: "Bobur bog'i atrofi", level: "O'rtacha" },
      { name: "Markaz bozori", level: "Yuqori" },
      { name: "Asaka yo'li", level: "Past" },
      { name: "Universitet tomon", level: "O'rtacha" },
    ],
    rushHour: "07:30 - 09:00, 17:00 - 18:30",
  },
  namangan: {
    name: "Namangan",
    zones: [
      { name: "Markaz atrofi", level: "O'rtacha" },
      { name: "Chorsu bozori", level: "Yuqori" },
      { name: "Pop yo'li", level: "Past" },
      { name: "Yangi shahar", level: "Past" },
    ],
    rushHour: "08:00 - 09:30, 17:00 - 18:30",
  },
  fargona: {
    name: "Farg'ona",
    zones: [
      { name: "Al-Farg'oniy ko'chasi", level: "O'rtacha" },
      { name: "Markaz bozori", level: "Yuqori" },
      { name: "Marg'ilon yo'li", level: "O'rtacha" },
      { name: "Yangi tuman", level: "Past" },
    ],
    rushHour: "07:30 - 09:00, 17:00 - 19:00",
  },
  nukus: {
    name: "Nukus",
    zones: [
      { name: "Markaz atrofi", level: "O'rtacha" },
      { name: "Berdax ko'chasi", level: "Past" },
      { name: "Bozor atrofi", level: "O'rtacha" },
      { name: "Aeroport yo'li", level: "Past" },
    ],
    rushHour: "08:00 - 09:30, 17:30 - 19:00",
  },
};

const levelStyles: Record<string, string> = {
  Yuqori: "bg-destructive/10 text-destructive border-destructive/20",
  "O'rtacha": "bg-warning/10 text-warning border-warning/20",
  Past: "bg-success/10 text-success border-success/20",
};

const TrafficMap = () => {
  const [selected, setSelected] = useState("toshkent");
  const region = regions[selected];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Xarita</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Tirbandlik holati</h2>
          <p className="text-muted-foreground mt-3">Shahar bo'ylab real vaqt tirbandlik</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Region Selector */}
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Viloyatni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(regions).map(([key, r]) => (
                  <SelectItem key={key} value={key}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
              <div className="text-6xl font-extrabold mb-2">{region.name}</div>
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
            {region.zones.map((z) => (
              <div key={z.name} className={`rounded-xl p-4 border flex items-center justify-between ${levelStyles[z.level]}`}>
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
              <div className="text-sm font-semibold text-card-foreground">Rush Hour: {region.rushHour}</div>
              <div className="text-xs text-muted-foreground">Bu vaqtlarda tirbandlik yuqori bo'ladi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficMap;
