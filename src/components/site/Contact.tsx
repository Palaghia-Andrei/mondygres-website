const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
            Vino la depozit
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-foreground text-balance mb-8">
            Hai să discutăm despre proiectul tău.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Treci pe la noi în depozit sau scrie-ne — îți pregătim o ofertă
            clară pentru tot necesarul, în maxim 24 de ore.
          </p>

          <dl className="space-y-6 border-t border-border pt-8">
            <div className="flex justify-between items-start gap-6 pb-6 border-b border-border">
              <dt className="font-display font-bold text-foreground">Adresă</dt>
              <dd className="text-right text-muted-foreground">
                DN73 517<br />507135 Moieciu de Jos<br />Județul Brașov
              </dd>
            </div>
            <div className="flex justify-between items-start gap-6 pb-6 border-b border-border">
              <dt className="font-display font-bold text-foreground">Program</dt>
              <dd className="text-right text-muted-foreground">
                Lun – Vin: 08:00 – 18:00<br />
                Sâm: 08:00 – 14:00<br />
                Duminică: Închis
              </dd>
            </div>
            <div className="flex justify-between items-center gap-6">
              <dt className="font-display font-bold text-foreground">Companie</dt>
              <dd className="text-right text-muted-foreground">Mondygres SRL</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mondygres+SRL+Moieciu+de+Jos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant"
            >
              Deschide în Google Maps
            </a>
            <a
              href="mailto:contact@mondygres.ro"
              className="px-6 py-3 border border-foreground/20 text-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-foreground hover:text-background transition-smooth"
            >
              Trimite email
            </a>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-sm overflow-hidden shadow-elegant">
          <iframe
            title="Locația Mondygres SRL pe hartă"
            src="https://www.google.com/maps?q=Moieciu+de+Jos+DN73&output=embed"
            className="absolute inset-0 w-full h-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
