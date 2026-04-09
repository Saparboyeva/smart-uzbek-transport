import { Users, Star, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const rides = [
  { driver: "Alisher", from: "Yunusobod", to: "Sergeli", time: "08:30", seats: 2, rating: 4.8, price: "8,000" },
  { driver: "Nodira", from: "Chilonzor", to: "Chorsu", time: "09:00", seats: 3, rating: 4.9, price: "5,000" },
  { driver: "Bobur", from: "Minor", to: "Buyuk Ipak Yo'li", time: "07:45", seats: 1, rating: 4.7, price: "6,500" },
];

const CarpoolSection = () => {
  const { toast } = useToast();

  return (
  <section id="carpool" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Carpool</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Birga yuring — tejang</h2>
        <p className="text-muted-foreground mt-3">Yo'lovchilarni birlashtiring va xarajatni bo'lishing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {rides.map((ride) => (
          <div key={ride.driver} className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {ride.driver[0]}
              </div>
              <div>
                <div className="font-semibold text-card-foreground">{ride.driver}</div>
                <div className="flex items-center gap-1 text-xs text-accent">
                  <Star className="h-3 w-3 fill-current" /> {ride.rating}
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {ride.from} → {ride.to}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" /> {ride.time}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-3.5 w-3.5 text-primary" /> {ride.seats} joy bo'sh
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-card-foreground">{ride.price} so'm</span>
              <button
                onClick={() => toast({ title: "So'rov yuborildi ✅", description: `${ride.driver}ga qo'shilish so'rovi yuborildi` })}
                className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Qo'shilish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
export default CarpoolSection;
