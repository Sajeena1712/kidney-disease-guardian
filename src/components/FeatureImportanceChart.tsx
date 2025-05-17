
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { featureImportanceData } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow rounded border text-sm">
        <p className="font-medium">{payload[0].payload.feature}</p>
        <p>Importance: {(payload[0].value * 100).toFixed(1)}%</p>
      </div>
    );
  }
  return null;
};

const FeatureImportanceChart: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle>Feature Importance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={featureImportanceData}
              layout={isMobile ? "vertical" : "horizontal"}
              margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
            >
              {isMobile ? (
                <>
                  <XAxis type="number" />
                  <YAxis
                    dataKey="feature"
                    type="category"
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                </>
              ) : (
                <>
                  <XAxis
                    dataKey="feature"
                    angle={-45}
                    textAnchor="end"
                    tick={{ fontSize: 12 }}
                    height={70}
                  />
                  <YAxis />
                </>
              )}
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="importance"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                barSize={isMobile ? 15 : 30}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureImportanceChart;
