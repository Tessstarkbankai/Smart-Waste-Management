"use client";

import { WasteClassification } from "@/services/waste-classification";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  wasteClassification: WasteClassification;
}

const COLORS = ['#4CAF50', '#FF9800', '#F44336', '#9C27B0', '#3F51B5'];

const pieData = [
  { name: 'Plastic', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Metal', value: 300 },
  { name: 'Glass', value: 200 },
  { name: 'E-Waste', value: 200 },
];

export function Dashboard({ wasteClassification }: DashboardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Waste Type</CardTitle>
          <CardDescription>The type of waste detected</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{wasteClassification.wasteType}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quantity</CardTitle>
          <CardDescription>Estimated quantity of waste</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{wasteClassification.quantity}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manpower Required</CardTitle>
          <CardDescription>Number of people needed for cleanup</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{wasteClassification.manpowerRequired}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decomposition Time</CardTitle>
          <CardDescription>Time it takes for the waste to decompose</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{wasteClassification.details.decompositionTime}</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Waste Distribution</CardTitle>
          <CardDescription>Visual representation of waste types</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="md:col-span-2 lg:col-span-4 flex justify-end">
        <Button>Export Report</Button>
      </div>
    </div>
  );
}
