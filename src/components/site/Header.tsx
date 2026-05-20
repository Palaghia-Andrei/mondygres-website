import { useEffect, useState } from "react";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#produse", label: "Produse" },
  { href: "#avantaje", label: "De ce noi" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <HeaderLogo />
          <span className={`font-display font-extrabold tracking-tight text-lg md:text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            MONDYGRES
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                scrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+40751535368"
            className="px-4 py-2 text-sm font-semibold gradient-accent text-accent-foreground rounded-sm hover:opacity-90 transition-smooth flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            0751 535 368
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-4 h-0.5 bg-current ml-auto" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-accent py-2 text-base font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

function HeaderLogo() {
  const [imgError, setImgError] = useState(false);

  return imgError ? (
    <span className="w-9 h-9 grid place-items-center gradient-accent text-accent-foreground font-display font-black text-lg rounded-sm">
      M
    </span>
  ) : (
    // load from public/favicon.png (place your uploaded logo there)
    <img
      src="/favicon.png"
      alt="Mondygres"
      className="w-9 h-9 rounded-sm object-cover"
      onError={() => setImgError(true)}
    />
  );
}
