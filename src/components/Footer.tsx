import { Bus } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Bus className="h-6 w-6 text-primary" />
          Smart Transport
        </div>
        <p className="text-secondary-foreground/60 text-sm">
          © 2026 Smart Transport. O'zbekiston uchun qurilgan.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
