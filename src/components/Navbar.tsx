import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Xizmatlar", href: "#features" },
  { label: "Kuzatuv", href: "#tracker" },
  { label: "Yo'nalish", href: "#route" },
  { label: "Carpool", href: "#carpool" },
  { label: "Bron", href: "#booking" },
];

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" onClick={(e) => scrollTo(e, "#hero")} className="flex items-center gap-2 font-bold text-xl">
          <Bus className="h-7 w-7 text-primary" />
          <span className="text-foreground">Smart</span>
          <span className="text-gradient">Transport</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#route" onClick={(e) => scrollTo(e, "#route")} className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Boshlash
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { scrollTo(e, l.href); setOpen(false); }} className="block text-sm font-medium text-muted-foreground hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <a href="#route" onClick={(e) => { scrollTo(e, "#route"); setOpen(false); }} className="block bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center">
            Boshlash
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
