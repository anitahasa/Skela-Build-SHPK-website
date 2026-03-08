import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20 h-16"
          : "bg-transparent h-24 md:h-28"
      }`}
    >
      <div className="container mx-auto relative flex items-center justify-between px-4 h-full">
        {/* Mobile toggle - LEFT side */}
        <button
          className="md:hidden text-primary-foreground p-2 rounded-full hover:bg-white/10 transition-colors z-20"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - centered on mobile, left on desktop */}
        <a
          href="#hero"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-auto flex items-center z-10"
        >
          <img
            src={logo}
            alt="Skela & Build Logo"
            className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 hover:text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        {/* Spacer for mobile to balance hamburger on left */}
        <div className="w-10 md:hidden" />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary/95 backdrop-blur-md border-t border-white/10 pb-6">
          <ul className="flex flex-col items-center gap-2 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 hover:text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
