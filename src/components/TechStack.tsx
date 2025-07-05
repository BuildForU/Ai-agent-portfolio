import { FaRobot, FaDatabase, FaComments, FaRocket } from "react-icons/fa";

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Automation",
      tools: ["n8n", "LangChain", "OpenAI", "Gemini Pro"],
      icon: <FaRobot />
    },
    {
      category: "Database & Storage",
      tools: ["Ollama", "Pinecone", "PostgreSQL", "Airtable"],
      icon: <FaDatabase />
    },
    {
      category: "Communication",
      tools: ["Twilio", "ElevenLabs", "Clerk"],
      icon: <FaComments />
    },
    {
      category: "Deployment",
      tools: ["Vercel", "Netlify", "Railway"],
      icon: <FaRocket />
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808025_1px,transparent_0),linear-gradient(to_bottom,#80808025_1px,transparent_0)] [background-size:48px_48px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
            Tools I 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {" "}Use
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern, reliable technologies to build scalable AI automation solutions
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/60 shadow-md text-gray-900 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 backdrop-blur"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              
              {/* Category */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 dark:group-hover:from-purple-300 dark:group-hover:to-orange-200 transition-all duration-300">
                {tech.category}
              </h3>
              
              {/* Tools */}
              <ul className="space-y-2">
                {tech.tools.map((tool, toolIndex) => (
                  <li
                    key={toolIndex}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    • {tool}
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