const Footer = () => (
  <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
    <div className="container py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 grid place-items-center gradient-accent text-accent-foreground font-display font-black text-xl rounded-sm">
              M
            </span>
            <div>
              <div className="font-display font-extrabold tracking-tight text-lg">MONDYGRES SRL</div>
              <div className="text-xs text-primary-foreground/60">Materiale de construcții</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Depozit de materiale de construcții în Moieciu de Jos, Brașov.
            Ceresit, Baumit, Romcim, Hirsch, Isover, Rigips — în stoc permanent.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a href="tel:+40751535368" className="hover:text-accent transition-smooth font-semibold text-primary-foreground">
                0751 535 368
              </a>
            </li>
            <li>
              <a href="mailto:nitu_alin23@yahoo.com" className="hover:text-accent transition-smooth">
                nitu_alin23@yahoo.com
              </a>
            </li>
            <li>Str. Principală nr. 518</li>
            <li>Moieciu de Jos, Brașov</li>
          </ul>
        </div>

        {/* Program */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-accent mb-4">Program</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex justify-between gap-4">
              <span>Lun – Vin</span>
              <span className="text-primary-foreground">08:00 – 17:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sâmbătă</span>
              <span className="text-primary-foreground">08:00 – 14:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Duminică</span>
              <span className="text-primary-foreground/40">Închis</span>
            </li>
          </ul>
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-block px-4 py-2 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Cere o ofertă
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Mondygres SRL. Toate drepturile rezervate.
        </p>
        <div className="flex gap-2 flex-wrap">
          {["Ceresit", "Baumit", "Romcim", "Hirsch", "Isover", "Rigips"].map((b) => (
            <span key={b} className="text-[10px] text-primary-foreground/30 uppercase tracking-wider">{b}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
