
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type PredictionResultProps = {
  result: {
    probability: number;
    prediction: string;
    confidence: string;
  } | null;
  onReset: () => void;
};

const PredictionResult: React.FC<PredictionResultProps> = ({ result, onReset }) => {
  if (!result) return null;

  const { probability, prediction, confidence } = result;

  const getStatusColor = () => {
    if (prediction === "ckd") {
      return "text-destructive";
    }
    return "text-medical-success";
  };

  const getProbabilityColor = () => {
    if (probability > 0.7) {
      return "bg-destructive";
    }
    if (probability > 0.4) {
      return "bg-medical-warning";
    }
    return "bg-medical-success";
  };

  const downloadReport = () => {
    const reportData = {
      prediction,
      probability: (probability * 100).toFixed(2) + "%",
      confidence,
      date: new Date().toLocaleString()
    };

    const reportText = `
    Kidney Disease Prediction Report
    ===============================
    Date: ${reportData.date}

    Prediction: ${prediction === "ckd" ? "Chronic Kidney Disease Detected" : "No Chronic Kidney Disease Detected"}
    Probability: ${reportData.probability}
    Confidence: ${reportData.confidence}

    Note: This prediction is based on the AdaBoost machine learning model and should be used for informational purposes only.
    Please consult with a healthcare professional for proper diagnosis and treatment.
    `;

    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kidney-prediction-report-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="bg-card shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Prediction Result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Risk Probability</span>
            <span className="text-sm font-bold">{(probability * 100).toFixed(2)}%</span>
          </div>
          <Progress value={probability * 100} className={cn("h-3", getProbabilityColor())} />
        </div>

        <div className="rounded-lg bg-secondary p-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Prediction:</span>
            <span className={cn("text-xl font-bold", getStatusColor())}>
              {prediction === "ckd" ? "CKD Detected" : "No CKD Detected"}
            </span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Confidence: {confidence}
          </div>
        </div>

        {prediction === "ckd" && (
          <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <div className="space-y-1">
              <p className="font-medium text-destructive">Medical attention recommended</p>
              <p className="text-sm text-muted-foreground">
                This prediction indicates a high risk of chronic kidney disease.
                Please consult with a nephrologist or healthcare provider for proper diagnosis.
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 rounded-lg border bg-secondary/50 p-3">
          <Info className="h-5 w-5 text-primary" />
          <div className="space-y-1">
            <p className="font-medium">Disclaimer</p>
            <p className="text-sm text-muted-foreground">
              This prediction is based on machine learning and should not replace
              professional medical advice. Always consult with a healthcare provider
              for diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="flex-1" onClick={onReset}>
            Reset Form
          </Button>
          <Button
            onClick={downloadReport}
            className="flex-1 bg-medical-teal hover:bg-medical-teal/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionResult;
