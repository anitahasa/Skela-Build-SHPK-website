import aboutImg from "@/assets/about-construction.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const About = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={imgRef}
            className={`overflow-hidden rounded-lg transition-all duration-1000 ${
            imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`
            }>
            
            <img
              src={aboutImg}
              alt="Rreth Skela&Build"
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
            
          </div>

          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-200 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`
            }>
            
            <h2 className="text-5xl md:text-6xl text-foreground mb-6">RRETH NESH</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">Skela e Build SHPK është një kompani e hapur në Shqipëri në 2026, pas më shumë se 12 vitesh eksperiencë pune në Europë në sektorin e ndërtimit dhe të sistemeve të skelave profesionale. Për shumë vite kemi ushtruar profesionin tonë me standarde të larta dhe cilësi të veçantë në vende si Zvicra, Italia, Gjermania dhe Austria, duke fituar përvojë të vlefshme dhe praktika moderne pune.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Kompania është themeluar nga grupe profesionistësh të fushës së ndërtimit dhe të sistemeve të skelave me qira, të cilët kanë bashkuar eksperiencën dhe njohuritë e tyre për të sjellë në tregun shqiptar një shërbim profesional dhe të besueshëm.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Aktualisht Skela e Build SHPK disponon rreth 3000 m² skela profesionale në dispozicion të klientëve. Për projekte më të mëdha, kompania ka mundësinë të importojë deri në tre herë më shumë skela, duke garantuar që çdo projekt të realizohet pa vonesa dhe sipas nevojave të klientit.
            </p>


            <div className="grid grid-cols-3 gap-6">
              {[
              { num: "12+", label: "Vite Përvojë" },
              { num: "3000m²", label: "Skela" },
              { num: "15+", label: "Punonjës" }].
              map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl text-accent">{stat.num}</div>
                  <div className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default About;