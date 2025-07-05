import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Pricing", section: "pricing" },
  { label: "Contact", section: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto px-8 py-3 rounded-full shadow-xl backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-gray-800/50 flex gap-8 items-center transition-all duration-300 ${
          isScrolled ? "ring-2 ring-purple-300/30" : ""
        }`}
        style={{ maxWidth: "fit-content" }}
      >
        {navLinks.map((link) => (
          <button
            key={link.section}
            onClick={() => scrollToSection(link.section)}
            className="text-gray-900 dark:text-white font-medium px-4 py-1 rounded-full hover:bg-white/10 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-200 focus:outline-none"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;