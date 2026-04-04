import { Bus, Bell, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const busIcon = new L.DivIcon({
  html: `<div style="background:hsl(195,85%,35%);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">🚌</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  className: "",
});

const buses = [
  { id: "35", name: "35-marshrut", from: "Chorsu", to: "Sergeli", eta: 3, status: "kelmoqda", lat: 41.3265, lng: 69.2290 },
  { id: "67", name: "67-marshrut", from: "Oybek", to: "Buyuk Ipak Yo'li", eta: 7, status: "yo'lda", lat: 41.3110, lng: 69.2795 },
  { id: "12", name: "12-marshrut", from: "Minor", to: "Yunusobod", eta: 1, status: "yaqin", lat: 41.3380, lng: 69.2680 },
  { id: "94", name: "94-marshrut", from: "Tinchlik", to: "Beruniy", eta: 12, status: "yo'lda", lat: 41.2950, lng: 69.2150 },
  { id: "51", name: "51-marshrut", from: "Hamid Olimjon", to: "Chilonzor", eta: 5, status: "kelmoqda", lat: 41.3150, lng: 69.2480 },
];

const statusColors: Record<string, string> = {
  yaqin: "bg-success text-success-foreground",
  kelmoqda: "bg-primary text-primary-foreground",
  "yo'lda": "bg-muted text-muted-foreground",
};

const BusTracker = () => {
  const [times, setTimes] = useState(buses.map((b) => b.eta));
  const [positions, setPositions] = useState(buses.map((b) => ({ lat: b.lat, lng: b.lng })));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes((prev) => prev.map((t) => (t > 0 ? t - 1 : Math.floor(Math.random() * 10) + 2)));
      setPositions((prev) =>
        prev.map((p) => ({
          lat: p.lat + (Math.random() - 0.5) * 0.002,
          lng: p.lng + (Math.random() - 0.5) * 0.002,
        }))
      );
    }, 4000);
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

        <div className="max-w-4xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card mb-8 border border-border">
            <MapContainer
              center={[41.315, 69.255]}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {buses.map((bus, i) => (
                <Marker key={bus.id} position={[positions[i].lat, positions[i].lng]} icon={busIcon}>
                  <Popup>
                    <div className="text-sm">
                      <strong>{bus.name}</strong>
                      <br />
                      {bus.from} → {bus.to}
                      <br />
                      <span className="font-semibold">{times[i]} daqiqa</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Bus list */}
          <div className="space-y-3">
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
      </div>
    </section>
  );
};

export default BusTracker;
