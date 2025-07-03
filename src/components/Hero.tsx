import { Button } from "@/components/ui/button";
import { LavaLamp } from "@/components/ui/fluid-blob";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end pt-16 flex items-center">
      {/* Fluid Blob Background */}
      <div className="absolute inset-0 opacity-10">
        <LavaLamp />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight animate-fade-in">
            I Build AI-Powered
            <br />
            <span className="text-accent-cyan">Automation Agents</span>
            <br />
            That Save You Time & Money
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            I specialize in building custom AI bots, automation workflows, and smart assistants using tools like n8n, LangChain, and LLMs — so businesses can scale operations without scaling workload.
          </p>

          {/* CTA Button */}
          <div className="animate-scale-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={scrollToContact}
            >
              Book a Free Automation Audit Call
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-text-muted">
              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent-cyan fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.351-.921 1.651 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118L10 13.579l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.64 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">5.0 Rating</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-border"></div>

              {/* Clients Served */}
              <div className="text-sm">
                <span className="font-semibold text-accent-cyan">50+</span> automation projects delivered
              </div>

              <div className="hidden sm:block w-px h-6 bg-border"></div>

              {/* Response Time */}
              <div className="text-sm">
                <span className="font-semibold text-accent-cyan">24hr</span> average response time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;