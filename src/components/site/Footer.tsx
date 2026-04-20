const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
    <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 grid place-items-center gradient-accent text-accent-foreground font-display font-black text-lg rounded-sm">
          M
        </span>
        <div>
          <div className="font-display font-extrabold tracking-tight">MONDYGRES SRL</div>
          <div className="text-xs text-primary-foreground/60">Moieciu de Jos · Brașov</div>
        </div>
      </div>
      <p className="text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Mondygres SRL. Toate drepturile rezervate.
      </p>
    </div>
  </footer>
);

export default Footer;
