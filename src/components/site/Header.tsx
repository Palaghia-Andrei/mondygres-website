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
          <span className="w-9 h-9 grid place-items-center gradient-accent text-accent-foreground font-display font-black text-lg rounded-sm">
            M
          </span>
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
            href="tel:"
            className="px-4 py-2 text-sm font-semibold gradient-accent text-accent-foreground rounded-sm hover:opacity-90 transition-smooth"
          >
            Sună acum
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
