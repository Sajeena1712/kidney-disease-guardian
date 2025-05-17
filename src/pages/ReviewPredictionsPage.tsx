
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ClipboardList } from "lucide-react";

const ReviewPredictionsPage = () => {
  // This would typically come from a database or local storage
  const mockPredictions = [
    {
      id: 1,
      date: "2025-05-15",
      age: 65,
      bp: 150,
      sc: 1.8,
      hemo: 11.2,
      dm: "yes",
      htn: "yes",
      probability: 0.85,
      prediction: "ckd",
      confidence: "High"
    },
    {
      id: 2,
      date: "2025-05-10",
      age: 45,
      bp: 120,
      sc: 0.9,
      hemo: 14.5,
      dm: "no",
      htn: "no",
      probability: 0.2,
      prediction: "notckd",
      confidence: "High"
    },
    {
      id: 3,
      date: "2025-05-05",
      age: 58,
      bp: 145,
      sc: 1.2,
      hemo: 12.1,
      dm: "yes",
      htn: "no",
      probability: 0.58,
      prediction: "ckd",
      confidence: "Moderate"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Review Predictions</h1>
          <p className="text-muted-foreground">
            View and analyze your past kidney disease prediction results.
          </p>
        </div>

        {mockPredictions.length > 0 ? (
          <div className="grid gap-6">
            {mockPredictions.map((prediction) => (
              <Card key={prediction.id} className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span>Prediction #{prediction.id}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {prediction.date}
                      </span>
                    </CardTitle>
                    <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-1.5 ${
                      prediction.prediction === "ckd" 
                        ? "bg-red-100 text-red-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      <Activity className="h-4 w-4" />
                      {prediction.prediction === "ckd" ? "CKD Detected" : "No CKD Detected"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="font-medium mb-2">Patient Parameters</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span>{prediction.age} years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Blood Pressure:</span>
                          <span>{prediction.bp} mm/Hg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Serum Creatinine:</span>
                          <span>{prediction.sc} mg/dL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hemoglobin:</span>
                          <span>{prediction.hemo} g/dL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Diabetes:</span>
                          <span>{prediction.dm}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hypertension:</span>
                          <span>{prediction.htn}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Prediction Results</h3>
                      <div className="flex items-center justify-center h-32">
                        <div className="text-center">
                          <div className="mb-2">
                            <span className="text-3xl font-bold">
                              {Math.round(prediction.probability * 100)}%
                            </span>
                            <span className="text-sm text-muted-foreground ml-1">probability</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <span className="text-sm">Confidence:</span>
                            <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                              prediction.confidence === "High" 
                                ? "bg-green-100 text-green-700" 
                                : prediction.confidence === "Moderate"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                              {prediction.confidence}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ClipboardList className="h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">No predictions yet</h2>
              <p className="text-muted-foreground text-center">
                You haven't made any predictions yet. Go to the Predict page to get started.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default ReviewPredictionsPage;
