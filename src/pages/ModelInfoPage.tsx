
import React from "react";
import Layout from "@/components/Layout";
import FeatureImportanceChart from "@/components/FeatureImportanceChart";
import ConfusionMatrix from "@/components/ConfusionMatrix";
import ROCCurve from "@/components/ROCCurve";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModelInfoPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Model Information</h1>
          <p className="text-muted-foreground">
            Learn about the AdaBoost model used for chronic kidney disease prediction,
            its performance metrics, and feature importance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-sm md:col-span-2">
            <CardHeader>
              <CardTitle>About the AdaBoost Algorithm</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AdaBoost (Adaptive Boosting) is a powerful ensemble machine learning algorithm
                that combines multiple weak learners to create a strong classifier. It works by
                training models sequentially, with each new model focusing on the examples that
                previous models misclassified.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-medical-light-blue p-4">
                  <h3 className="font-semibold mb-2">Key Advantages</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>High accuracy for classification tasks</li>
                    <li>Reduces bias and variance in the learning process</li>
                    <li>Less prone to overfitting than many other algorithms</li>
                    <li>Works well with various types of data</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-medical-light-blue p-4">
                  <h3 className="font-semibold mb-2">Implementation Details</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Base estimator: Decision stumps (one-level decision trees)</li>
                    <li>Number of estimators: 100</li>
                    <li>Learning rate: 0.1</li>
                    <li>Algorithm: SAMME.R (real-valued prediction)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <FeatureImportanceChart />
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Model Training Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Data Preprocessing</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Missing values imputed using KNN imputation</li>
                  <li>Categorical features encoded using one-hot encoding</li>
                  <li>Numerical features standardized (mean=0, std=1)</li>
                  <li>80/20 train-test split with stratification</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Hyperparameter Tuning</h3>
                <p className="text-sm">
                  Grid search with 5-fold cross-validation was used to find optimal 
                  hyperparameters, maximizing F1-score to balance precision and recall.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Training Time</h3>
                <p className="text-sm">
                  The model was trained on 400 patient records. Training time: 12.3 seconds.
                </p>
              </div>
            </CardContent>
          </Card>

          <ConfusionMatrix />

          <ROCCurve />
        </div>
      </div>
    </Layout>
  );
};

export default ModelInfoPage;
