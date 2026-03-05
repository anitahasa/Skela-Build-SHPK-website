import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Kryefaqja", href: "#hero" },
  { label: "Shërbimet", href: "#services" },
  { label: "Rreth Nesh", href: "#about" },
  { label: "Kontakti", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Skela&Build logo" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-border/20 pb-6">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
