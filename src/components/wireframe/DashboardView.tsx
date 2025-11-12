import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users, AlertTriangle } from 'lucide-react';

const salesData = [
  { name: 'Mon', online: 4200, inStore: 3800 },
  { name: 'Tue', online: 3800, inStore: 4200 },
  { name: 'Wed', online: 5100, inStore: 3900 },
  { name: 'Thu', online: 4600, inStore: 4500 },
  { name: 'Fri', online: 6200, inStore: 5800 },
  { name: 'Sat', online: 7400, inStore: 7200 },
  { name: 'Sun', online: 6800, inStore: 6100 },
];

const channelData = [
  { name: 'In-Store', value: 58, color: '#3b82f6' },
  { name: 'Online', value: 42, color: '#8b5cf6' },
];

const topProducts = [
  { name: 'Wireless Headphones', sales: 156, revenue: 18720 },
  { name: 'Smart Watch', sales: 134, revenue: 40200 },
  { name: 'Laptop Sleeve', sales: 98, revenue: 2940 },
  { name: 'USB-C Cable', sales: 87, revenue: 1740 },
  { name: 'Phone Case', sales: 76, revenue: 2280 },
];

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <KPICard 
          title="Total Revenue"
          value="$48,392"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="w-5 h-5" />}
          color="text-green-600"
        />
        <KPICard 
          title="Total Orders"
          value="342"
          change="+8.2%"
          trend="up"
          icon={<ShoppingCart className="w-5 h-5" />}
          color="text-blue-600"
        />
        <KPICard 
          title="Inventory Items"
          value="1,248"
          change="-2.4%"
          trend="down"
          icon={<Package className="w-5 h-5" />}
          color="text-purple-600"
        />
        <KPICard 
          title="Active Customers"
          value="892"
          change="+15.3%"
          trend="up"
          icon={<Users className="w-5 h-5" />}
          color="text-orange-600"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Sales by Channel (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Legend />
                <Bar dataKey="inStore" fill="#3b82f6" name="In-Store" />
                <Bar dataKey="online" fill="#8b5cf6" name="Online" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Channel Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0">
                  <div className="flex-1">
                    <p className="text-slate-900">{product.name}</p>
                    <p className="text-slate-500 text-sm">{product.sales} units sold</p>
                  </div>
                  <p className="text-slate-900">${product.revenue.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <AlertItem 
                product="Wireless Mouse"
                current={12}
                reorder={25}
                status="warning"
              />
              <AlertItem 
                product="Monitor Stand"
                current={5}
                reorder={20}
                status="critical"
              />
              <AlertItem 
                product="Keyboard"
                current={8}
                reorder={15}
                status="critical"
              />
              <AlertItem 
                product="Desk Lamp"
                current={18}
                reorder={30}
                status="warning"
              />
              <AlertItem 
                product="Cable Organizer"
                current={22}
                reorder={40}
                status="warning"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KPICard({ title, value, change, trend, icon, color }: any) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-600 text-sm">{title}</p>
          <div className={color}>{icon}</div>
        </div>
        <p className="text-slate-900 mb-1">{value}</p>
        <div className="flex items-center gap-1">
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
          <span className="text-slate-500 text-sm">vs last week</span>
        </div>
      </CardContent>
    </Card>
  );
}

function AlertItem({ product, current, reorder, status }: any) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
      <AlertTriangle className={`w-5 h-5 ${status === 'critical' ? 'text-red-500' : 'text-amber-500'}`} />
      <div className="flex-1">
        <p className="text-slate-900">{product}</p>
        <p className="text-slate-500 text-sm">
          Current: {current} | Reorder at: {reorder}
        </p>
      </div>
      <span className={`px-2 py-1 rounded text-xs ${
        status === 'critical' 
          ? 'bg-red-100 text-red-700' 
          : 'bg-amber-100 text-amber-700'
      }`}>
        {status === 'critical' ? 'Critical' : 'Low'}
      </span>
    </div>
  );
}
