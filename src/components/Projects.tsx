const Projects = () => {
  const projects = [
    {
      title: "WhatsApp AI Assistant for a coaching business",
      description: "Built a custom AI bot that handles client inquiries, schedules consultations, and provides personalized coaching resources through WhatsApp integration.",
      tech: ["WhatsApp API", "OpenAI GPT-4", "n8n", "Google Calendar"],
      results: "Reduced response time by 90% and increased booking conversion by 45%"
    },
    {
      title: "PDF-based RAG chatbot for internal documentation",
      description: "Developed an intelligent document search system that allows employees to query company policies, procedures, and knowledge base using natural language.",
      tech: ["LangChain", "Pinecone", "OpenAI Embeddings", "React"],
      results: "Improved information retrieval speed by 80% and reduced support tickets by 60%"
    },
    {
      title: "n8n-powered weekly report automation",
      description: "Created an automated reporting system that aggregates data from multiple sources, generates insights, and distributes weekly reports to stakeholders.",
      tech: ["n8n", "Google Sheets", "Slack API", "Chart.js"],
      results: "Saved 15 hours per week of manual report generation"
    },
    {
      title: "Voice AI agent for appointment scheduling",
      description: "Built an intelligent voice assistant that handles appointment bookings, reschedules, and customer inquiries through phone calls using advanced voice AI.",
      tech: ["Twilio", "ElevenLabs", "OpenAI", "Calendar APIs"],
      results: "Automated 85% of scheduling calls and improved customer satisfaction"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
            Project 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {" "}Examples
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real automation solutions I've built for businesses to streamline operations and boost efficiency
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon */}
              

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 dark:group-hover:from-purple-300 dark:group-hover:to-orange-200 transition-all duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-600/10 to-pink-500/10 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
                  Results
                </h4>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {project.results}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;