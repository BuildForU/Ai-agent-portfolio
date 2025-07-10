const Services = () => {
  const services = [
    {
      title: "AI Assistant Bots",
      description: "Custom chatbots that handle bookings, support queries, and knowledge-based questions, trained on your business data."
    },
    {
      title: "n8n Workflow Automation",
      description: "End-to-end workflows to automate repetitive tasks like emails, CRM updates, form handling, and more."
    },
    {
      title: "LangChain RAG Agents",
      description: "Intelligent bots that search and answer questions from your internal documents (PDFs, Notion, Drive)."
    },
    {
      title: "Voice AI Agents",
      description: "AI voice assistants using Twilio and ElevenLabs for smart call-based interactions."
    },
    {
      title: "Lead Generation & CRM Sync",
      description: "AI-based data scrapers that qualify leads and update CRMs automatically."
    },
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
            What I Can 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {" "}Build For You
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Custom AI solutions designed to eliminate repetitive work and boost your business efficiency
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon */}
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 dark:group-hover:from-purple-300 dark:group-hover:to-orange-200 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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