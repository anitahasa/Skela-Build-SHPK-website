import heroImg from "@/assets/hero-construction.jpg";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Kantier ndërtimi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img src={logo} alt="Skela&Build logo" className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
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
