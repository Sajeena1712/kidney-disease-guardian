
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle, Heart, Pill } from "lucide-react";
import { ckdInfo } from "@/lib/constants";

const AboutCKDPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">About Chronic Kidney Disease</h1>
          <p className="text-muted-foreground">
            Educational information about chronic kidney disease, its causes, symptoms, 
            risk factors, and prevention strategies.
          </p>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>What is Chronic Kidney Disease?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-5">
              <div className="md:col-span-3 space-y-4">
                <p>{ckdInfo.definition}</p>
                
                <div className="rounded-lg bg-medical-light-blue p-4">
                  <h3 className="font-semibold mb-2">Key Facts About CKD</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                      <span>Around 10% of the global population is affected by CKD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                      <span>Many people don't know they have kidney disease until it's advanced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                      <span>It's the 10th leading cause of death worldwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                      <span>Early detection and treatment can significantly slow its progression</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=2669" 
                  alt="Kidney anatomy" 
                  className="rounded-lg object-cover w-full h-64 shadow-md"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  The kidneys filter waste and excess fluid from the blood to produce urine.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-sm">
            <CardHeader className="bg-medical-teal/10 border-b">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-medical-teal" />
                <CardTitle>Causes and Risk Factors</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {ckdInfo.causes.map((cause, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="bg-medical-warning/10 border-b">
              <div className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-medical-warning" />
                <CardTitle>Common Symptoms</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="h-[400px] overflow-y-auto pt-4">
              <ul className="space-y-3">
                {ckdInfo.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Pill className="h-5 w-5 text-medical-warning mt-0.5 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="bg-medical-success/10 border-b">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-medical-success" />
                <CardTitle>Prevention Strategies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {ckdInfo.prevention.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>CKD Stages and Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stages">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stages">Stages of CKD</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stages" className="mt-4 space-y-4">
                <p>
                  CKD is classified into five stages based on the estimated glomerular 
                  filtration rate (eGFR), which measures how well the kidneys filter blood.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border px-4 py-2 text-left">Stage</th>
                        <th className="border px-4 py-2 text-left">eGFR (mL/min/1.73m²)</th>
                        <th className="border px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Stage 1</td>
                        <td className="border px-4 py-2">≥ 90</td>
                        <td className="border px-4 py-2">Normal kidney function but with signs of kidney damage</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Stage 2</td>
                        <td className="border px-4 py-2">60-89</td>
                        <td className="border px-4 py-2">Mild decline in kidney function</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Stage 3a</td>
                        <td className="border px-4 py-2">45-59</td>
                        <td className="border px-4 py-2">Mild to moderate decline</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Stage 3b</td>
                        <td className="border px-4 py-2">30-44</td>
                        <td className="border px-4 py-2">Moderate to severe decline</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Stage 4</td>
                        <td className="border px-4 py-2">15-29</td>
                        <td className="border px-4 py-2">Severe decline</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Stage 5</td>
                        <td className="border px-4 py-2">< 15</td>
                        <td className="border px-4 py-2">Kidney failure (may require dialysis or transplant)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="management" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Medical Management</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                        <span>Blood pressure medications (ACE inhibitors, ARBs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                        <span>Medications to lower cholesterol levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                        <span>Diuretics to reduce fluid retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                        <span>Erythropoietin for anemia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-medical-teal mt-0.5 flex-shrink-0" />
                        <span>Phosphate binders to manage mineral balance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">Lifestyle Modifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Low-salt diet (less than 2,300 mg of sodium per day)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Controlled protein intake based on CKD stage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Limiting potassium and phosphorus in advanced stages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Regular exercise as tolerated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Smoking cessation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                        <span>Limiting alcohol consumption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AboutCKDPage;
