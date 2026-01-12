import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { OrbieGameProvider } from "@/contexts/OrbieGameContext";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Secret from "./pages/Secret";
import NotFound from "./pages/NotFound";
import Mascot from "./components/Mascot";
import OrbieGameStatus from "./components/OrbieGameStatus";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <OrbieGameProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <OrbieGameStatus />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/work" element={<Work />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/secret" element={<Secret />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Mascot />
          </BrowserRouter>
        </TooltipProvider>
      </OrbieGameProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
