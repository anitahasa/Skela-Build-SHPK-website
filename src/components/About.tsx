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
            <p className="font-body text-muted-foreground leading-relaxed mb-6">Skela&Build SHPK është një kompani e re në tregun shqiptar e themeluar ne vitin 2026, me fokus ne cilesi, siguri dhe korrektesi ne cdo projekt ndertimi dhe ofrim skelash me qera.
 Operojme ne Durres dhe Tirane duke garantuar sherbim te shpejte dhe profesional.<strong className="text-foreground">Skela&Build shpk</strong> është një kompani ndërtimi me përvojë
              shumëvjeçare në tregun shqiptar. Jemi të specializuar në ndërtimin e objekteve rezidenciale,
              komerciale dhe industriale.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Ekipi ynë i profesionistëve të kualifikuar garanton cilësi të lartë, afate të respektuara dhe
              çmime konkurruese. Besoni tek ne për projektin tuaj të ardhshëm.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
              { num: "15+", label: "Vite Përvojë" },
              { num: "200+", label: "Projekte" },
              { num: "50+", label: "Punonjës" }].
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