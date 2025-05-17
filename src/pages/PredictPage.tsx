
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PatientDataForm from "@/components/PatientDataForm";
import PredictionResult from "@/components/PredictionResult";

const PredictPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<{
    probability: number;
    prediction: string;
    confidence: string;
  } | null>(null);

  const handleSubmit = (data: any) => {
    setIsLoading(true);
    
    // Simulate API call to ML model
    setTimeout(() => {
      // This is simulated prediction logic
      // In a real app, this would call an actual ML model API
      const mockPredictionScore = calculateMockPrediction(data);
      
      setPredictionResult({
        probability: mockPredictionScore,
        prediction: mockPredictionScore > 0.5 ? "ckd" : "notckd",
        confidence: getConfidenceLabel(mockPredictionScore),
      });
      
      setIsLoading(false);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById("results-section")?.scrollIntoView({ 
          behavior: "smooth" 
        });
      }, 100);
    }, 2000);
  };

  const calculateMockPrediction = (data: any): number => {
    // This is a simplified mock implementation
    // Real implementation would use a trained model
    
    // Risk factors - these would normally be determined by the model
    const riskFactors = [
      { field: 'age', threshold: 60, weight: 0.05 },
      { field: 'bp', threshold: 140, weight: 0.07 },
      { field: 'sg', value: '1.005', weight: 0.08 },
      { field: 'al', value: '4', weight: 0.09 },
      { field: 'su', value: '3', weight: 0.06 },
      { field: 'rbc', value: 'abnormal', weight: 0.08 },
      { field: 'pc', value: 'abnormal', weight: 0.07 },
      { field: 'pcc', value: 'present', weight: 0.08 },
      { field: 'sc', threshold: 1.3, weight: 0.1 },
      { field: 'pot', threshold: 5.5, weight: 0.06 },
      { field: 'hemo', threshold: 12, isLower: true, weight: 0.09 },
      { field: 'htn', value: 'yes', weight: 0.07 },
      { field: 'dm', value: 'yes', weight: 0.05 },
      { field: 'appet', value: 'poor', weight: 0.05 }
    ];
    
    let riskScore = 0.2; // Base risk
    
    riskFactors.forEach(factor => {
      const value = data[factor.field];
      
      if (factor.threshold !== undefined) {
        if (factor.isLower) {
          // For factors where lower values indicate risk
          if (Number(value) < factor.threshold) {
            riskScore += factor.weight;
          }
        } else {
          // For factors where higher values indicate risk
          if (Number(value) > factor.threshold) {
            riskScore += factor.weight;
          }
        }
      } else if (factor.value !== undefined) {
        // For categorical factors
        if (value === factor.value) {
          riskScore += factor.weight;
        }
      }
    });
    
    // Ensure the score is between 0 and 1
    return Math.min(Math.max(riskScore, 0), 1);
  };

  const getConfidenceLabel = (probability: number): string => {
    const distance = Math.abs(probability - 0.5);
    if (distance < 0.1) return "Low";
    if (distance < 0.25) return "Moderate";
    return "High";
  };

  const handleReset = () => {
    setPredictionResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Kidney Disease Prediction</h1>
          <p className="text-muted-foreground">
            Fill in the patient's clinical parameters below to predict the probability of chronic kidney disease.
            All fields are required for accurate prediction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:col-span-2">
            <PatientDataForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
          
          {predictionResult && (
            <div id="results-section" className="md:col-span-2 scroll-mt-20">
              <PredictionResult result={predictionResult} onReset={handleReset} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PredictPage;
