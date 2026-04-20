import bricks from "@/assets/mat-bricks.jpg";
import cement from "@/assets/mat-cement.jpg";
import timber from "@/assets/mat-timber.jpg";
import tiles from "@/assets/mat-tiles.jpg";

const items = [
  {
    img: bricks,
    n: "01",
    title: "Cărămidă & BCA",
    desc: "Cărămidă plină, cu goluri verticale și blocuri BCA pentru orice tip de zidărie.",
  },
  {
    img: cement,
    n: "02",
    title: "Ciment & mortare",
    desc: "Ciment Portland, var, ipsos, mortare gata preparate și adezivi pentru toate aplicațiile.",
  },
  {
    img: timber,
    n: "03",
    title: "Cherestea & lemn",
    desc: "Grinzi, dulapi, scânduri și șipci din rășinoase, uscate corespunzător pentru construcții.",
  },
  {
    img: tiles,
    n: "04",
    title: "Țiglă & învelitori",
    desc: "Țiglă ceramică, metalică și accesorii complete pentru acoperișuri durabile.",
  },
];

const Products = () => (
  <section id="produse" className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
            Ce găsești la noi
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-foreground text-balance">
            Tot ce ai nevoie, sub același acoperiș.
          </h2>
        </div>
        <p className="text-muted-foreground md:text-right md:max-w-sm">
          De la fundație la acoperiș — materiale verificate și sfaturi practice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="group bg-background overflow-hidden rounded-sm shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={it.img}
                alt={it.title}
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 text-primary-foreground/80 font-display font-bold text-xs tracking-widest">
                {it.n}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-foreground">{it.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
