
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { confusionMatrixData } from "@/lib/constants";

const ConfusionMatrix: React.FC = () => {
  const { truePositive, falsePositive, trueNegative, falseNegative } = confusionMatrixData;
  const total = truePositive + falsePositive + trueNegative + falseNegative;
  
  const accuracy = ((truePositive + trueNegative) / total) * 100;
  const precision = (truePositive / (truePositive + falsePositive)) * 100;
  const recall = (truePositive / (truePositive + falseNegative)) * 100;
  const f1Score = 2 * (precision * recall) / (precision + recall);

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>Model Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 max-w-xs mx-auto">
          <div className="flex items-center justify-center bg-medical-success/20 border border-medical-success rounded p-4 aspect-square">
            <div className="text-center">
              <div className="font-bold">{truePositive}</div>
              <div className="text-xs text-muted-foreground">True Positive</div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-medical-warning/20 border border-medical-warning rounded p-4 aspect-square">
            <div className="text-center">
              <div className="font-bold">{falsePositive}</div>
              <div className="text-xs text-muted-foreground">False Positive</div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-medical-warning/20 border border-medical-warning rounded p-4 aspect-square">
            <div className="text-center">
              <div className="font-bold">{falseNegative}</div>
              <div className="text-xs text-muted-foreground">False Negative</div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-medical-success/20 border border-medical-success rounded p-4 aspect-square">
            <div className="text-center">
              <div className="font-bold">{trueNegative}</div>
              <div className="text-xs text-muted-foreground">True Negative</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-secondary p-3">
            <div className="text-xs text-muted-foreground">Accuracy</div>
            <div className="text-lg font-bold">{accuracy.toFixed(1)}%</div>
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <div className="text-xs text-muted-foreground">Precision</div>
            <div className="text-lg font-bold">{precision.toFixed(1)}%</div>
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <div className="text-xs text-muted-foreground">Recall</div>
            <div className="text-lg font-bold">{recall.toFixed(1)}%</div>
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <div className="text-xs text-muted-foreground">F1 Score</div>
            <div className="text-lg font-bold">{f1Score.toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfusionMatrix;
