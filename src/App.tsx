import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { useDynamicColors } from "./hooks/useDynamicColors";

const queryClient = new QueryClient();

const DynamicColorProvider = ({ children }: { children: React.ReactNode }) => {
  useDynamicColors();
  return <>{children}</>;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DynamicColorProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/work" element={<Work />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DynamicColorProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
