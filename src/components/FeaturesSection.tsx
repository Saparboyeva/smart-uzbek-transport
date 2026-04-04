import { Bus, Calculator, Users, Map } from "lucide-react";

const features = [
  {
    icon: Bus,
    title: "Real vaqt kuzatuv",
    desc: "GPS orqali avtobuslarni kuzating va qachon kelishini bilib oling",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calculator,
    title: "Arzon yo'nalish",
    desc: "Transport turlarini solishtiring, eng tez va arzon yo'lni toping",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Users,
    title: "Birga yurish (Carpool)",
    desc: "Yo'lovchilarni birlashtiring va yo'l xarajatini bo'lishing",
    color: "bg-success/10 text-success",
  },
  {
    icon: Map,
    title: "Tirbandlik xaritasi",
    desc: "Shahar bo'ylab real vaqt tirbandlik va algoritmik tavsiyalar",
    color: "bg-warning/10 text-warning",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Xizmatlar</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Bir platformada barcha yechim
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Transportda vaqt va pul tejashning eng zamonaviy usuli
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc, color }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 group cursor-default"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
