import { HeroSection } from "@/components/ui/hero-section";

const Hero = () => {
  const handleCtaClick = () => {
    window.open('https://cal.me/likith-yadav', '_blank');
  };

  return (
    <HeroSection
      className="pt-16 pb-0"
      title="AI Automation Developer"
      subtitle={{
        regular: "I Build AI-Powered ",
        gradient: "Automation Agents That Save You Time & Money"
      }}
      description="I specialize in building custom AI bots, automation workflows, and smart assistants using tools like n8n, LangChain, and LLMs — so businesses can scale operations without scaling workload."
      ctaText="Book a Free Automation Audit Call"
      onCtaClick={handleCtaClick}
      gridOptions={{
        angle: 65,
        cellSize: 60,
        opacity: 0.3,
        lightLineColor: "#6B7280",
        darkLineColor: "#374151"
      }}
    >
      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 dark:text-gray-400">
        {/* Star Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.351-.921 1.651 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118L10 13.579l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.64 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <span className="text-sm">5.0 Rating</span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

        {/* Clients Served */}
        <div className="text-sm">
          <span className="font-semibold text-purple-600 dark:text-purple-400">50+</span> automation projects delivered
        </div>

        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

        {/* Response Time */}
        <div className="text-sm">
          <span className="font-semibold text-purple-600 dark:text-purple-400">24hr</span> average response time
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;