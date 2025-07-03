const Services = () => {
  const services = [
    {
      title: "AI Assistant Bots",
      description: "Custom chatbots that handle bookings, support queries, and knowledge-based questions, trained on your business data.",
    },
    {
      title: "n8n Workflow Automation",
      description: "End-to-end workflows to automate repetitive tasks like emails, CRM updates, form handling, and more.",
    },
    {
      title: "LangChain RAG Agents",
      description: "Intelligent bots that search and answer questions from your internal documents (PDFs, Notion, Drive).",
    },
    {
      title: "Voice AI Agents",
      description: "AI voice assistants using Twilio and ElevenLabs for smart call-based interactions.",
    },
    {
      title: "Lead Generation & CRM Sync",
      description: "AI-based data scrapers that qualify leads and update CRMs automatically.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            What I Can Build For You
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Custom AI solutions designed to eliminate repetitive work and boost your business efficiency
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;