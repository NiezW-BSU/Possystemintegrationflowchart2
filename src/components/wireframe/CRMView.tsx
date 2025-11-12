import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, Plus, Mail, Phone, MapPin, ShoppingBag, Calendar, Star } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const customers = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@email.com', 
    phone: '(555) 123-4567',
    totalSpent: 1245.80,
    visits: 15,
    lastPurchase: '2025-10-28',
    loyaltyPoints: 450,
    preferredChannel: 'in-store',
    segment: 'VIP'
  },
  { 
    id: 2, 
    name: 'John Smith', 
    email: 'john.smith@email.com', 
    phone: '(555) 234-5678',
    totalSpent: 892.50,
    visits: 8,
    lastPurchase: '2025-10-30',
    loyaltyPoints: 280,
    preferredChannel: 'online',
    segment: 'Regular'
  },
  { 
    id: 3, 
    name: 'Emily Davis', 
    email: 'emily.d@email.com', 
    phone: '(555) 345-6789',
    totalSpent: 2134.20,
    visits: 22,
    lastPurchase: '2025-10-29',
    loyaltyPoints: 680,
    preferredChannel: 'in-store',
    segment: 'VIP'
  },
  { 
    id: 4, 
    name: 'Michael Brown', 
    email: 'michael.b@email.com', 
    phone: '(555) 456-7890',
    totalSpent: 456.30,
    visits: 4,
    lastPurchase: '2025-10-25',
    loyaltyPoints: 120,
    preferredChannel: 'online',
    segment: 'New'
  },
  { 
    id: 5, 
    name: 'Lisa Anderson', 
    email: 'lisa.a@email.com', 
    phone: '(555) 567-8901',
    totalSpent: 1567.90,
    visits: 18,
    lastPurchase: '2025-10-30',
    loyaltyPoints: 520,
    preferredChannel: 'both',
    segment: 'VIP'
  },
];

export function CRMView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const totalCustomers = customers.length;
  const vipCustomers = customers.filter(c => c.segment === 'VIP').length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgSpend = totalRevenue / totalCustomers;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Total Customers</p>
              <ShoppingBag className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-slate-900 mb-1">{totalCustomers}</p>
            <p className="text-slate-500 text-sm">Active profiles</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">VIP Members</p>
              <Star className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-slate-900 mb-1">{vipCustomers}</p>
            <p className="text-slate-500 text-sm">High-value customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Total Revenue</p>
              <ShoppingBag className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-slate-900 mb-1">${totalRevenue.toLocaleString()}</p>
            <p className="text-slate-500 text-sm">From all customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Avg. Customer Value</p>
              <ShoppingBag className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-slate-900 mb-1">${avgSpend.toFixed(0)}</p>
            <p className="text-slate-500 text-sm">Lifetime value</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Customer List */}
        <Card className="col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Customer Database</CardTitle>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </div>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search by name, email, or phone..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredCustomers.map((customer) => (
                <button
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer)}
                  className={`w-full text-left p-4 border-2 rounded-lg transition-colors ${
                    selectedCustomer?.id === customer.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-slate-900">{customer.name}</p>
                        <Badge variant={customer.segment === 'VIP' ? 'default' : 'secondary'} className="text-xs">
                          {customer.segment}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{customer.email}</p>
                      <p className="text-slate-500 text-sm">{customer.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-900">${customer.totalSpent.toFixed(2)}</p>
                      <p className="text-slate-500 text-sm">{customer.visits} visits</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{customer.loyaltyPoints} points</span>
                    <span>•</span>
                    <span>Last: {customer.lastPurchase}</span>
                    <span>•</span>
                    <span className="capitalize">{customer.preferredChannel}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Details */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedCustomer ? (
              <div className="space-y-6">
                {/* Profile */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-slate-900 mb-1">{selectedCustomer.name}</p>
                      <Badge variant={selectedCustomer.segment === 'VIP' ? 'default' : 'secondary'}>
                        {selectedCustomer.segment} Customer
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <h3 className="text-slate-900">Contact Information</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{selectedCustomer.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{selectedCustomer.phone}</span>
                  </div>
                </div>

                {/* Purchase History */}
                <div className="space-y-3">
                  <h3 className="text-slate-900">Purchase History</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-sm mb-1">Total Spent</p>
                      <p className="text-slate-900">${selectedCustomer.totalSpent.toFixed(2)}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-sm mb-1">Total Visits</p>
                      <p className="text-slate-900">{selectedCustomer.visits}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Last purchase: {selectedCustomer.lastPurchase}</span>
                  </div>
                </div>

                {/* Loyalty */}
                <div className="space-y-3">
                  <h3 className="text-slate-900">Loyalty Program</h3>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-700">Points Balance</span>
                      <Star className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-slate-900">{selectedCustomer.loyaltyPoints} points</p>
                    <p className="text-slate-600 text-sm mt-1">
                      ${(1000 - selectedCustomer.loyaltyPoints)} to next reward
                    </p>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-3">
                  <h3 className="text-slate-900">Preferences</h3>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-slate-600 text-sm mb-1">Preferred Channel</p>
                    <p className="text-slate-900 capitalize">{selectedCustomer.preferredChannel}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <Button variant="outline" className="w-full" size="sm">
                    View Purchase History
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Send Email
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Select a customer to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Data Capture Note */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-slate-900 mb-1">Automatic Data Capture</p>
        <p className="text-slate-600 text-sm">Customer information is automatically collected during POS transactions and online checkouts, creating unified profiles across all channels.</p>
      </div>
    </div>
  );
}
