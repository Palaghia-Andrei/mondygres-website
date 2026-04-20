import heroImg from "@/assets/hero-yard.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Depozit de materiale de construcții Mondygres în Moieciu de Jos, Carpați"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative container min-h-screen flex flex-col justify-end pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-primary-foreground/80 text-xs uppercase tracking-[0.25em] font-semibold mb-6 animate-fade-in">
            <span className="w-8 h-px bg-accent" />
            Moieciu de Jos · Județul Brașov
          </p>
          <h1 className="font-display font-black text-primary-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-up">
            Materiale de construcții
            <span className="block text-accent">la poalele Bucegilor.</span>
          </h1>
          <p className="mt-8 text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up [animation-delay:120ms]">
            Mondygres SRL — partenerul tău local pentru cărămidă, ciment, lemn,
            țiglă și tot ce ai nevoie ca să construiești solid, în zona Moieciu — Bran.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:240ms]">
            <a
              href="#produse"
              className="px-7 py-4 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant"
            >
              Vezi produsele
            </a>
            <a
              href="#contact"
              className="px-7 py-4 border border-primary-foreground/40 text-primary-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              Cere o ofertă
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 animate-fade-up [animation-delay:360ms]">
          {[
            { k: "15+", v: "Ani experiență" },
            { k: "500+", v: "Proiecte livrate" },
            { k: "100%", v: "Local, în Moieciu" },
            { k: "24h", v: "Răspuns la cerere" },
          ].map((s) => (
            <div key={s.v} className="bg-primary/80 backdrop-blur-sm p-5 md:p-6">
              <div className="font-display font-black text-3xl md:text-4xl text-accent">{s.k}</div>
              <div className="text-primary-foreground/70 text-xs uppercase tracking-wider mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
