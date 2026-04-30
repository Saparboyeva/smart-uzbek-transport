import { useState } from "react";
import { Plane, Train, Calendar, MapPin, Users, ArrowRight, Clock, Search, CheckCircle2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type TransportType = "flight" | "train";

type Trip = {
  id: string;
  carrier: string;
  code: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  price: number;
  seatsLeft: number;
  class: string;
};

const initialFlights: Trip[] = [
  { id: "f1", carrier: "Uzbekistan Airways", code: "HY 271", from: "Toshkent (TAS)", to: "Samarqand (SKD)", depart: "08:30", arrive: "09:25", duration: "55 daq", price: 850000, seatsLeft: 12, class: "Economy" },
  { id: "f2", carrier: "Qanot Sharq", code: "HH 102", from: "Toshkent (TAS)", to: "Buxoro (BHK)", depart: "11:00", arrive: "12:10", duration: "1s 10daq", price: 920000, seatsLeft: 6, class: "Economy" },
  { id: "f3", carrier: "Uzbekistan Airways", code: "HY 045", from: "Toshkent (TAS)", to: "Nukus (NCU)", depart: "14:15", arrive: "16:00", duration: "1s 45daq", price: 1100000, seatsLeft: 18, class: "Economy" },
  { id: "f4", carrier: "Centrum Air", code: "C9 408", from: "Toshkent (TAS)", to: "Urganch (UGC)", depart: "17:40", arrive: "19:00", duration: "1s 20daq", price: 980000, seatsLeft: 9, class: "Economy" },
  { id: "f5", carrier: "Uzbekistan Airways", code: "HY 311", from: "Toshkent (TAS)", to: "Farg'ona (FEG)", depart: "20:00", arrive: "20:45", duration: "45 daq", price: 720000, seatsLeft: 22, class: "Economy" },
];

const initialTrains: Trip[] = [
  { id: "t1", carrier: "Afrosiyob", code: "762Ф", from: "Toshkent", to: "Samarqand", depart: "07:00", arrive: "09:10", duration: "2s 10daq", price: 220000, seatsLeft: 34, class: "Biznes" },
  { id: "t2", carrier: "Sharq", code: "10Ф", from: "Toshkent", to: "Buxoro", depart: "08:15", arrive: "15:30", duration: "7s 15daq", price: 180000, seatsLeft: 56, class: "Kupe" },
  { id: "t3", carrier: "Afrosiyob", code: "764Ф", from: "Toshkent", to: "Qarshi", depart: "08:00", arrive: "11:55", duration: "3s 55daq", price: 240000, seatsLeft: 28, class: "Biznes" },
  { id: "t4", carrier: "Registon", code: "60Ф", from: "Toshkent", to: "Samarqand", depart: "17:30", arrive: "20:50", duration: "3s 20daq", price: 150000, seatsLeft: 42, class: "Iqtisodiy" },
  { id: "t5", carrier: "Sharq", code: "12Ф", from: "Toshkent", to: "Xiva", depart: "20:30", arrive: "12:15", duration: "15s 45daq", price: 320000, seatsLeft: 18, class: "Kupe" },
];

type Booking = { tripId: string; passengers: number; date: string; bookedAt: number };

const BookingSection = () => {
  const { toast } = useToast();
  const [type, setType] = useState<TransportType>("flight");
  const [from, setFrom] = useState("Toshkent");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [passengers, setPassengers] = useState(1);
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState<Trip | null>(null);
  const [flights, setFlights] = useState<Trip[]>(initialFlights);
  const [trains, setTrains] = useState<Trip[]>(initialTrains);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const trips = type === "flight" ? flights : trains;
  const setTrips = type === "flight" ? setFlights : setTrains;
  const filtered = searched
    ? trips.filter((t) =>
        (!to || t.to.toLowerCase().includes(to.toLowerCase())) &&
        t.from.toLowerCase().includes(from.toLowerCase())
      )
    : trips;

  const findTrip = (id: string): Trip | undefined =>
    [...flights, ...trains].find((t) => t.id === id);

  const handleSearch = () => {
    if (!from.trim()) {
      toast({ title: "Xato", description: "Qayerdan ekanligini kiriting", variant: "destructive" });
      return;
    }
    setSearched(true);
    toast({ title: "Qidirildi 🔍", description: `${filtered.length} ta variant topildi` });
  };

  const handleBook = (trip: Trip) => {
    if (trip.seatsLeft < passengers) {
      toast({ title: "Joy yetarli emas", description: `Faqat ${trip.seatsLeft} joy bo'sh`, variant: "destructive" });
      return;
    }
    setSelected(trip);
  };

  const confirmBooking = () => {
    if (!selected) return;
    const tripId = selected.id;
    const pax = passengers;
    setTrips((prev) => prev.map((t) => (t.id === tripId ? { ...t, seatsLeft: t.seatsLeft - pax } : t)));
    setBookings((p) => [...p, { tripId, passengers: pax, date, bookedAt: Date.now() }]);
    toast({
      title: "Bron tasdiqlandi ✅",
      description: `${selected.carrier} ${selected.code} — ${pax} yo'lovchi. Jami: ${(selected.price * pax).toLocaleString()} so'm`,
    });
    setSelected(null);
  };

  const cancelBooking = (bookedAt: number) => {
    const booking = bookings.find((b) => b.bookedAt === bookedAt);
    if (!booking) return;
    const trip = findTrip(booking.tripId);
    if (!trip) return;
    const isFlight = flights.some((f) => f.id === booking.tripId);
    const setter = isFlight ? setFlights : setTrains;
    setter((prev) => prev.map((t) => (t.id === booking.tripId ? { ...t, seatsLeft: t.seatsLeft + booking.passengers } : t)));
    setBookings((p) => p.filter((b) => b.bookedAt !== bookedAt));
    toast({ title: "Bron bekor qilindi", description: `${trip.carrier} ${trip.code} — ${booking.passengers} joy qayta ochildi` });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Bron qilish</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Samolyot va Poyezd chiptalari</h2>
          <p className="text-muted-foreground mt-3">Oldindan band qiling — eng yaxshi narx va joyni tanlang</p>
        </div>

        {/* Type Switcher */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => { setType("flight"); setSearched(false); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              type === "flight" ? "bg-primary text-primary-foreground shadow-card-hover" : "bg-card text-card-foreground hover:bg-muted"
            }`}
          >
            <Plane className="h-4 w-4" /> Samolyot
          </button>
          <button
            onClick={() => { setType("train"); setSearched(false); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              type === "train" ? "bg-primary text-primary-foreground shadow-card-hover" : "bg-card text-card-foreground hover:bg-muted"
            }`}
          >
            <Train className="h-4 w-4" /> Poyezd
          </button>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-card p-5 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> Qayerdan</label>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Toshkent"
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> Qayerga</label>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Samarqand"
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> Sana</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><Users className="h-3 w-3" /> Yo'lovchilar</label>
              <input
                type="number"
                min={1}
                max={9}
                value={passengers}
                onChange={(e) => setPassengers(Math.max(1, Math.min(9, +e.target.value || 1)))}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="md:col-span-1 flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" /> Qidirish
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map((trip) => {
            const isBooked = bookedIds.includes(trip.id);
            const Icon = type === "flight" ? Plane : Train;
            return (
              <div key={trip.id} className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-48">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">{trip.carrier}</div>
                      <div className="text-xs text-muted-foreground">{trip.code} • {trip.class}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-center">
                      <div className="font-bold text-lg text-card-foreground">{trip.depart}</div>
                      <div className="text-xs text-muted-foreground">{trip.from.split(" ")[0]}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {trip.duration}</div>
                      <div className="w-full h-px bg-border relative my-1">
                        <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-primary" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-card-foreground">{trip.arrive}</div>
                      <div className="text-xs text-muted-foreground">{trip.to.split(" ")[0]}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2 md:w-40">
                    <div className="text-right">
                      <div className="font-bold text-lg text-primary">{trip.price.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">so'm / kishi</div>
                      <div className="text-xs text-success mt-0.5">{trip.seatsLeft} joy bo'sh</div>
                    </div>
                    <button
                      onClick={() => handleBook(trip)}
                      disabled={isBooked}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-opacity ${
                        isBooked ? "bg-success text-white cursor-default" : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {isBooked ? (<span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Bron qilingan</span>) : "Bron qilish"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">Variantlar topilmadi. Boshqa shaharni tanlab ko'ring.</div>
          )}
        </div>

        {/* Confirmation Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="bg-card rounded-2xl shadow-card-hover p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  {type === "flight" ? <Plane className="h-6 w-6 text-primary" /> : <Train className="h-6 w-6 text-primary" />}
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">Bronni tasdiqlang</h3>
                  <p className="text-xs text-muted-foreground">{selected.carrier} • {selected.code}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm mb-5 bg-muted/50 rounded-xl p-4">
                <div className="flex justify-between"><span className="text-muted-foreground">Yo'nalish:</span><span className="font-medium">{selected.from} → {selected.to}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sana:</span><span className="font-medium">{date}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Vaqt:</span><span className="font-medium">{selected.depart} – {selected.arrive}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Yo'lovchilar:</span><span className="font-medium">{passengers}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sinf:</span><span className="font-medium">{selected.class}</span></div>
                <div className="border-t border-border pt-2 flex justify-between font-bold"><span>Jami:</span><span className="text-primary">{(selected.price * passengers).toLocaleString()} so'm</span></div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setSelected(null)} className="flex-1 bg-muted text-muted-foreground rounded-lg py-2 text-sm font-semibold hover:bg-muted/70 transition-colors">Bekor qilish</button>
                <button onClick={confirmBooking} className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-sm font-semibold hover:opacity-90 transition-opacity">Tasdiqlash</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
