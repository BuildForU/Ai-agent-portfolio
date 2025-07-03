const TechStack = () => {
  const technologies = [
    {
      category: "AI & Automation",
      tools: ["n8n", "LangChain", "OpenAI", "Gemini Pro"]
    },
    {
      category: "Database & Storage",
      tools: ["Ollama", "Pinecone", "PostgreSQL", "Airtable"]
    },
    {
      category: "Communication",
      tools: ["Twilio", "ElevenLabs", "Clerk"]
    },
    {
      category: "Deployment",
      tools: ["Vercel", "Netlify", "Railway"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Tools I Use
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Modern, reliable technologies to build scalable AI automation solutions
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10"
            >
              <h3 className="text-lg font-semibold text-accent-cyan mb-4">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.tools.map((tool, toolIndex) => (
                  <li
                    key={toolIndex}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;