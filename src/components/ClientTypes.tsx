const ClientTypes = () => {
  const clientTypes = [
    {
      type: "Healthcare professionals and coaches",
      description: "Automate bookings, reminders, and post-session follow-ups"
    },
    {
      type: "Ecommerce businesses",
      description: "Order support, cart recovery flows, and customer assistance bots"
    },
    {
      type: "Agencies and startups",
      description: "Lead qualification, outreach automation, and internal support bots"
    },
    {
      type: "Educators and trainers",
      description: "Automate student query handling and resource delivery"
    },
    {
      type: "Freelancers and creators",
      description: "Build productivity-focused AI agents to save time"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Who I Work With
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            I help businesses across various industries implement AI automation solutions
          </p>
        </div>

        {/* Client Types List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0">
                  <h3 className="text-lg font-semibold text-accent-cyan">
                    {client.type}
                  </h3>
                </div>
                <div className="hidden sm:block w-px h-8 bg-border mx-4"></div>
                <div className="flex-1">
                  <p className="text-text-secondary">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;