import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Products from "@/components/site/Products";
import Advantages from "@/components/site/Advantages";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Mondygres SRL — Materiale de construcții în Moieciu de Jos";
    const desc =
      "Mondygres SRL: depozit de materiale de construcții în Moieciu de Jos, Brașov. Cărămidă, ciment, cherestea, țiglă și consultanță locală.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HardwareStore",
            name: "Mondygres SRL",
            description:
              "Depozit de materiale de construcții în Moieciu de Jos, Brașov.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "DN73 517",
              addressLocality: "Moieciu de Jos",
              postalCode: "507135",
              addressCountry: "RO",
            },
            areaServed: "Moieciu, Bran, Brașov",
          }),
        }}
      />
    </div>
  );
};

export default Index;
