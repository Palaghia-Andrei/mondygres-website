import heroImg from "@/assets/hero-yard.jpg";

// Prefer a hero image placed in the project's top-level `image/` folder named
// `hero-main.*` (jpg/png). If not present, fallback to the bundled asset above.
const _heroCandidates = Object.values(
  import.meta.glob("../../../image/hero-main.*", { eager: true, import: "default" }),
) as string[];
const heroBg = _heroCandidates[0] ?? heroImg;

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Depozit de materiale de construcții Mondygres în Moieciu de Jos, Carpați"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        style={{ objectPosition: "50% 67%" }}
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* Diagonal accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" />

      <div className="relative container min-h-screen flex flex-col justify-end pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-primary-foreground/80 text-xs uppercase tracking-[0.25em] font-semibold mb-6 animate-fade-in">
            <span className="w-8 h-px bg-accent" /><span>Moieciu de Jos · Județul Brașov</span>
          </p>
          <h1 className="font-display font-black text-primary-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-up">
            Materiale de construcții
            <span className="block text-accent">la poalele Bucegilor.</span>
          </h1>
          <p className="mt-8 text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up [animation-delay:120ms]">
            Mondygres SRL — depozit local de materiale de construcții în Moieciu de Jos.
            Ceresit, Baumit, Romcim, Hirsch, Isover, Rigips și multe altele, în stoc permanent.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:240ms]">
            <a
              href="#produse"
              className="px-7 py-4 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant"
            >
              Vezi catalogul
            </a>
            <a
              href="tel:+40751535368"
              className="px-7 py-4 border border-primary-foreground/40 text-primary-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-primary-foreground hover:text-primary transition-smooth flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              0751 535 368
            </a>
            <a
              href="https://wa.me/40751535368?text=Bun%C4%83%2C%20vreau%20s%C4%83%20cer%20o%20ofert%C4%83."
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 bg-[#25D366] text-white font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth flex items-center gap-2 shadow-elegant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.6 0 .36 5.22.36 11.66c0 2.05.54 4.05 1.57 5.8L0 24l6.71-1.86a11.7 11.7 0 0 0 5.33 1.35h.01c6.44 0 11.66-5.22 11.66-11.66 0-3.12-1.22-6.05-3.19-8.35Zm-8.48 18.01h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.2-3.98 1.1 1.06-3.88-.23-.4a9.7 9.7 0 0 1-1.49-5.17C2.1 6.35 6.3 2.16 11.45 2.16c2.5 0 4.85.97 6.62 2.75a9.3 9.3 0 0 1 2.73 6.65c0 5.15-4.2 9.93-9.76 9.93Zm5.67-7.54c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.3-.48-2.47-1.54-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.56.16-.19.21-.31.31-.52.1-.21.05-.4-.02-.56-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.31-1.1 1.07-1.1 2.6s1.13 3.02 1.29 3.24c.16.21 2.2 3.37 5.32 4.72.74.32 1.32.51 1.77.66.74.23 1.42.2 1.95.12.59-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 animate-fade-up [animation-delay:360ms]">
          {[
            { k: "15+", v: "Ani experiență" },
            { k: "23", v: "Produse în stoc" },
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
