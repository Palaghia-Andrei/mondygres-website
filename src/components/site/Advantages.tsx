const advantages = [
  {
    n: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    t: "Local, în Moieciu",
    d: "Suntem aproape de tine. Cunoaștem zona, drumurile și provocările construcțiilor de munte din Bran–Moieciu.",
  },
  {
    n: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    t: "Prețuri corecte",
    d: "Fără adaosuri ascunse. Îți facem o ofertă clară și transparentă pentru tot necesarul proiectului.",
  },
  {
    n: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    ),
    t: "Calitate garantată",
    d: "Lucrăm exclusiv cu producători verificați: Ceresit, Baumit, Romcim, Hirsch, Isover, Rigips.",
  },
  {
    n: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    ),
    t: "Consultanță reală",
    d: "Te ajutăm să calculezi necesarul exact, să alegi produsul potrivit și să eviți cheltuielile inutile.",
  },
];

const Advantages = () => (
  <section id="avantaje" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    {/* Decorative background pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
      backgroundSize: "20px 20px",
    }} />

    <div className="container relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-none mb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
            De ce Mondygres
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-balance">
            Patru motive simple să lucrezi cu noi.
          </h2>
        </div>
        <a
          href="tel:+40751535368"
          className="flex-shrink-0 px-6 py-3 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth"
        >
          0751 535 368
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
        {advantages.map((a) => (
          <div
            key={a.t}
            className="bg-primary p-8 md:p-10 hover:bg-primary-foreground/[0.05] transition-smooth group"
          >
            <div className="text-accent mb-5 group-hover:scale-110 transition-smooth origin-left">
              {a.icon}
            </div>
            <div className="font-display font-black text-accent/60 text-xs tracking-widest mb-3">
              /{a.n}
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{a.t}</h3>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">{a.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
