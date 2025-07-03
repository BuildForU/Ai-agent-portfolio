import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const ScrollTransition = () => {
  return (
    <div className="bg-background">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              See AI Automation in Action
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that works 24/7
            </p>
          </div>
        }
      >
        <div className="h-full w-full bg-gradient-to-br from-surface-elevated to-card rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            {/* Demo Dashboard Preview */}
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-text-primary">AI Dashboard</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-surface-elevated p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent-cyan">24/7</div>
                  <div className="text-text-secondary text-sm">Active Automation</div>
                </div>
                <div className="bg-surface-elevated p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent-cyan">95%</div>
                  <div className="text-text-secondary text-sm">Time Saved</div>
                </div>
                <div className="bg-surface-elevated p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent-cyan">300+</div>
                  <div className="text-text-secondary text-sm">Tasks Automated</div>
                </div>
              </div>

              {/* Chat Interface Preview */}
              <div className="bg-surface-elevated rounded-lg p-4 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-text-primary font-semibold">AI Assistant</div>
                    <div className="text-text-muted text-xs">Online</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-background p-3 rounded-lg border border-border">
                    <div className="text-text-secondary text-sm">How can I help automate your business today?</div>
                  </div>
                  <div className="bg-accent-cyan/10 p-3 rounded-lg border border-accent-cyan/20 ml-8">
                    <div className="text-text-primary text-sm">Schedule a meeting with John for tomorrow</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg border border-border">
                    <div className="text-text-secondary text-sm">✅ Meeting scheduled for tomorrow at 2 PM. Calendar invite sent!</div>
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