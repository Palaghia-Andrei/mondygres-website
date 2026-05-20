import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const galleryImages = Object.entries(
  import.meta.glob("../../../image/[1-9].jpeg", { eager: true, import: "default" }),
)
  .concat(
    Object.entries(
      import.meta.glob("../../../image/1[0-8].jpeg", { eager: true, import: "default" }),
    ),
  )
  .sort(([firstPath], [secondPath]) => {
    const firstNumber = Number(firstPath.match(/(\d+)\.jpeg$/)?.[1] ?? 0);
    const secondNumber = Number(secondPath.match(/(\d+)\.jpeg$/)?.[1] ?? 0);
    return firstNumber - secondNumber;
  })
  .map(([, imageUrl]) => imageUrl as string);

const stats = [
  { value: "15+", label: "Ani de activitate" },
  { value: "500+", label: "Proiecte livrate" },
  { value: "7", label: "Branduri premium" },
  { value: "23", label: "Produse în stoc" },
];

const About = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(galleryImages[0] ?? null);

  return (
    <section id="despre" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
              Despre Mondygres
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-foreground text-balance">
              Construim încredere,<br />livrăm calitate.
            </h2>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-secondary p-5">
                  <div className="font-display font-black text-3xl text-accent">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Suntem o companie de construcții și un depozit de materiale cu rădăcini
              adânci în Moieciu de Jos. De peste un deceniu, ajutăm familii, pensiuni
              și antreprenori din zona Bran–Moieciu să își ridice case solide, durabile
              și frumoase.
            </p>
            <p className="text-foreground">
              Lucrăm cu cele mai cunoscute mărci de pe piață —{" "}
              <strong className="text-foreground font-semibold">Ceresit, Baumit, Romcim, Hirsch Porozell, Isover, Rigips</strong>{" "}
              — și păstrăm prețuri corecte, fără surprize. Tot ce găsești pe rafturi
              a fost verificat de oameni care construiesc, nu doar vând.
            </p>

            {/* Feature list */}
            <ul className="pt-4 border-t border-border space-y-4">
              {[
                { icon: "🏗️", t: "Stoc constant", d: "Materiale disponibile imediat, comenzi speciale la cerere." },
                { icon: "🚚", t: "Transport & livrare", d: "Livrăm în Moieciu de Jos și împrejurimi cu flota proprie." },
                { icon: "📐", t: "Consultanță gratuită", d: "Calculăm necesarul exact — eviți risipa și cumpărăturile inutile." },
              ].map((f) => (
                <li key={f.t} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-display font-bold text-foreground text-base">{f.t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-display font-bold text-accent text-sm uppercase tracking-wider hover:gap-3 transition-smooth"
              >
                Contactează-ne
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3">
                Galerie
              </p>
              <h3 className="font-display font-black text-2xl md:text-3xl text-foreground mb-4">
                Poze din magazin și livrări
              </h3>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="px-6 py-3 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant inline-flex items-center gap-2"
              >
                Deschide galeria
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-6xl max-h-[92vh] overflow-hidden border-border bg-background p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Galerie foto</DialogTitle>
            <DialogDescription>Galerie foto Mondygres.</DialogDescription>
          </DialogHeader>
          <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] gap-0">
            <div className="bg-black flex items-center justify-center p-3 md:p-4 min-h-[50vh] lg:min-h-[78vh]">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Imagine selectată din galerie"
                  className="max-h-[76vh] w-full object-contain"
                />
              ) : null}
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-border p-4 md:p-5 overflow-y-auto max-h-[42vh] lg:max-h-[92vh]">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-3">
                Selectează o poză
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {galleryImages.map((imageUrl, index) => (
                  <button
                    key={imageUrl}
                    type="button"
                    onClick={() => setSelectedImage(imageUrl)}
                    className={`group relative overflow-hidden rounded-sm border aspect-square transition-smooth focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
                      selectedImage === imageUrl ? "border-accent" : "border-border"
                    }`}
                    aria-label={`Afișează fotografia ${index + 1}`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Mondygres - fotografie ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;
