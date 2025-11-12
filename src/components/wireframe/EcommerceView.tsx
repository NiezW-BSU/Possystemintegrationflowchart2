import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ShoppingCart, Eye, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const onlineOrders = [
  { id: '#E-1234', customer: 'John Smith', email: 'john@email.com', items: 3, total: 289.97, status: 'pending', date: '2025-10-30 09:15', paymentStatus: 'paid' },
  { id: '#E-1233', customer: 'Emily Davis', email: 'emily@email.com', items: 1, total: 120.00, status: 'processing', date: '2025-10-30 08:45', paymentStatus: 'paid' },
  { id: '#E-1232', customer: 'Michael Brown', email: 'michael@email.com', items: 2, total: 349.98, status: 'shipped', date: '2025-10-29 16:20', paymentStatus: 'paid' },
  { id: '#E-1231', customer: 'Sarah Wilson', email: 'sarah@email.com', items: 4, total: 199.96, status: 'delivered', date: '2025-10-28 14:30', paymentStatus: 'paid' },
  { id: '#E-1230', customer: 'David Lee', email: 'david@email.com', items: 1, total: 299.99, status: 'cancelled', date: '2025-10-28 11:10', paymentStatus: 'refunded' },
];

const products = [
  { id: 1, name: 'Wireless Headphones', price: 120.00, stock: 45, image: '🎧' },
  { id: 2, name: 'Smart Watch', price: 299.99, stock: 23, image: '⌚' },
  { id: 3, name: 'Laptop Sleeve', price: 29.99, stock: 67, image: '💼' },
  { id: 4, name: 'USB-C Cable', price: 19.99, stock: 120, image: '🔌' },
];

export function EcommerceView() {
  const [selectedTab, setSelectedTab] = useState<'orders' | 'products'>('orders');

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Pending Orders</p>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-slate-900 mb-1">8</p>
            <p className="text-slate-500 text-sm">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Processing</p>
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-slate-900 mb-1">12</p>
            <p className="text-slate-500 text-sm">Being prepared</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Shipped Today</p>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-slate-900 mb-1">15</p>
            <p className="text-slate-500 text-sm">Out for delivery</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Online Revenue</p>
              <ShoppingCart className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-slate-900 mb-1">$20,384</p>
            <p className="text-slate-500 text-sm">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>E-commerce Management</CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={selectedTab === 'orders' ? 'default' : 'outline'}
                onClick={() => setSelectedTab('orders')}
              >
                Orders
              </Button>
              <Button 
                variant={selectedTab === 'products' ? 'default' : 'outline'}
                onClick={() => setSelectedTab('products')}
              >
                Online Catalog
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {selectedTab === 'orders' ? (
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-center">Payment</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {onlineOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="text-slate-900">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-slate-900">{order.customer}</p>
                          <p className="text-slate-500 text-sm">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600">{order.items} items</TableCell>
                      <TableCell className="text-right text-slate-900">${order.total.toFixed(2)}</TableCell>
                      <TableCell className="text-slate-600 text-sm">{order.date}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={order.paymentStatus === 'paid' ? 'secondary' : 'outline'}>
                          {order.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge 
                          variant={
                            order.status === 'delivered' ? 'secondary' :
                            order.status === 'cancelled' ? 'destructive' :
                            'outline'
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {order.status === 'pending' && (
                            <Button size="sm">Process</Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div>
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-slate-900 mb-1">Inventory Integration Active</p>
                <p className="text-slate-600 text-sm">Online catalog automatically syncs with inventory system. Stock levels update in real-time.</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product.id}>
                    <CardContent className="pt-6">
                      <div className="text-5xl text-center mb-4">{product.image}</div>
                      <p className="text-slate-900 mb-1">{product.name}</p>
                      <p className="text-blue-600 mb-3">${product.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="text-slate-600">Stock:</span>
                        <Badge variant={product.stock < 20 ? 'destructive' : 'secondary'}>
                          {product.stock} units
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Edit Listing
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Integration Status */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>E-commerce platform connected • Orders sync every 30 seconds</span>
      </div>
    </div>
  );
}
