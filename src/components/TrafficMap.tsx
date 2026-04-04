import { AlertTriangle, Clock } from "lucide-react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const zones = [
  { name: "Chorsu atrofi", level: "Yuqori", color: "bg-destructive/10 text-destructive border-destructive/20", lat: 41.3265, lng: 69.2290, mapColor: "#dc2626", radius: 800 },
  { name: "Amir Temur ko'chasi", level: "O'rtacha", color: "bg-warning/10 text-warning border-warning/20", lat: 41.3110, lng: 69.2795, mapColor: "#d97706", radius: 600 },
  { name: "Yunusobod tomon", level: "Past", color: "bg-success/10 text-success border-success/20", lat: 41.3520, lng: 69.2850, mapColor: "#16a34a", radius: 700 },
  { name: "Sergeli yo'li", level: "O'rtacha", color: "bg-warning/10 text-warning border-warning/20", lat: 41.2500, lng: 69.2200, mapColor: "#d97706", radius: 900 },
];

const TrafficMap = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Xarita</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Tirbandlik holati</h2>
        <p className="text-muted-foreground mt-3">Shahar bo'ylab real vaqt tirbandlik</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Real traffic map */}
        <div className="rounded-2xl overflow-hidden shadow-card mb-8 border border-border">
          <MapContainer
            center={[41.305, 69.255]}
            zoom={11}
            style={{ height: "450px", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {zones.map((zone) => (
              <Circle
                key={zone.name}
                center={[zone.lat, zone.lng]}
                radius={zone.radius}
                pathOptions={{
                  color: zone.mapColor,
                  fillColor: zone.mapColor,
                  fillOpacity: 0.25,
                  weight: 2,
                }}
              >
                <Popup>
                  <strong>{zone.name}</strong>
                  <br />
                  Tirbandlik: {zone.level}
                </Popup>
              </Circle>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse-dot" />
            <span className="text-muted-foreground">Yuqori</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">O'rtacha</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Past</span>
          </div>
        </div>

        {/* Zone list */}
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
