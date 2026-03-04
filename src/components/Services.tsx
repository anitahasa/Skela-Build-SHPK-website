import { Building2, HardHat, Ruler, Wrench, Truck, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Ndërtim Banesash",
    desc: "Ndërtojmë banesa moderne rezidenciale dhe apartamente me standarde të larta cilësie.",
  },
  {
    icon: HardHat,
    title: "Skela & Struktura",
    desc: "Montim dhe çmontim skelash profesionale për çdo lloj projekti ndërtimi.",
  },
  {
    icon: Ruler,
    title: "Projektim",
    desc: "Shërbime projektimi arkitekturor dhe inxhinierik për projekte të çdo shkalle.",
  },
  {
    icon: Wrench,
    title: "Rikonstruksion",
    desc: "Rinovim dhe rikonstruksion i objekteve ekzistuese me materiale të cilësisë së lartë.",
  },
  {
    icon: Truck,
    title: "Transport Materialesh",
    desc: "Transport i sigurt dhe i shpejtë i materialeve të ndërtimit në çdo lokacion.",
  },
  {
    icon: ShieldCheck,
    title: "Siguria në Punë",
    desc: "Garantojmë standarde të larta sigurie për punëtorët dhe mjedisin e punës.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-foreground mb-4">SHËRBIMET TONA</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ofrojmë një gamë të gjerë shërbimesh ndërtimi për të përmbushur nevojat tuaja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card p-8 rounded-lg border border-border hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <s.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
