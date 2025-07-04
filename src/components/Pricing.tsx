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
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
            Transparent & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {" "}Flexible Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the package that fits your automation needs. All packages include setup, testing, and documentation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? 'scale-105' : ''
              }`}
            >
              {/* Animated Border for Popular Package */}
              {pkg.popular && (
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-[-2px] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-2xl" />
                  <div className="absolute inset-0 bg-white dark:bg-gray-950 rounded-2xl" />
                </div>
              )}
              
              <div className={`relative bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${
                pkg.popular 
                  ? 'border-purple-500/20 shadow-lg shadow-purple-500/20' 
                  : 'border-black/5 dark:border-white/10 hover:border-purple-500/30'
              }`}>
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      / {pkg.usdPrice}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {pkg.popular ? (
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                      <button
                        onClick={scrollToContact}
                        className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all py-4 px-6"
                      >
                        Get Started
                      </button>
                    </div>
                  </span>
                ) : (
                  <button
                    onClick={scrollToContact}
                    className="w-full py-3 px-6 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gradient-to-tr hover:from-zinc-300/20 hover:via-purple-400/20 hover:to-transparent transition-all duration-300"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Note:</strong> Custom pricing available for larger systems. 
            Discounts offered to early-stage startups and non-profits.
          </p>
          <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
              <button
                onClick={scrollToContact}
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all py-4 px-8"
              >
                Get Custom Quote
              </button>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;