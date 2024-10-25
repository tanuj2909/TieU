// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { LineChart, BarChart, PieChart } from '@/components/ui/chart'

// const SalesDashboard = () => {
//   const [activeTab, setActiveTab] = useState('orgOverview');

//   const sidebarItems = [
//     { id: 'orgOverview', label: 'Org Overview' },
//     { id: 'leadAnalytics', label: 'Lead Analytics' },
//     { id: 'dealInsights', label: 'Deal Insights' },
//     { id: 'marketingMetrics', label: 'Marketing Metrics' },
//     { id: 'salesStats', label: 'Sales Stats' },
//     { id: 'salesFollowup', label: 'Sales Follow-up Trend' },
//     { id: 'activityStats', label: 'Activity Stats' },
//   ];

//   const leadsData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Leads',
//         data: [65, 59, 80, 81, 56, 55],
//       },
//     ],
//   };

//   const revenueData = {
//     labels: ['Target', 'Achieved'],
//     datasets: [
//       {
//         data: [15000, 8000],
//       },
//     ],
//   };

//   const leadsSourceData = {
//     labels: ['Web Download', 'External Referral', 'Partner', 'Internal Source', 'Advertisement'],
//     datasets: [
//       {
//         data: [30, 25, 20, 15, 10],
//       },
//     ],
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'orgOverview':
//         return (
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Leads This Month</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">120</div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$24,000</div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Deals in Pipeline</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">15</div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Accounts This Month</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">10</div>
//               </CardContent>
//             </Card>
//             <Card className="col-span-2">
//               <CardHeader>
//                 <CardTitle>Lead Generation Target - This Year</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <LineChart
//                   data={leadsData}
//                   className="h-[200px]"
//                 />
//               </CardContent>
//             </Card>
//             <Card className="col-span-2">
//               <CardHeader>
//                 <CardTitle>Revenue Target - This Year</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <BarChart
//                   data={revenueData}
//                   className="h-[200px]"
//                 />
//               </CardContent>
//             </Card>
//             <Card className="col-span-2">
//               <CardHeader>
//                 <CardTitle>Last 3 Months Performance Monitor</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       <th className="text-left">Metric</th>
//                       <th className="text-right">Value</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Leads Created</td>
//                       <td className="text-right">300</td>
//                     </tr>
//                     <tr>
//                       <td>Deals Created</td>
//                       <td className="text-right">50</td>
//                     </tr>
//                     <tr>
//                       <td>Deals Won</td>
//                       <td className="text-right">30</td>
//                     </tr>
//                     <tr>
//                       <td>Revenue Won</td>
//                       <td className="text-right">$150,000</td>
//                     </tr>
//                     <tr>
//                       <td>Open Amount</td>
//                       <td className="text-right">$300,000</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardContent>
//             </Card>
//             <Card className="col-span-2">
//               <CardHeader>
//                 <CardTitle>Leads by Source</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <PieChart
//                   data={leadsSourceData}
//                   className="h-[200px]"
//                 />
//               </CardContent>
//             </Card>
//           </div>
//         );
//       case 'leadAnalytics':
//         return <h2 className="text-2xl font-bold">Lead Analytics Content</h2>;
//       case 'dealInsights':
//         return <h2 className="text-2xl font-bold">Deal Insights Content</h2>;
//       case 'marketingMetrics':
//         return <h2 className="text-2xl font-bold">Marketing Metrics Content</h2>;
//       case 'salesStats':
//         return <h2 className="text-2xl font-bold">Sales Stats Content</h2>;
//       case 'salesFollowup':
//         return <h2 className="text-2xl font-bold">Sales Follow-up Trend Content</h2>;
//       case 'activityStats':
//         return <h2 className="text-2xl font-bold">Activity Stats Content</h2>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside className="w-64 bg-white border-r">
//         <div className="p-4">
//           <h1 className="text-2xl font-bold">Dashboards</h1>
//         </div>
//         <nav>
//           {sidebarItems.map((item) => (
//             <button
//               key={item.id}
//               className={`w-full text-left p-4 hover:bg-gray-100 ${
//                 activeTab === item.id ? 'bg-gray-200' : ''
//               }`}
//               onClick={() => setActiveTab(item.id)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </aside>
//       <main className="flex-1 p-8 overflow-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">{sidebarItems.find(item => item.id === activeTab)?.label}</h1>
//           <div className="flex items-center space-x-4">
//             <Button variant="outline">Funnel Zone Analytics</Button>
//             <Button>Add Component</Button>
//           </div>
//         </div>
//         <Tabs defaultValue="all" className="mb-8">
//           <TabsList>
//             <TabsTrigger value="all">All</TabsTrigger>
//             <TabsTrigger value="custom">Custom</TabsTrigger>
//           </TabsList>
//           <TabsContent value="all">
//             {renderContent()}
//           </TabsContent>
//           <TabsContent value="custom">
//             <p>Custom dashboard content goes here.</p>
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// };

// export default SalesDashboard;