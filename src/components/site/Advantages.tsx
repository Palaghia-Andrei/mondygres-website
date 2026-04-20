const advantages = [
  {
    n: "/01",
    t: "Local, în Moieciu",
    d: "Suntem aproape de tine. Cunoaștem zona, drumurile și provocările construcțiilor de munte.",
  },
  {
    n: "/02",
    t: "Prețuri corecte",
    d: "Fără adaosuri ascunse. Cerere — ofertă clară — livrare. Atât.",
  },
  {
    n: "/03",
    t: "Calitate garantată",
    d: "Lucrăm doar cu producători verificați. Materiale conforme și documentate.",
  },
  {
    n: "/04",
    t: "Consultanță reală",
    d: "Te ajutăm să calculezi necesarul exact și să eviți cumpărăturile inutile.",
  },
];

const Advantages = () => (
  <section id="avantaje" className="py-24 md:py-32 bg-primary text-primary-foreground">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
          De ce Mondygres
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-balance">
          Patru motive simple să lucrezi cu noi.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
        {advantages.map((a) => (
          <div
            key={a.t}
            className="bg-primary p-8 md:p-10 hover:bg-primary-foreground/[0.04] transition-smooth"
          >
            <div className="font-display font-black text-accent text-sm tracking-widest mb-6">
              {a.n}
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">{a.t}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{a.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
