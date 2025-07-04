const Projects = () => {
  const projects = [
    {
      title: "WhatsApp AI Assistant for a coaching business",
      description: "Built a custom AI bot that handles client inquiries, schedules consultations, and provides personalized coaching resources through WhatsApp integration.",
      tech: ["WhatsApp API", "OpenAI GPT-4", "n8n", "Google Calendar"],
      results: "Reduced response time by 90% and increased booking conversion by 45%",
      icon: "💬"
    },
    {
      title: "PDF-based RAG chatbot for internal documentation",
      description: "Developed an intelligent document search system that allows employees to query company policies, procedures, and knowledge base using natural language.",
      tech: ["LangChain", "Pinecone", "OpenAI Embeddings", "React"],
      results: "Improved information retrieval speed by 80% and reduced support tickets by 60%",
      icon: "📄"
    },
    {
      title: "n8n-powered weekly report automation",
      description: "Created an automated reporting system that aggregates data from multiple sources, generates insights, and distributes weekly reports to stakeholders.",
      tech: ["n8n", "Google Sheets", "Slack API", "Chart.js"],
      results: "Saved 15 hours per week of manual report generation",
      icon: "📊"
    },
    {
      title: "Voice AI agent for appointment scheduling",
      description: "Built an intelligent voice assistant that handles appointment bookings, reschedules, and customer inquiries through phone calls using advanced voice AI.",
      tech: ["Twilio", "ElevenLabs", "OpenAI", "Calendar APIs"],
      results: "Automated 85% of scheduling calls and improved customer satisfaction",
      icon: "🎤"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
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
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

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

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more detailed case studies or discuss your specific automation needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl hover:bg-white/90 dark:hover:bg-gray-900/90 text-gray-900 dark:text-white px-6 py-3 rounded-full transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-purple-500/30">
              View Case Studies
            </button>
            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                <button
                  onClick={scrollToContact}
                  className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all py-3 px-6"
                >
                  Schedule Demo Call
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;