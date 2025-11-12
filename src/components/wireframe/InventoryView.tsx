import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, Plus, Edit, AlertCircle, Package, TrendingDown, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const inventoryData = [
  { id: 1, sku: 'WH-001', name: 'Wireless Headphones', category: 'Electronics', price: 120.00, stock: 45, reorderLevel: 20, inStoreStock: 25, onlineStock: 20, status: 'in-stock' },
  { id: 2, sku: 'SW-002', name: 'Smart Watch', category: 'Electronics', price: 299.99, stock: 23, reorderLevel: 15, inStoreStock: 13, onlineStock: 10, status: 'in-stock' },
  { id: 3, sku: 'LS-003', name: 'Laptop Sleeve', category: 'Accessories', price: 29.99, stock: 67, reorderLevel: 30, inStoreStock: 35, onlineStock: 32, status: 'in-stock' },
  { id: 4, sku: 'UC-004', name: 'USB-C Cable', category: 'Accessories', price: 19.99, stock: 120, reorderLevel: 50, inStoreStock: 60, onlineStock: 60, status: 'in-stock' },
  { id: 5, sku: 'PC-005', name: 'Phone Case', category: 'Accessories', price: 29.99, stock: 89, reorderLevel: 40, inStoreStock: 45, onlineStock: 44, status: 'in-stock' },
  { id: 6, sku: 'WM-006', name: 'Wireless Mouse', category: 'Electronics', price: 45.00, stock: 12, reorderLevel: 25, inStoreStock: 7, onlineStock: 5, status: 'low' },
  { id: 7, sku: 'MS-007', name: 'Monitor Stand', category: 'Furniture', price: 79.99, stock: 5, reorderLevel: 20, inStoreStock: 3, onlineStock: 2, status: 'critical' },
  { id: 8, sku: 'KB-008', name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, stock: 8, reorderLevel: 15, inStoreStock: 5, onlineStock: 3, status: 'critical' },
];

export function InventoryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  const totalValue = inventoryData.reduce((sum, item) => sum + (item.stock * item.price), 0);
  const lowStockCount = inventoryData.filter(item => item.status === 'low' || item.status === 'critical').length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Total Products</p>
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-slate-900 mb-1">{inventoryData.length}</p>
            <p className="text-slate-500 text-sm">SKUs in system</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Total Stock Value</p>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-slate-900 mb-1">${totalValue.toLocaleString()}</p>
            <p className="text-slate-500 text-sm">Across all locations</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Low Stock Items</p>
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-slate-900 mb-1">{lowStockCount}</p>
            <p className="text-slate-500 text-sm">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-600 text-sm">Total Units</p>
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-slate-900 mb-1">
              {inventoryData.reduce((sum, item) => sum + item.stock, 0)}
            </p>
            <p className="text-slate-500 text-sm">In inventory</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Inventory Management</CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search by name or SKU..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button 
                variant={filter === 'in-stock' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFilter('in-stock')}
              >
                In Stock
              </Button>
              <Button 
                variant={filter === 'low' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFilter('low')}
              >
                Low Stock
              </Button>
              <Button 
                variant={filter === 'critical' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFilter('critical')}
              >
                Critical
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-center">In-Store</TableHead>
                <TableHead className="text-center">Online</TableHead>
                <TableHead className="text-center">Total Stock</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-slate-600">{item.sku}</TableCell>
                  <TableCell className="text-slate-900">{item.name}</TableCell>
                  <TableCell className="text-slate-600">{item.category}</TableCell>
                  <TableCell className="text-right text-slate-900">${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-center text-slate-600">{item.inStoreStock}</TableCell>
                  <TableCell className="text-center text-slate-600">{item.onlineStock}</TableCell>
                  <TableCell className="text-center text-slate-900">{item.stock}</TableCell>
                  <TableCell className="text-center">
                    <Badge 
                      variant={
                        item.status === 'critical' ? 'destructive' :
                        item.status === 'low' ? 'outline' :
                        'secondary'
                      }
                    >
                      {item.status === 'critical' ? 'Critical' :
                       item.status === 'low' ? 'Low Stock' :
                       'In Stock'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reorder
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Real-time Sync Indicator */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Real-time sync active • Last updated: Just now</span>
      </div>
    </div>
  );
}
