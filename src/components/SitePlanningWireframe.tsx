import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Wireframe view options
const wireframeLayouts = [
  'Small Retail (500 sq ft)',
  'Medium Store (1000 sq ft)', 
  'Large Department (2500 sq ft)',
  'Custom Layout'
];

export function SitePlanningWireframe() {
  const [selectedLayout, setSelectedLayout] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-slate-900 mb-2">Store Site Planning Wireframe</h2>
        <p className="text-slate-600 mb-4">Low-fidelity layout mockups for retail space design</p>
        
        {/* Layout selector */}
        <div className="flex gap-2">
          {wireframeLayouts.map((layout, index) => (
            <button
              key={index}
              onClick={() => setSelectedLayout(index)}
              className={`px-4 py-2 border-2 ${
                selectedLayout === index 
                  ? 'border-slate-800 bg-slate-100' 
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            >
              {layout}
            </button>
          ))}
        </div>
      </div>

      {/* Wireframe Content */}
      {selectedLayout === 0 && <SmallRetailWireframe />}
      {selectedLayout === 1 && <MediumStoreWireframe />}
      {selectedLayout === 2 && <LargeDepartmentWireframe />}
      {selectedLayout === 3 && <CustomLayoutWireframe />}
    </div>
  );
}

// Small Retail Wireframe
function SmallRetailWireframe() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Wireframe */}
      <div className="col-span-2 border-4 border-slate-800 bg-slate-50 p-8" style={{ fontFamily: 'monospace' }}>
        <div className="relative border-2 border-dashed border-slate-400" style={{ height: '600px' }}>
          {/* Title */}
          <div className="absolute -top-12 left-0 text-slate-900">
            SMALL RETAIL STORE LAYOUT - 500 SQ FT
          </div>
          
          {/* Dimensions */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-600 text-sm">
            ← 25 ft →
          </div>
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 -rotate-90 text-slate-600 text-sm">
            ← 20 ft →
          </div>

          {/* Entrance */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 border-4 border-slate-700 bg-white flex items-center justify-center">
            <span className="text-xs">ENTRANCE</span>
          </div>
          
          {/* Checkout Counter - Right side */}
          <div className="absolute top-12 right-8 w-40 h-24 border-4 border-slate-700">
            <div className="h-full flex flex-col items-center justify-center bg-slate-200 border-2 border-dashed border-slate-500">
              <div className="text-sm mb-2">[CHECKOUT]</div>
              <div className="text-xs text-slate-600">Counter</div>
            </div>
          </div>

          {/* POS Terminal */}
          <div className="absolute top-16 right-16 w-20 h-16 border-2 border-slate-700 bg-white">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-12 h-8 border-2 border-slate-500 mb-1"></div>
              <div className="text-xs">POS</div>
            </div>
          </div>

          {/* Display Table - Left front */}
          <div className="absolute top-24 left-8 w-32 h-32 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-xs mb-2">[DISPLAY TABLE]</div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-8 border border-slate-300 bg-slate-100"></div>
                <div className="h-8 border border-slate-300 bg-slate-100"></div>
                <div className="h-8 border border-slate-300 bg-slate-100"></div>
                <div className="h-8 border border-slate-300 bg-slate-100"></div>
              </div>
            </div>
          </div>

          {/* Shelf Unit 1 */}
          <div className="absolute top-28 left-48 w-28 h-16 border-4 border-slate-700">
            <div className="h-full bg-slate-200 p-1">
              <div className="text-xs mb-1">[SHELF]</div>
              <div className="space-y-0.5">
                <div className="h-2 bg-slate-400"></div>
                <div className="h-2 bg-slate-400"></div>
                <div className="h-2 bg-slate-400"></div>
              </div>
            </div>
          </div>

          {/* Shelf Unit 2 */}
          <div className="absolute top-60 left-48 w-28 h-16 border-4 border-slate-700">
            <div className="h-full bg-slate-200 p-1">
              <div className="text-xs mb-1">[SHELF]</div>
              <div className="space-y-0.5">
                <div className="h-2 bg-slate-400"></div>
                <div className="h-2 bg-slate-400"></div>
                <div className="h-2 bg-slate-400"></div>
              </div>
            </div>
          </div>

          {/* Storage Area */}
          <div className="absolute bottom-8 right-8 w-40 h-32 border-4 border-slate-700">
            <div className="h-full bg-slate-300 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center">
              <div className="text-sm">[STORAGE]</div>
              <div className="text-xs text-slate-600 mt-1">Back Area</div>
              <div className="text-xs text-slate-600">Staff Only</div>
            </div>
          </div>

          {/* Floor space annotation */}
          <div className="absolute bottom-4 left-8 text-xs text-slate-500">
            • Customer browsing area
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Layout Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Total Area:</div>
              <div className="text-slate-900">500 sq ft (25' × 20')</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">POS Terminals:</div>
              <div className="text-slate-900">1 terminal</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Checkout Lanes:</div>
              <div className="text-slate-900">1 lane</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Display Areas:</div>
              <div className="text-slate-900">1 featured table</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Shelf Units:</div>
              <div className="text-slate-900">2 units</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Key Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Single entrance/exit flow</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Checkout visible from entrance</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Featured display near entry</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Storage in back corner</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Open browsing space</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Integration Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-600">
            <p>• POS terminal connects to main inventory system</p>
            <p>• Real-time stock updates from back storage</p>
            <p>• Customer data captured at checkout</p>
            <p>• Suitable for boutique or specialty retail</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Medium Store Wireframe
function MediumStoreWireframe() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 border-4 border-slate-800 bg-slate-50 p-8" style={{ fontFamily: 'monospace' }}>
        <div className="relative border-2 border-dashed border-slate-400" style={{ height: '700px' }}>
          <div className="absolute -top-12 left-0 text-slate-900">
            MEDIUM STORE LAYOUT - 1000 SQ FT
          </div>
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-600 text-sm">
            ← 40 ft →
          </div>
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 -rotate-90 text-slate-600 text-sm">
            ← 25 ft →
          </div>

          {/* Entrance */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 border-4 border-slate-700 bg-white flex items-center justify-center">
            <span className="text-xs">MAIN ENTRANCE</span>
          </div>

          {/* Checkout Area - Right */}
          <div className="absolute top-12 right-12 w-48 h-28 border-4 border-slate-700">
            <div className="h-full flex flex-col bg-slate-200 border-2 border-dashed border-slate-500 p-2">
              <div className="text-sm mb-2">[CHECKOUT AREA]</div>
              <div className="flex gap-2">
                <div className="flex-1 border-2 border-slate-700 bg-white p-1 text-center text-xs">POS 1</div>
                <div className="flex-1 border-2 border-slate-700 bg-white p-1 text-center text-xs">POS 2</div>
              </div>
            </div>
          </div>

          {/* Display Table 1 */}
          <div className="absolute top-32 left-12 w-40 h-40 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-xs mb-2">[NEW ARRIVALS]</div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square border border-slate-300 bg-slate-100"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Display Table 2 */}
          <div className="absolute top-32 left-60 w-40 h-40 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-xs mb-2">[FEATURED]</div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square border border-slate-300 bg-slate-100"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Shelf Units - Middle */}
          <div className="absolute top-40 left-1/2 -translate-x-1/2 space-y-4">
            <div className="w-36 h-20 border-4 border-slate-700">
              <div className="h-full bg-slate-200 p-1">
                <div className="text-xs mb-1">[CATEGORY A]</div>
                <div className="space-y-1">
                  <div className="h-3 bg-slate-400"></div>
                  <div className="h-3 bg-slate-400"></div>
                  <div className="h-3 bg-slate-400"></div>
                </div>
              </div>
            </div>
            <div className="w-36 h-20 border-4 border-slate-700">
              <div className="h-full bg-slate-200 p-1">
                <div className="text-xs mb-1">[CATEGORY B]</div>
                <div className="space-y-1">
                  <div className="h-3 bg-slate-400"></div>
                  <div className="h-3 bg-slate-400"></div>
                  <div className="h-3 bg-slate-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Fitting Room */}
          <div className="absolute bottom-16 left-12 w-28 h-28 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 flex flex-col items-center justify-center">
              <div className="text-sm">[FITTING]</div>
              <div className="text-sm">[ROOM]</div>
              <div className="w-16 h-12 border-2 border-slate-400 mt-2"></div>
            </div>
          </div>

          {/* Storage/Inventory */}
          <div className="absolute bottom-12 right-12 w-48 h-40 border-4 border-slate-700">
            <div className="h-full bg-slate-300 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center p-2">
              <div className="text-sm mb-2">[INVENTORY]</div>
              <div className="text-xs text-slate-600">Back Storage</div>
              <div className="text-xs text-slate-600">Staff Area</div>
              <div className="w-32 h-16 border-2 border-slate-500 mt-2 bg-slate-400"></div>
            </div>
          </div>

          {/* Aisle markers */}
          <div className="absolute top-80 left-1/2 -translate-x-1/2 text-xs text-slate-400">
            ↕ Main Aisle ↕
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Layout Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Total Area:</div>
              <div className="text-slate-900">1000 sq ft (40' × 25')</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">POS Terminals:</div>
              <div className="text-slate-900">2 terminals</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Display Tables:</div>
              <div className="text-slate-900">2 featured areas</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Product Categories:</div>
              <div className="text-slate-900">2 shelf sections</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Traffic Flow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="text-slate-400">→</span>
              <span className="text-slate-700">Entry → Featured displays</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">→</span>
              <span className="text-slate-700">Browse categories in center</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">→</span>
              <span className="text-slate-700">Fitting room option</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">→</span>
              <span className="text-slate-700">Exit via checkout (right)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">System Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-600">
            <p>• Dual POS terminals for faster checkout</p>
            <p>• Centralized inventory management</p>
            <p>• CRM at all touchpoints</p>
            <p>• Suitable for apparel or general retail</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Large Department Wireframe
function LargeDepartmentWireframe() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 border-4 border-slate-800 bg-slate-50 p-8" style={{ fontFamily: 'monospace' }}>
        <div className="relative border-2 border-dashed border-slate-400" style={{ height: '800px' }}>
          <div className="absolute -top-12 left-0 text-slate-900">
            LARGE DEPARTMENT STORE - 2500 SQ FT
          </div>
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-600 text-sm">
            ← 50 ft →
          </div>
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 -rotate-90 text-slate-600 text-sm">
            ← 50 ft →
          </div>

          {/* Multiple Entrances */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-32 h-6 border-4 border-slate-700 bg-white flex items-center justify-center">
            <span className="text-xs">ENTRANCE 1</span>
          </div>
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-32 h-6 border-4 border-slate-700 bg-white flex items-center justify-center">
            <span className="text-xs">ENTRANCE 2</span>
          </div>

          {/* Large Checkout Zone */}
          <div className="absolute top-12 right-8 w-56 h-36 border-4 border-slate-700">
            <div className="h-full flex flex-col bg-slate-200 border-2 border-dashed border-slate-500 p-2">
              <div className="text-sm mb-2">[CHECKOUT ZONE]</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border-2 border-slate-700 bg-white p-1 text-center text-xs">POS 1</div>
                <div className="border-2 border-slate-700 bg-white p-1 text-center text-xs">POS 2</div>
                <div className="border-2 border-slate-700 bg-white p-1 text-center text-xs">POS 3</div>
              </div>
              <div className="text-xs text-slate-600 mt-2">Self-checkout area →</div>
            </div>
          </div>

          {/* Department 1 - Electronics */}
          <div className="absolute top-32 left-8 w-48 h-44 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-sm mb-2">[ELECTRONICS DEPT]</div>
              <div className="grid grid-cols-4 gap-1 mb-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="aspect-square border border-slate-300 bg-slate-100"></div>
                ))}
              </div>
              <div className="text-xs text-slate-500">Featured displays</div>
            </div>
          </div>

          {/* Department 2 - Apparel */}
          <div className="absolute top-32 left-64 w-48 h-44 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-sm mb-2">[APPAREL DEPT]</div>
              <div className="space-y-1">
                <div className="h-6 bg-slate-200 border border-slate-300 flex items-center px-1 text-xs">Rack 1</div>
                <div className="h-6 bg-slate-200 border border-slate-300 flex items-center px-1 text-xs">Rack 2</div>
                <div className="h-6 bg-slate-200 border border-slate-300 flex items-center px-1 text-xs">Rack 3</div>
              </div>
            </div>
          </div>

          {/* Department 3 - Home Goods */}
          <div className="absolute top-96 left-8 w-48 h-40 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-sm mb-2">[HOME GOODS]</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 border-2 border-slate-300 bg-slate-100 flex items-center justify-center text-xs">Shelf A</div>
                <div className="h-20 border-2 border-slate-300 bg-slate-100 flex items-center justify-center text-xs">Shelf B</div>
              </div>
            </div>
          </div>

          {/* Department 4 - Accessories */}
          <div className="absolute top-96 left-64 w-48 h-40 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-sm mb-2">[ACCESSORIES]</div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-12 border border-slate-300 bg-slate-100"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Fitting Rooms */}
          <div className="absolute bottom-16 left-8 w-40 h-32 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 p-2">
              <div className="text-xs mb-2">[FITTING ROOMS]</div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-16 border-2 border-slate-400"></div>
                <div className="h-16 border-2 border-slate-400"></div>
                <div className="h-16 border-2 border-slate-400"></div>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-20 border-4 border-slate-700">
            <div className="h-full bg-white border-2 border-dashed border-slate-400 flex flex-col items-center justify-center">
              <div className="text-xs">[CUSTOMER]</div>
              <div className="text-xs">[SERVICE]</div>
              <div className="w-20 h-6 border border-slate-400 mt-1"></div>
            </div>
          </div>

          {/* Large Inventory/Storage */}
          <div className="absolute bottom-8 right-8 w-56 h-48 border-4 border-slate-700">
            <div className="h-full bg-slate-300 border-2 border-dashed border-slate-600 flex flex-col p-2">
              <div className="text-sm mb-2">[BACK OF HOUSE]</div>
              <div className="grid grid-cols-2 gap-2 flex-1">
                <div className="border-2 border-slate-500 bg-slate-400 flex items-center justify-center text-xs">Storage A</div>
                <div className="border-2 border-slate-500 bg-slate-400 flex items-center justify-center text-xs">Storage B</div>
                <div className="border-2 border-slate-500 bg-slate-400 flex items-center justify-center text-xs">Receiving</div>
                <div className="border-2 border-slate-500 bg-slate-400 flex items-center justify-center text-xs">Office</div>
              </div>
              <div className="text-xs text-slate-600 mt-2">Staff Only Area</div>
            </div>
          </div>

          {/* Aisles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-xs text-slate-400">
            ← Main Shopping Corridor →
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Layout Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Total Area:</div>
              <div className="text-slate-900">2500 sq ft (50' × 50')</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">POS Terminals:</div>
              <div className="text-slate-900">3+ terminals + self-checkout</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Departments:</div>
              <div className="text-slate-900">4 major zones</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Entrances:</div>
              <div className="text-slate-900">2 main entrances</div>
            </div>
            <div className="pb-2 border-b border-slate-200">
              <div className="text-slate-600 mb-1">Fitting Rooms:</div>
              <div className="text-slate-900">3 rooms</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Department Zones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="text-slate-400">1.</span>
              <span className="text-slate-700">Electronics - High-value items</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">2.</span>
              <span className="text-slate-700">Apparel - Clothing racks</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">3.</span>
              <span className="text-slate-700">Home Goods - Shelving units</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">4.</span>
              <span className="text-slate-700">Accessories - Small items</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Advanced Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-600">
            <p>• Multiple POS for high traffic</p>
            <p>• Self-checkout integration</p>
            <p>• Customer service desk</p>
            <p>• Department-level inventory tracking</p>
            <p>• Large receiving/storage area</p>
            <p>• Staff office space</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Custom Layout Wireframe
function CustomLayoutWireframe() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 border-4 border-slate-800 bg-slate-50 p-8" style={{ fontFamily: 'monospace' }}>
        <div className="relative border-2 border-dashed border-slate-400 p-8" style={{ height: '700px' }}>
          <div className="absolute -top-12 left-0 text-slate-900">
            CUSTOM LAYOUT WIREFRAME TEMPLATE
          </div>

          {/* Empty grid for custom planning */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          >
            {/* Placeholder elements */}
            <div className="absolute top-1/4 left-1/4 w-48 h-32 border-4 border-dashed border-slate-400 flex items-center justify-center text-slate-400">
              [Add Element]
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-dashed border-slate-400 flex items-center justify-center text-slate-400">
              [Add Element]
            </div>
            
            {/* Grid labels */}
            <div className="absolute top-2 left-2 text-xs text-slate-500 bg-white px-2 py-1 border border-slate-300">
              Grid: 40px × 40px
            </div>
          </div>

          {/* Dimension helpers */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-600 text-sm">
            ← Custom Width →
          </div>
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 -rotate-90 text-slate-600 text-sm">
            ← Custom Height →
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Custom Layout Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="p-3 bg-slate-100 border border-slate-300">
              <div className="text-slate-900 mb-2">Building Blocks:</div>
              <div className="space-y-1 text-slate-700">
                <div>□ Entrance/Exit points</div>
                <div>□ POS terminals</div>
                <div>□ Checkout counters</div>
                <div>□ Display tables</div>
                <div>□ Shelf units</div>
                <div>□ Storage areas</div>
                <div>□ Fitting rooms</div>
                <div>□ Customer service</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Planning Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Define store dimensions</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Mark entrance/exit locations</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Position checkout zone</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Plan traffic flow paths</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Allocate display areas</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Designate storage space</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-400">□</span>
              <span className="text-slate-700">Ensure ADA compliance</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-slate-600">
            <p>• Allow 4-5 ft for main aisles</p>
            <p>• 3-4 ft per checkout lane</p>
            <p>• Position high-margin items at eye level</p>
            <p>• Keep storage separate from customer areas</p>
            <p>• Ensure clear sight lines to exits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-600">
            <p className="mb-2">Use this template to:</p>
            <p>1. Sketch your unique layout</p>
            <p>2. Calculate square footage needs</p>
            <p>3. Plan POS terminal placement</p>
            <p>4. Optimize customer flow</p>
            <p className="mt-3 text-slate-900">Export to PDF for contractor/builder review</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
