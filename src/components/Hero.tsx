import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-construction.jpg";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      // Fade out hero logo as user scrolls (0-200px range)
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      setLogoOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Kantier ndërtimi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 text-center -mt-40 md:mt-0 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero logo - fades out on scroll */}
        <div
          className="flex justify-center mb-2 transition-transform duration-300"
          style={{ opacity: logoOpacity, transform: `scale(${0.8 + logoOpacity * 0.2})` }}
        >
          <img
            src={logo}
            alt="Skela & Build Logo"
            className="h-48 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-primary-foreground leading-none mb-6">
          SKELA<span className="text-accent">&</span>BUILD
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Ndërtojmë të ardhmen tuaj — me cilësi, siguri dhe profesionalizëm. Partneri juaj i besueshëm në ndërtim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-heading text-xl tracking-wide rounded hover:brightness-110 transition"
          >
            NA KONTAKTONI
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading text-xl tracking-wide rounded hover:border-accent hover:text-accent transition"
          >
            SHËRBIMET TONA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
