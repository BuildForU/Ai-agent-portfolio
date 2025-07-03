import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl mx-4 mt-4 shadow-lg shadow-accent-cyan/10' 
          : 'bg-background/80 backdrop-blur-md border-b border-border'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'py-2' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-text-primary">Likith</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="sm">
              Book Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-accent-cyan p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-section-bg border-t border-border">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-text-secondary hover:text-accent-cyan px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block text-text-secondary hover:text-accent-cyan px-3 py-2 text-base font-medium w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-text-secondary hover:text-accent-cyan px-3 py-2 text-base font-medium w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-text-secondary hover:text-accent-cyan px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-text-secondary hover:text-accent-cyan px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button variant="cta" size="sm" className="w-full">
                  Book Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;