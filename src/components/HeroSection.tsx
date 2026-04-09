import { MapPin, Clock, TrendingDown } from "lucide-react";
import heroImg from "@/assets/hero-transport.jpg";

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const stats = [
  { icon: MapPin, value: "50+", label: "Yo'nalishlar" },
  { icon: Clock, value: "Real vaqt", label: "Kuzatuv" },
  { icon: TrendingDown, value: "40%", label: "Tejash" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Smart Transport tarmog'i" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-80" />
    </div>

    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-2xl animate-slide-up">
        <span className="inline-block bg-primary/20 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-primary/30">
          🇺🇿 O'zbekiston uchun
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6">
          Barcha transport —{" "}
          <span className="text-primary-foreground bg-primary/30 px-2 rounded-lg">bir platformada</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-lg">
          Avtobus kuzatish, arzon yo'nalish topish, carpool va tirbandlik xaritasi — barchasi Smart Transport da.
        </p>
        <div className="flex flex-wrap gap-4 mb-14">
          <a href="#route" onClick={(e) => scrollTo(e, "#route")} className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg">
            Yo'nalish topish →
          </a>
          <a href="#features" onClick={(e) => scrollTo(e, "#features")} className="bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/20 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary-foreground/20 transition-colors backdrop-blur-sm">
            Batafsil
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mt-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 bg-secondary-foreground/10 backdrop-blur-md rounded-xl px-5 py-3 border border-secondary-foreground/10">
            <Icon className="h-5 w-5 text-accent" />
            <div>
              <div className="text-secondary-foreground font-bold text-lg">{value}</div>
              <div className="text-secondary-foreground/60 text-xs">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
