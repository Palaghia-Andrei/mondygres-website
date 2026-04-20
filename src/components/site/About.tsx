const About = () => (
  <section id="despre" className="py-24 md:py-32 bg-background">
    <div className="container grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
          Despre Mondygres
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-foreground text-balance">
          Construim încredere, livrăm calitate.
        </h2>
      </div>
      <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Suntem o companie de construcții și un depozit de materiale cu rădăcini
          adânci în Moieciu de Jos. De peste un deceniu, ajutăm familii, pensiuni
          și antreprenori din zona Bran-Moieciu să își ridice case solide, durabile
          și frumoase.
        </p>
        <p className="text-foreground">
          Lucrăm cu cele mai cunoscute mărci de pe piață și păstrăm prețuri
          corecte, fără surprize. Tot ce găsești pe rafturi a fost verificat
          de oameni care construiesc, nu doar vând.
        </p>
        <div className="pt-4 grid grid-cols-2 gap-6 border-t border-border">
          <div className="pt-6">
            <div className="font-display font-bold text-2xl text-foreground">Materiale</div>
            <div className="text-sm text-muted-foreground mt-1">
              Stoc constant și comenzi speciale la cerere.
            </div>
          </div>
          <div className="pt-6">
            <div className="font-display font-bold text-2xl text-foreground">Consultanță</div>
            <div className="text-sm text-muted-foreground mt-1">
              Calculăm necesarul împreună cu tine.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
