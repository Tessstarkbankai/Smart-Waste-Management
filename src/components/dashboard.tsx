import { WasteClassification } from "@/services/waste-classification";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DownloadCloud, Recycle, Users, Clock, BarChart2 } from 'lucide-react';

interface DashboardProps {
  wasteClassification: WasteClassification;
}

// Green-themed color palette
const COLORS = ['#2E7D32', '#4CAF50', '#81C784', '#C8E6C9', '#E8F5E9'];

const pieData = [
  { name: 'Plastic', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Metal', value: 300 },
  { name: 'Glass', value: 200 },
  { name: 'E-Waste', value: 200 },
];

export function Dashboard({ wasteClassification }: DashboardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-800">Waste Classification Dashboard</h1>
        <p className="text-green-600">Environmental monitoring and waste management system</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800 flex items-center">
                <Recycle className="mr-2 h-5 w-5 text-green-600" />
                Waste Type
              </CardTitle>
              <div className="bg-green-100 p-1 rounded-full">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">WT</span>
                </div>
              </div>
            </div>
            <CardDescription className="text-green-600">The type of waste detected</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-green-700">{wasteClassification.wasteType}</p>
            <p className="text-sm text-green-600 mt-1">Classification complete</p>
          </CardContent>
        </Card>

        <Card className="border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800 flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-green-600" />
                Quantity
              </CardTitle>
              <div className="bg-green-100 p-1 rounded-full">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">QT</span>
                </div>
              </div>
            </div>
            <CardDescription className="text-green-600">Estimated quantity of waste</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-green-700">{wasteClassification.quantity}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800 flex items-center">
                <Users className="mr-2 h-5 w-5 text-green-600" />
                Manpower
              </CardTitle>
              <div className="bg-green-100 p-1 rounded-full">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MP</span>
                </div>
              </div>
            </div>
            <CardDescription className="text-green-600">People needed for cleanup</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-green-700">{wasteClassification.manpowerRequired}</p>
            <div className="flex space-x-1 mt-2">
              {Array.from({ length: Math.min(5, wasteClassification.manpowerRequired) }).map((_, i) => (
                <div key={i} className="h-4 w-4 bg-green-500 rounded-full"></div>
              ))}
              {Array.from({ length: Math.max(0, 5 - wasteClassification.manpowerRequired) }).map((_, i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-green-600" />
                Decomposition
              </CardTitle>
              <div className="bg-green-100 p-1 rounded-full">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DT</span>
                </div>
              </div>
            </div>
            <CardDescription className="text-green-600">Time to decompose</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-green-700">{wasteClassification.details.decompositionTime}</p>
            <p className="text-sm text-green-600 mt-1">Environmental impact: Medium</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2 border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800">Waste Distribution</CardTitle>
              <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">CHART</div>
            </div>
            <CardDescription className="text-green-600">Visual representation of waste types</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-2 border-green-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <CardTitle className="text-green-800">Environmental Impact</CardTitle>
              <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">DETAILS</div>
            </div>
            <CardDescription className="text-green-600">Details about the classified waste</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-green-800">Recycling Method</h3>
                <p className="text-green-700">Specialized mechanical recycling required</p>
              </div>
              <div>
                <h3 className="font-medium text-green-800">Hazard Level</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-green-600 mt-1">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-green-800">Treatment Required</h3>
                <p className="text-green-700">Standard collection and sorting process</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={window.print} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
          <DownloadCloud className="h-4 w-4" /> Export Report
        </Button>
      </div>
    </div>
  );
}