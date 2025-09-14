const About = () => {
  return (
    <section id="about" className="relative py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_0),linear-gradient(to_bottom,#80808012_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                Me
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <span className="text-purple-600 dark:text-purple-400 font-semibold">Likith Yadav</span> — an AI/ML engineer and full-stack developer based in India. I specialize in building automation systems, custom AI agents, and scalable tools for business workflows.
              </p>
              <p>
                I've helped startups, creators, and technical teams implement real automation without bloated solutions. If you're spending time on repetitive work, I'll help you eliminate it with a fast, cost-efficient AI system.
              </p>

              <div className="bg-white/60 shadow-md text-gray-900 border border-gray-200 p-6 rounded-2xl backdrop-blur">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Approach</h3>
                <ul className="space-y-3">
                  {[
                    "Focus on real business impact, not just tech complexity",
                    "Rapid prototyping and iterative development",
                    "Clear communication and transparent pricing",
                    "Long-term support and scalable solutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* (Optional) second column, e.g., profile card */}
          {/* <div> ... </div> */}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "24h", label: "Avg Response Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
