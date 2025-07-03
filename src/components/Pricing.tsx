import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Starter Bot",
      price: "₹3,999",
      usdPrice: "$49",
      features: [
        "1 AI assistant (text-only)",
        "Basic support (FAQ, booking)",
        "WhatsApp or website integration",
        "Delivery: 2 days"
      ],
      popular: false
    },
    {
      name: "Pro Automation Bundle",
      price: "₹9,999",
      usdPrice: "$119",
      features: [
        "End-to-end n8n workflow",
        "Integrate 1–2 tools (Sheets, CRM, Email, etc.)",
        "AI content/action logic",
        "Alerts and sync",
        "Includes setup and testing"
      ],
      popular: true
    },
    {
      name: "Advanced AI Agent",
      price: "₹19,999",
      usdPrice: "$239",
      features: [
        "LangChain RAG chatbot trained on docs",
        "Voice AI (Twilio + ElevenLabs)",
        "CRM and tool integration",
        "Uses GPT-4 or Gemini",
        "Delivery: 7 days",
        "30-day support included"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Transparent & Flexible Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose the package that fits your automation needs. All packages include setup, testing, and documentation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card p-8 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.popular 
                  ? 'border-accent-cyan shadow-lg shadow-accent-cyan/20 scale-105' 
                  : 'border-border hover:border-accent-cyan/50 hover:shadow-accent-cyan/10'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-cyan text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-accent-cyan">
                    {pkg.price}
                  </span>
                  <span className="text-text-secondary ml-2">
                    / {pkg.usdPrice}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-accent-cyan mt-0.5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={pkg.popular ? "hero" : "outline-light"}
                className="w-full"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-text-muted mb-4">
            <strong>Note:</strong> Custom pricing available for larger systems. 
            Discounts offered to early-stage startups and non-profits.
          </p>
          <Button variant="cta" onClick={scrollToContact}>
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;