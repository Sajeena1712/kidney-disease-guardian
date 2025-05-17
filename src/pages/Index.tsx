
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Activity, Database, Flask, Heart, FileCheck, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <HeroSection />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Advanced Prediction"
              description="Utilize the power of AdaBoost algorithm to get accurate predictions for chronic kidney disease risk assessment."
              icon={<Brain className="h-5 w-5" />}
            />
            <FeatureCard
              title="Clinical Parameters"
              description="Input multiple clinical parameters including blood tests, urine analysis, and patient history for comprehensive analysis."
              icon={<Database className="h-5 w-5" />}
            />
            <FeatureCard
              title="Visual Results"
              description="Get easy-to-understand visual representations of prediction results and feature importance."
              icon={<Activity className="h-5 w-5" />}
            />
          </div>
        </section>

        <section className="space-y-6 rounded-lg bg-medical-light-blue p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Why Early Detection Matters</h2>
              <p className="text-muted-foreground">
                Chronic Kidney Disease often develops slowly with few symptoms in early stages. 
                Early detection can significantly improve outcomes and help prevent kidney failure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-medical-teal mt-0.5" />
                  <span>Slows disease progression</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-5 w-5 text-medical-teal mt-0.5" />
                  <span>Reduces risk of complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Flask className="h-5 w-5 text-medical-teal mt-0.5" />
                  <span>Enables timely treatment interventions</span>
                </li>
              </ul>
              <Button asChild className="mt-2 bg-medical-teal hover:bg-medical-teal/90">
                <Link to="/predict">Start Prediction Now</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080" 
                alt="Medical professional with patient" 
                className="rounded-lg object-cover h-72 w-full shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
