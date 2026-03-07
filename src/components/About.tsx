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
            <p className="font-body text-muted-foreground leading-relaxed mb-4">Skela e Build SHPK është një kompani e hapur në Shqipëri në 02.2026, pas më shumë se 12 vitesh eksperiencë pune në Europë në sektorin e ndërtimit dhe të sistemeve të skelave profesionale. 
Për shumë vite kemi ushtruar profesionin tonë me standarde të larta dhe cilësi të veçantë në vende si Zvicra, Italia, Gjermania dhe Austria, duke fituar përvojë të vlefshme dhe praktika moderne pune.<strong className="text-foreground">Skela e Build SHPK</strong> është një kompani e hapur në Shqipëri në <strong className="text-foreground">02.2026</strong>, pas më shumë se <strong className="text-foreground">12 vitesh eksperiencë pune në Europë</strong> në sektorin e ndërtimit dhe të sistemeve të skelave profesionale. Për shumë vite kemi ushtruar profesionin tonë me standarde të larta dhe cilësi të veçantë në vende si <strong className="text-foreground">Zvicra, Italia, Gjermania dhe Austria</strong>, duke fituar përvojë të vlefshme dhe praktika moderne pune.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Kompania është themeluar nga <strong className="text-foreground">grupe profesionistësh të fushës së ndërtimit dhe të sistemeve të skelave me qira</strong>, të cilët kanë bashkuar eksperiencën dhe njohuritë e tyre për të sjellë në tregun shqiptar një shërbim profesional dhe të besueshëm.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Aktualisht <strong className="text-foreground">Skela e Build SHPK</strong> disponon rreth <strong className="text-foreground">3000 m² skela profesionale</strong> në dispozicion të klientëve. Për projekte më të mëdha, kompania ka mundësinë të <strong className="text-accent">importojë deri në tre herë më shumë skela</strong>, duke garantuar që çdo projekt të realizohet pa vonesa dhe sipas nevojave të klientit.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Ne punojmë çdo ditë për të ofruar:
            </p>
            <ul className="font-body text-muted-foreground space-y-2 mb-8 list-none">
              {["Standarde të larta europiane", "Siguri dhe profesionalizëm në çdo projekt"].map((item) =>
              <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <strong className="text-foreground">{item}</strong>
                </li>
              )}
            </ul>

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