
import React from "react";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-medical-light-blue to-white border px-6 py-12 shadow-md">
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-medical-teal/10 px-3 py-1 text-sm text-medical-teal">
            Machine Learning Healthcare
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Chronic Kidney Disease Prediction
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Early detection can significantly improve treatment outcomes. Our advanced
            AdaBoost algorithm analyzes patient data to predict kidney disease risk with
            high accuracy.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild className="bg-medical-teal hover:bg-medical-teal/90">
              <Link to="/predict">
                <Activity className="mr-2 h-4 w-4" />
                Start Prediction
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/model">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-[300px] animate-pulse-gentle">
            <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/30 to-medical-highlight/30 rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-medical-teal/40 to-medical-highlight/40 rounded-full"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-medical-teal/50 to-medical-highlight/50 rounded-full"></div>
            <div className="absolute inset-12 bg-gradient-to-r from-medical-teal/60 to-medical-highlight/60 rounded-full"></div>
            <div className="absolute inset-16 bg-gradient-to-r from-medical-teal/70 to-medical-highlight/70 rounded-full"></div>
            <div className="absolute inset-20 bg-gradient-to-r from-medical-teal/80 to-medical-highlight/80 rounded-full flex items-center justify-center">
              <Activity className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
