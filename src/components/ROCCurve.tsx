
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import { rocCurveData } from "@/lib/constants";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow rounded border text-sm">
        <p>False Positive Rate: {payload[0].payload.fpr.toFixed(3)}</p>
        <p>True Positive Rate: {payload[0].payload.tpr.toFixed(3)}</p>
      </div>
    );
  }
  return null;
};

const ROCCurve: React.FC = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>ROC Curve</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={rocCurveData}
              margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey="fpr" 
                type="number" 
                domain={[0, 1]} 
                label={{ 
                  value: 'False Positive Rate', 
                  position: 'insideBottom', 
                  offset: -10 
                }} 
              />
              <YAxis 
                type="number" 
                domain={[0, 1]} 
                label={{ 
                  value: 'True Positive Rate', 
                  angle: -90, 
                  position: 'insideLeft' 
                }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                x={0} 
                y={0} 
                stroke="rgba(0,0,0,0.3)" 
              />
              <ReferenceLine 
                x={1} 
                y={1} 
                stroke="rgba(0,0,0,0.3)" 
              />
              <Line 
                type="monotone" 
                dataKey="tpr" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
                dot={{ r: 4 }} 
                animationDuration={1500} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          AUC = 0.94 (Area Under the Curve)
        </div>
      </CardContent>
    </Card>
  );
};

export default ROCCurve;
