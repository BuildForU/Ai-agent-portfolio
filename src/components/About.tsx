const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I'm <span className="text-accent-cyan font-semibold">Likith</span> — an AI/ML engineer and full-stack developer based in India. I specialize in building automation systems, custom AI agents, and scalable tools for business workflows.
              </p>
              
              <p>
                I've helped startups, creators, and technical teams implement real automation without bloated solutions. If you're spending time on repetitive work, I'll help you eliminate it with a fast, cost-efficient AI system.
              </p>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-text-primary mb-4">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-accent-cyan mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Focus on real business impact, not just tech complexity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-accent-cyan mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Rapid prototyping and iterative development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-accent-cyan mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Clear communication and transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-accent-cyan mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Long-term support and scalable solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-surface-elevated rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-muted text-sm">
                  Professional<br />Portrait Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-cyan mb-2">3+</div>
            <div className="text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-cyan mb-2">50+</div>
            <div className="text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-cyan mb-2">95%</div>
            <div className="text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-cyan mb-2">24h</div>
            <div className="text-text-secondary">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;