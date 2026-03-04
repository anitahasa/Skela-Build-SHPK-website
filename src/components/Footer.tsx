const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="font-heading text-2xl text-background tracking-wide">
            SKELA<span className="text-accent">&</span>BUILD
          </a>
          <p className="font-body text-sm text-background/50">
            © {new Date().getFullYear()} Skela&Build shpk. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
