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
            Treci pe la noi în depozit sau sună-ne — îți pregătim o ofertă
            clară pentru tot necesarul, în maxim 24 de ore.
          </p>

          <dl className="space-y-0 border-t border-border">
            <div className="flex justify-between items-start gap-6 py-5 border-b border-border">
              <dt className="font-display font-bold text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Adresă
              </dt>
              <dd className="text-right text-muted-foreground">
                DN73 517<br />507135 Moieciu de Jos<br />Romania
              </dd>
            </div>
            <div className="flex justify-between items-start gap-6 py-5 border-b border-border">
              <dt className="font-display font-bold text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Telefon
              </dt>
              <dd className="text-right">
                <a href="tel:+40751535368" className="text-accent font-semibold hover:underline text-lg">
                  0751 535 368
                </a>
              </dd>
            </div>
            <div className="flex justify-between items-start gap-6 py-5 border-b border-border">
              <dt className="font-display font-bold text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                Program
              </dt>
              <dd className="text-right text-muted-foreground">
                Lun – Vin: 08:00 – 17:00<br />
                Sâmbătă: 08:00 – 14:00<br />
                Duminică: Închis
              </dd>
            </div>
            <div className="flex justify-between items-center gap-6 py-5">
              <dt className="font-display font-bold text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </dt>
              <dd className="text-right">
                <a href="mailto:nitu_alin23@yahoo.com" className="text-muted-foreground hover:text-accent transition-smooth">
                  nitu_alin23@yahoo.com
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=DN73+517+507135+Moieciu+de+Jos+Romania"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant"
            >
              Deschide în Google Maps
            </a>
            <a
              href="tel:+40751535368"
              className="px-6 py-3 border border-foreground/20 text-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-foreground hover:text-background transition-smooth"
            >
              Sună acum
            </a>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-sm overflow-hidden shadow-elegant">
          <iframe
            title="Locația Mondygres SRL pe hartă"
            src="https://www.google.com/maps?q=DN73+517+507135+Moieciu+de+Jos+Romania&output=embed"
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
