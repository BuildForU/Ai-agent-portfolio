import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const ScrollTransition = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] mb-6">
              See AI Automation in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                {" "}Action
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that works 24/7
            </p>
          </div>
        }
      >
        <div className="h-full w-full bg-gradient-to-br from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 rounded-2xl p-8 flex items-center justify-center border border-gray-200/50 dark:border-gray-800/50">
          <div className="text-center">
            {/* Demo Dashboard Preview */}
            <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Dashboard</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 p-4 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">24/7</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Active Automation</div>
                </div>
                <div className="bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 p-4 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">95%</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Time Saved</div>
                </div>
                <div className="bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 p-4 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">300+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Tasks Automated</div>
                </div>
              </div>

              {/* Chat Interface Preview */}
              <div className="bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">AI Assistant</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Online</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/60 dark:bg-gray-950/60 p-3 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                    <div className="text-gray-600 dark:text-gray-300 text-sm">How can I help automate your business today?</div>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 ml-8">
                    <div className="text-gray-900 dark:text-white text-sm">Schedule a meeting with John for tomorrow</div>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-950/60 p-3 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                    <div className="text-gray-600 dark:text-gray-300 text-sm">✅ Meeting scheduled for tomorrow at 2 PM. Calendar invite sent!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default ScrollTransition;