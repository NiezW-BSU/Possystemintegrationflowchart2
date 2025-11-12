import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Calendar, TrendingUp, Package, Users, ShoppingCart } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const salesTrendData = [
  { month: 'Apr', revenue: 32000, transactions: 245 },
  { month: 'May', revenue: 38000, transactions: 289 },
  { month: 'Jun', revenue: 35000, transactions: 267 },
  { month: 'Jul', revenue: 42000, transactions: 312 },
  { month: 'Aug', revenue: 48000, transactions: 356 },
  { month: 'Sep', revenue: 45000, transactions: 334 },
  { month: 'Oct', revenue: 52000, transactions: 389 },
];

const categoryData = [
  { name: 'Electronics', value: 48, color: '#3b82f6' },
  { name: 'Accessories', value: 32, color: '#8b5cf6' },
  { name: 'Furniture', value: 12, color: '#10b981' },
  { name: 'Others', value: 8, color: '#f59e0b' },
];

const inventoryTurnoverData = [
  { product: 'USB-C Cable', turnover: 8.5 },
  { product: 'Phone Case', turnover: 6.2 },
  { product: 'Wireless Mouse', turnover: 5.8 },
  { product: 'Laptop Sleeve', turnover: 4.9 },
  { product: 'Smart Watch', turnover: 3.2 },
];

const customerSegmentData = [
  { segment: 'VIP', customers: 45, revenue: 89000, avgSpend: 1978 },
  { segment: 'Regular', customers: 234, revenue: 156000, avgSpend: 667 },
  { segment: 'New', customers: 156, revenue: 42000, avgSpend: 269 },
];

export function ReportsView() {
  const [dateRange, setDateRange] = useState('30days');

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-slate-600" />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="12months">Last 12 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export Reports
        </Button>
      </div>

      {/* Sales Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesTrendData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                fill="url(#colorRevenue)" 
                name="Revenue ($)" 
              />
              <Line 
                type="monotone" 
                dataKey="transactions" 
                stroke="#8b5cf6" 
                name="Transactions" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Inventory Turnover */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Turnover Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inventoryTurnoverData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="product" type="category" stroke="#64748b" width={120} />
                <Tooltip />
                <Bar dataKey="turnover" fill="#10b981" name="Turnover Rate" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Segment Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerSegmentData.map((segment, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-slate-900">{segment.segment} Customers</h3>
                  <span className="text-slate-600 text-sm">{segment.customers} customers</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Total Revenue</p>
                    <p className="text-slate-900">${segment.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Avg. Spend</p>
                    <p className="text-slate-900">${segment.avgSpend.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-1">Revenue Share</p>
                    <p className="text-slate-900">
                      {((segment.revenue / customerSegmentData.reduce((sum, s) => sum + s.revenue, 0)) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Growth Forecast</p>
                <p className="text-slate-900">+18.5%</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">Projected growth for next quarter based on current trends</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Optimal Stock Level</p>
                <p className="text-slate-900">92%</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">Current inventory levels are well-balanced for demand</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Customer Retention</p>
                <p className="text-slate-900">78%</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">Strong repeat customer rate across both channels</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Types */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Daily Sales Summary
            </Button>
            <Button variant="outline" className="justify-start">
              <Package className="w-4 h-4 mr-2" />
              Inventory Valuation
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="w-4 h-4 mr-2" />
              Customer Lifetime Value
            </Button>
            <Button variant="outline" className="justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              Channel Performance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
