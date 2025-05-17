
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PredictPage from "./pages/PredictPage";
import ModelInfoPage from "./pages/ModelInfoPage";
import AboutCKDPage from "./pages/AboutCKDPage";
import ReviewPredictionsPage from "./pages/ReviewPredictionsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/predict" element={<PredictPage />} />
          <Route path="/model" element={<ModelInfoPage />} />
          <Route path="/about" element={<AboutCKDPage />} />
          <Route path="/review" element={<ReviewPredictionsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
