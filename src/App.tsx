import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
