import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLFormElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "Plotësoni fushat e detyrueshme",
        variant: "destructive"
      });
      return;
    }

    // Build WhatsApp message
    const whatsappNumber = "355697553844";
    const text = `Pershendetje Skela&Build!%0A%0AEmri: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ATelefon: ${encodeURIComponent(phone)}%0A%0A${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Po hapim WhatsApp...",
      description: "Mesazhi juaj do të dërgohet përmes WhatsApp."
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
          }>
          
          <h2 className="text-5xl md:text-6xl text-primary-foreground mb-4">NA KONTAKTONI</h2>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">Jeni gati të filloni projektin tuaj? Na kontaktoni për më shumë informacion.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 ${
            infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`
            }>
            
            {[
            { icon: MapPin, label: "Adresa", value: "Lagja 13, Plazh, Durres" },
            { icon: Phone, label: "Telefon", value: "+355 69 755 3844" },
            { icon: Mail, label: "Email", value: "skelabuild@outlook.com" },
            { icon: Clock, label: "Orari", value: "E Hënë - E Shtunë: 08:00 - 17:00" }].
            map((item) =>
            <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-primary-foreground/60 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="font-body text-primary-foreground mt-1">{item.value}</div>
                </div>
              </div>
            )}

            <div
              className="rounded-lg overflow-hidden border border-border/20 h-52"
              dangerouslySetInnerHTML={{
                __html: `<iframe title="Lokacioni" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2208.4580504682554!2d19.48276010114124!3d41.31215995095159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fd98e2cc63ad5%3A0x7c12388cd10d2a69!2sRruga%20Pelikan%2C%20Durr%C3%ABs%2C%20Albania!5e0!3m2!1sen!2s!4v1772912380082!5m2!1sen!2s" class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
              }} />
            
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
            formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`
            }>
            
            {[
            { key: "name", label: "Emri juaj", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "phone", label: "Telefon", type: "tel" }].
            map((field) =>
            <div key={field.key}>
                <label className="font-body text-sm text-primary-foreground/60 uppercase tracking-widest mb-2 block">
                  {field.label}
                </label>
                <input
                type={field.type}
                required
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition" />
              
              </div>
            )}
            <div>
              <label className="font-body text-sm text-primary-foreground/60 uppercase tracking-widest mb-2 block">
                Mesazhi
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition resize-none" />
              
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-green-600 text-white font-heading text-xl tracking-wide rounded hover:bg-green-700 transition flex items-center justify-center gap-3">
              
              <MessageCircle className="w-6 h-6" />
              DËRGO NË WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>);

};

export default Contact;