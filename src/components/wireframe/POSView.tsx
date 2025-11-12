import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, Trash2, CreditCard, DollarSign, User } from 'lucide-react';
import { Badge } from '../ui/badge';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 120.00, sku: 'WH-001', stock: 45 },
  { id: 2, name: 'Smart Watch', price: 299.99, sku: 'SW-002', stock: 23 },
  { id: 3, name: 'Laptop Sleeve', price: 29.99, sku: 'LS-003', stock: 67 },
  { id: 4, name: 'USB-C Cable', price: 19.99, sku: 'UC-004', stock: 120 },
  { id: 5, name: 'Phone Case', price: 29.99, sku: 'PC-005', stock: 89 },
  { id: 6, name: 'Wireless Mouse', price: 45.00, sku: 'WM-006', stock: 12 },
];

export function POSView() {
  const [cart, setCart] = useState<Array<{id: number; name: string; price: number; quantity: number}>>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-6 h-[800px]">
      {/* Product Selection */}
      <div className="col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  placeholder="Search products by name or SKU..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">Scan Barcode</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 max-h-[650px] overflow-y-auto">
              {filteredProducts.map(product => (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="text-left p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-slate-900 mb-1">{product.name}</p>
                      <p className="text-slate-500 text-sm">{product.sku}</p>
                    </div>
                    <Badge variant={product.stock < 20 ? "destructive" : "secondary"} className="text-xs">
                      {product.stock} in stock
                    </Badge>
                  </div>
                  <p className="text-blue-600">${product.price.toFixed(2)}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cart & Checkout */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Sale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Customer Lookup */}
            <div className="pb-4 border-b border-slate-200">
              <label className="text-slate-700 text-sm mb-2 block">Customer (Optional)</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Phone or email..."
                  className="pl-9"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
              </div>
              {customerPhone && (
                <div className="mt-2 p-2 bg-blue-50 rounded text-sm">
                  <p className="text-slate-900">Sarah Johnson</p>
                  <p className="text-slate-600">Loyalty Member • 450 points</p>
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="space-y-2 max-h-[280px] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No items in cart</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                    <div className="flex-1">
                      <p className="text-slate-900 text-sm">{item.name}</p>
                      <p className="text-slate-600 text-xs">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-slate-900 w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Totals */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Tax (8%)</span>
                <span className="text-slate-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-900">Total</span>
                <span className="text-slate-900">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-2 pt-2">
              <Button 
                className="w-full" 
                size="lg"
                disabled={cart.length === 0}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay with Card
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                disabled={cart.length === 0}
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Cash Payment
              </Button>
            </div>

            <Button 
              variant="ghost" 
              className="w-full" 
              onClick={() => setCart([])}
              disabled={cart.length === 0}
            >
              Clear Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
