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

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Project Examples
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real automation solutions I've built for businesses to streamline operations and boost efficiency
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10 hover:-translate-y-1 group"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-surface-elevated text-accent-cyan px-3 py-1 rounded-full text-sm border border-accent-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2 uppercase tracking-wide">
                  Results
                </h4>
                <p className="text-text-secondary italic">
                  {project.results}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Want to see more detailed case studies or discuss your specific automation needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-surface-elevated hover:bg-surface-hover text-text-primary px-6 py-3 rounded-lg transition-colors duration-200 border border-border hover:border-accent-cyan/50">
              View Case Studies
            </button>
            <button className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Schedule Demo Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;