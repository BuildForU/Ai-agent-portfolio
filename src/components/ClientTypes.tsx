const ClientTypes = () => {
  const clientTypes = [
    {
      type: "Healthcare professionals and coaches",
      description: "Automate bookings, reminders, and post-session follow-ups",
      icon: "🏥"
    },
    {
      type: "Ecommerce businesses", 
      description: "Order support, cart recovery flows, and customer assistance bots",
      icon: "🛒"
    },
    {
      type: "Agencies and startups",
      description: "Lead qualification, outreach automation, and internal support bots", 
      icon: "🚀"
    },
    {
      type: "Educators and trainers",
      description: "Automate student query handling and resource delivery",
      icon: "📚"
    },
    {
      type: "Freelancers and creators",
      description: "Build productivity-focused AI agents to save time",
      icon: "✨"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_0),linear-gradient(to_bottom,#80808012_1px,transparent_0)] [background-size:24px_24px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
            Who I 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {" "}Work With
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I help businesses across various industries implement AI automation solutions
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 dark:group-hover:from-purple-300 dark:group-hover:to-orange-200 transition-all duration-300">
                    {client.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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