import { useState } from "react";

const categories = [
  { id: "all", label: "Toate produsele" },
  { id: "ciment", label: "Ciment & Lianți" },
  { id: "tencuieli", label: "Tencuieli & Gleturi" },
  { id: "termoizolatie", label: "Termoizolații" },
  { id: "adezivi-termo", label: "Adezivi termoizolație" },
  { id: "adezivi-placi", label: "Adezivi plăci ceramice" },
  { id: "gips-carton", label: "Gips-carton" },
];

const brandColors: Record<string, string> = {
  Ceresit: "bg-blue-600 text-white",
  Baumit: "bg-green-700 text-white",
  Romcim: "bg-orange-600 text-white",
  Hirsch: "bg-red-600 text-white",
  Isover: "bg-yellow-500 text-gray-900",
  Rigips: "bg-sky-700 text-white",
  Multibat: "bg-stone-700 text-white",
};

const products = [
  // ── Ciment & Lianți ──────────────────────────────────────────────
  {
    id: "romcim-ultra",
    category: "ciment",
    brand: "Romcim",
    name: "Romcim Ultra 42.5R",
    desc: "Ciment ultrarezistent pentru fundații, stâlpi, centuri, plansee și trotuare. Foarte lucrabil.",
    specs: "40 kg · Rezistență 42,5R",
    img: "/products/romcim-ultra.jpeg",
  },
  {
    id: "multibat-liant",
    category: "ciment",
    brand: "Multibat",
    name: "Multibat Liant Aditivat",
    desc: "Liant aditivat pentru zidărie, tencuieli și șape. Aderență excelentă pe BCA, cărămidă și beton.",
    specs: "40 kg · Nu atacă armătura",
    img: "/products/multibat-liant.jpeg",
  },

  // ── Tencuieli & Gleturi ──────────────────────────────────────────
  {
    id: "ceresit-ct126",
    category: "tencuieli",
    brand: "Ceresit",
    name: "CT 126 Super Start",
    desc: "Glet alb pentru interior. Granulație 2–6 mm, formulă nouă cu polimeri și fibre. Aderență ridicată.",
    specs: "25 kg · Glet interior",
    img: "/products/ceresit-ct126.jpeg",
  },
  {
    id: "baumit-finobello",
    category: "tencuieli",
    brand: "Baumit",
    name: "FinoBello",
    desc: "Glet extrafin de ipsos pentru finisaj ultra-neted. Granulație 0–4 mm. Finisaj perfect alb.",
    specs: "20 kg · Glet extrafin ipsos",
    img: "/products/baumit-finobello.jpeg",
  },
  {
    id: "baumit-finogrande",
    category: "tencuieli",
    brand: "Baumit",
    name: "FinoGrande",
    desc: "Glet de ipsos de nivelare cu granulație 2–6 mm. Ideal pentru pregătirea straturilor de bază.",
    specs: "20 kg · Glet de nivelare",
    img: "/products/baumit-finogrande.jpeg",
  },
  {
    id: "baumit-perlawhite",
    category: "tencuieli",
    brand: "Baumit",
    name: "PerlaWhite",
    desc: "Tencuială albă fină pentru interior și exterior. Pereți respirabili, suprafață netedă și perfectă.",
    specs: "25 kg · Interior / Exterior",
    img: "/products/baumit-perlawhite.jpeg",
  },
  {
    id: "baumit-sockelputz",
    category: "tencuieli",
    brand: "Baumit",
    name: "SockelPutz",
    desc: "Tencuială hidrofobă pe bază de ciment. Ideală pentru socluri și fațade expuse la umiditate și îngheț.",
    specs: "25 kg · Hidrofob · 9–11 kg/mp",
    img: "/products/baumit-sockelputz.jpeg",
  },

  // ── Termoizolații ────────────────────────────────────────────────
  {
    id: "hirsch-xps",
    category: "termoizolatie",
    brand: "Hirsch",
    name: "Hirsch Porozell XPS",
    desc: "Plăci polistiren extrudat pentru termoizolații. Rezistente la apă, ideale pentru fundații, subsoluri și terase.",
    specs: "30 kg/m³ · 2–10 cm grosime",
    img: "/products/hirsch-xps.jpeg",
  },
  {
    id: "hirsch-eps80",
    category: "termoizolatie",
    brand: "Hirsch",
    name: "Hirsch Porozell EPS 80",
    desc: "Plăci polistiren expandat de izolație rigidă. Ideal pentru fațade, acoperișuri și pardoseli.",
    specs: "EPS 80 · 2–10 cm grosime",
    img: "/products/hirsch-eps80.jpeg",
  },
  {
    id: "isover-plemax",
    category: "termoizolatie",
    brand: "Isover",
    name: "Isover PLE MAX λ37",
    desc: "Vată minerală profesională Saint-Gobain. Izolează termic și fonic, rezistentă la foc și apă.",
    specs: "λ 0,037 W/mK · 10 cm · 3,6 mp/bax",
    img: "/products/isover-plemax.jpeg",
  },

  // ── Adezivi termoizolație ────────────────────────────────────────
  {
    id: "ceresit-thermo",
    category: "adezivi-termo",
    brand: "Ceresit",
    name: "Thermo Universal",
    desc: "Mortar-adeziv universal pentru lipirea și armarea polistirenului și vatei minerale. Formula cu microfibre.",
    specs: "25 kg · Fațade & termosisteme",
    img: "/products/ceresit-thermo-universal.jpeg",
  },
  {
    id: "baumit-procontact",
    category: "adezivi-termo",
    brand: "Baumit",
    name: "ProContact",
    desc: "Adeziv și masă de spaclu pentru polistiren și vată minerală. Rezistență la apă și îngheț-dezgheț.",
    specs: "25 kg · ~3,5–8 kg/m²",
    img: "/products/baumit-procontact.jpeg",
  },
  {
    id: "baumit-duocontact",
    category: "adezivi-termo",
    brand: "Baumit",
    name: "DuoContact",
    desc: "Adeziv și masă de spaclu pentru termosisteme. Lucrabilitate excelentă, pentru interior și exterior.",
    specs: "25 kg · ~3,5–8 kg/m²",
    img: "/products/baumit-duocontact.jpeg",
  },

  // ── Adezivi plăci ceramice ───────────────────────────────────────
  {
    id: "baumit-basic",
    category: "adezivi-placi",
    brand: "Baumit",
    name: "Baumacol Basic",
    desc: "Adeziv pe bază de ciment pentru faianță și gresie. Interior/exterior, rezistent la alunecare C1T.",
    specs: "25 kg · ~2–4 kg/mp",
    img: "/products/baumit-baumacol-basic.jpeg",
  },
  {
    id: "baumit-flextop",
    category: "adezivi-placi",
    brand: "Baumit",
    name: "Baumacol FlexTop",
    desc: "Adeziv flexibil armat cu fibre pentru plăci mari și foarte mari. Fixare rapidă, C2TE S1.",
    specs: "25 kg · Plăci mari · C2TE S1",
    img: "/products/baumit-baumacol-flextop.jpeg",
  },
  {
    id: "baumit-flexmarmor",
    category: "adezivi-placi",
    brand: "Baumit",
    name: "Baumacol FlexMarmor",
    desc: "Mortar adeziv flexibil alb (C2T S1) pentru plăci ceramice, gresie și piatră, inclusiv pardoseală caldă.",
    specs: "25 kg · Alb · C2T S1",
    img: "/products/baumit-baumacol-flexmarmor.jpeg",
  },
  {
    id: "baumit-flexuni",
    category: "adezivi-placi",
    brand: "Baumit",
    name: "Baumacol FlexUni",
    desc: "Adeziv flexibil S1 pentru plăci ceramice, gresie și piatră. Ideal pentru încălzire în pardoseală.",
    specs: "25 kg · C2T S1 · ~6–12 mp/sac",
    img: "/products/baumit-baumacol-flexuni.jpeg",
  },
  {
    id: "ceresit-cm9",
    category: "adezivi-placi",
    brand: "Ceresit",
    name: "CM 9 Standard",
    desc: "Adeziv standard pe bază de ciment pentru faianță și gresie. Aplicare interior, aderență standard.",
    specs: "25 kg · C1T · ~3–6 mp/sac",
    img: "/products/ceresit-cm9.jpeg",
  },
  {
    id: "ceresit-cm11",
    category: "adezivi-placi",
    brand: "Ceresit",
    name: "CM 11 Plus",
    desc: "Adeziv Ceramic & Gres cu Power Polymers. Aderență foarte bună pentru plăci mari și gresie porțelanată.",
    specs: "25 kg · C1T · ~6–7 mp/sac",
    img: "/products/ceresit-cm11.jpeg",
  },
  {
    id: "ceresit-cm12",
    category: "adezivi-placi",
    brand: "Ceresit",
    name: "CM 12 Flex",
    desc: "Adeziv flexibil C2T pentru gresie, faianță și plăci mari sau porțelanate. Recomandat pentru pardoseală caldă.",
    specs: "25 kg · C2T · ~5–8 mp/sac",
    img: "/products/ceresit-cm12.jpeg",
  },
  {
    id: "ceresit-cm17",
    category: "adezivi-placi",
    brand: "Ceresit",
    name: "CM 17 Gel Adhesive",
    desc: "Gel adeziv super flexibil S1 cu Fibre Force. Pentru plăci de dimensiuni mari. Rezistent la apă, îngheț, vibrații.",
    specs: "25 kg · S1 Super Flexibil · ~3–8 mp/sac",
    img: "/products/ceresit-cm17.jpeg",
  },

  // ── Gips-carton ──────────────────────────────────────────────────
  {
    id: "rigips-rifix",
    category: "gips-carton",
    brand: "Rigips",
    name: "RIFIX",
    desc: "Adeziv pe bază de ipsos pentru lipirea plăcilor de gips-carton pe zidărie, beton sau EPS. Uscare rapidă.",
    specs: "25 kg · Timp lucru max. 15 min",
    img: "/products/rigips-rifix.jpeg",
  },
  {
    id: "rigips-super",
    category: "gips-carton",
    brand: "Rigips",
    name: "Rigips SUPER",
    desc: "Chit de ipsos pentru umplerea și finisarea rosturilor plăcilor de gips-carton. ~60 mp acoperire.",
    specs: "25 kg · Timp uscare ~24 h",
    img: "/products/rigips-super.jpeg",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visible =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produse" className="py-24 md:py-32 bg-secondary">
      <div className="container">

        {/* ── Section header ──────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-4">
              Catalogul nostru
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-foreground text-balance">
              Produse de calitate,<br />branduri verificate.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-right md:max-w-sm">
            {products.length} produse disponibile în stoc — de la ciment la finisaje.
          </p>
        </div>

        {/* ── Brand strip ─────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["Ceresit", "Baumit", "Romcim", "Hirsch", "Isover", "Rigips", "Multibat"].map((b) => (
            <span
              key={b}
              className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest ${brandColors[b]}`}
            >
              {b}
            </span>
          ))}
        </div>

        {/* ── Category tabs ───────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-sm transition-smooth whitespace-nowrap
                ${
                  activeCategory === cat.id
                    ? "gradient-accent text-accent-foreground shadow-card"
                    : "bg-background text-muted-foreground border border-border hover:border-accent hover:text-accent"
                }`}
            >
              {cat.label}
              {cat.id !== "all" && (
                <span className="ml-2 opacity-60 font-normal">
                  {products.filter((p) => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Product grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((product) => (
            <article
              key={product.id}
              className="group bg-background overflow-hidden rounded-sm shadow-card hover:shadow-elegant transition-smooth border border-border/50 hover:border-accent/30 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                {/* Brand badge */}
                <span
                  className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm ${brandColors[product.brand] ?? "bg-primary text-primary-foreground"}`}
                >
                  {product.brand}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base text-foreground leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {product.desc}
                </p>
                {/* Specs pill */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-sm">
                    <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                    {product.specs}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary rounded-sm p-8 md:p-10 shadow-elegant">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-2">
              Nu găsești ce cauți?
            </p>
            <h3 className="font-display font-bold text-2xl text-primary-foreground">
              Contactează-ne — comandăm pentru tine.
            </h3>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-7 py-4 gradient-accent text-accent-foreground font-display font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 transition-smooth shadow-elegant"
          >
            Cere o ofertă
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
