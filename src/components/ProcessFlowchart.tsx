import React from 'react';

export function ProcessFlowchart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-slate-900 mb-2">Process Flow Wireframe</h2>
        <p className="text-slate-600">Integrated POS & E-commerce To-Be Process</p>
      </div>

      {/* Wireframe Container */}
      <div className="border-4 border-slate-800 bg-slate-50 p-12" style={{ fontFamily: 'monospace' }}>
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-slate-700 px-6 py-3 bg-white">
            TO-BE PROCESS FLOW: INTEGRATED POS & E-COMMERCE SYSTEM
          </div>
        </div>

        {/* Step 1: Customer Entry Points */}
        <div className="mb-8">
          <div className="text-center mb-4 text-slate-600 text-sm">STEP 1: CUSTOMER ENTRY</div>
          <div className="flex justify-center gap-12">
            <div className="border-4 border-slate-700 p-6 bg-white w-64 text-center">
              <div className="text-sm mb-2">[CUSTOMER]</div>
              <div className="border-2 border-dashed border-slate-400 p-4 mb-3">
                <div className="text-xs">In-Store Visit</div>
              </div>
              <div className="text-xs text-slate-600">Enters physical retail location</div>
            </div>
            
            <div className="border-4 border-slate-700 p-6 bg-white w-64 text-center">
              <div className="text-sm mb-2">[CUSTOMER]</div>
              <div className="border-2 border-dashed border-slate-400 p-4 mb-3">
                <div className="text-xs">Online Visit</div>
              </div>
              <div className="text-xs text-slate-600">Accesses e-commerce website</div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="text-center text-2xl text-slate-400 my-6">↓</div>

        {/* Step 2: Transaction Processing */}
        <div className="mb-8">
          <div className="text-center mb-4 text-slate-600 text-sm">STEP 2: TRANSACTION PROCESSING</div>
          <div className="flex justify-center gap-12">
            <div className="border-4 border-slate-700 p-6 bg-white w-64">
              <div className="text-sm mb-3 text-center">[POS SYSTEM]</div>
              <div className="space-y-2 text-xs">
                <div className="border border-slate-400 p-2">1. Scan/add items</div>
                <div className="border border-slate-400 p-2">2. Apply discounts</div>
                <div className="border border-slate-400 p-2">3. Process payment</div>
                <div className="border border-slate-400 p-2">4. Print receipt</div>
              </div>
            </div>
            
            <div className="border-4 border-slate-700 p-6 bg-white w-64">
              <div className="text-sm mb-3 text-center">[E-COMMERCE]</div>
              <div className="space-y-2 text-xs">
                <div className="border border-slate-400 p-2">1. Browse catalog</div>
                <div className="border border-slate-400 p-2">2. Add to cart</div>
                <div className="border border-slate-400 p-2">3. Checkout</div>
                <div className="border border-slate-400 p-2">4. Payment gateway</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow down with merge */}
        <div className="text-center text-2xl text-slate-400 my-6">
          <div>↓</div>
          <div className="text-xs text-slate-600 my-2">Both channels feed into:</div>
        </div>

        {/* Step 3: Integrated Backend Systems */}
        <div className="mb-8">
          <div className="text-center mb-4 text-slate-600 text-sm">STEP 3: REAL-TIME SYSTEM INTEGRATION</div>
          <div className="border-4 border-slate-900 bg-slate-200 p-6">
            <div className="text-center mb-6 text-slate-900">
              ═══ INTEGRATED BACKEND SYSTEMS ═══
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {/* Inventory System */}
              <div className="border-2 border-slate-700 bg-white p-4">
                <div className="text-sm mb-3 border-b-2 border-slate-700 pb-2">[INVENTORY DB]</div>
                <div className="space-y-1 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Real-time stock update</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Product catalog</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Low stock alerts</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Cross-channel sync</span>
                  </div>
                </div>
              </div>

              {/* CRM System */}
              <div className="border-2 border-slate-700 bg-white p-4">
                <div className="text-sm mb-3 border-b-2 border-slate-700 pb-2">[CRM DATABASE]</div>
                <div className="space-y-1 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Customer profiles</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Purchase history</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Contact info</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Loyalty points</span>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="border-2 border-slate-700 bg-white p-4">
                <div className="text-sm mb-3 border-b-2 border-slate-700 pb-2">[ANALYTICS]</div>
                <div className="space-y-1 text-xs">
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Sales reports</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Inventory analytics</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Customer insights</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">□</span>
                    <span>Forecasting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="text-center text-2xl text-slate-400 my-6">↓</div>

        {/* Step 4: Automated Actions */}
        <div className="mb-8">
          <div className="text-center mb-4 text-slate-600 text-sm">STEP 4: AUTOMATED ACTIONS</div>
          <div className="grid grid-cols-4 gap-4">
            <div className="border-2 border-slate-600 bg-slate-100 p-4 text-center">
              <div className="text-xs mb-2">[AUTO]</div>
              <div className="text-xs">Inventory decreased</div>
            </div>
            <div className="border-2 border-slate-600 bg-slate-100 p-4 text-center">
              <div className="text-xs mb-2">[AUTO]</div>
              <div className="text-xs">Customer record updated</div>
            </div>
            <div className="border-2 border-slate-600 bg-slate-100 p-4 text-center">
              <div className="text-xs mb-2">[AUTO]</div>
              <div className="text-xs">Sales logged</div>
            </div>
            <div className="border-2 border-slate-600 bg-slate-100 p-4 text-center">
              <div className="text-xs mb-2">[AUTO]</div>
              <div className="text-xs">Reorder alert sent</div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="text-center text-2xl text-slate-400 my-6">↓</div>

        {/* Step 5: Outcomes */}
        <div>
          <div className="text-center mb-4 text-slate-600 text-sm">STEP 5: BUSINESS OUTCOMES</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-4 border-slate-700 bg-white p-5">
              <div className="text-sm mb-3 text-center border-b border-slate-400 pb-2">Management</div>
              <div className="space-y-1 text-xs">
                <div>• Access sales reports</div>
                <div>• Analyze trends</div>
                <div>• Adjust inventory</div>
                <div>• Plan promotions</div>
              </div>
            </div>

            <div className="border-4 border-slate-700 bg-white p-5">
              <div className="text-sm mb-3 text-center border-b border-slate-400 pb-2">Customer Experience</div>
              <div className="space-y-1 text-xs">
                <div>• Accurate stock info</div>
                <div>• Fast checkout</div>
                <div>• Order tracking</div>
                <div>• Personalized service</div>
              </div>
            </div>

            <div className="border-4 border-slate-700 bg-white p-5">
              <div className="text-sm mb-3 text-center border-b border-slate-400 pb-2">Operations</div>
              <div className="space-y-1 text-xs">
                <div>• Reduced errors</div>
                <div>• Time savings</div>
                <div>• Better forecasting</div>
                <div>• Unified data</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 pt-8 border-t-4 border-slate-700">
          <div className="text-sm mb-4 text-slate-900">LEGEND:</div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex gap-3">
              <div className="border-2 border-slate-700 w-16 h-8 bg-white"></div>
              <div>
                <div className="text-slate-900">User Action</div>
                <div className="text-slate-600">Manual process step</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="border-2 border-slate-700 w-16 h-8 bg-slate-200"></div>
              <div>
                <div className="text-slate-900">System Process</div>
                <div className="text-slate-600">Automated backend</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="border-2 border-slate-600 w-16 h-8 bg-slate-100"></div>
              <div>
                <div className="text-slate-900">Automated Action</div>
                <div className="text-slate-600">No user input required</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl text-slate-400">↓</div>
              <div>
                <div className="text-slate-900">Process Flow</div>
                <div className="text-slate-600">Direction of data/action</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Key Benefits Section */}
      <div className="mt-8 p-6 bg-slate-50 border-2 border-slate-300">
        <div className="text-sm text-slate-900 mb-4">KEY BENEFITS OF INTEGRATED SYSTEM:</div>
        <div className="grid grid-cols-2 gap-4 text-xs text-slate-700">
          <div>
            <div className="mb-1">→ Single source of truth for all data</div>
            <div className="mb-1">→ Eliminates manual data entry</div>
            <div className="mb-1">→ Real-time inventory across channels</div>
          </div>
          <div>
            <div className="mb-1">→ Unified customer experience</div>
            <div className="mb-1">→ Data-driven decision making</div>
            <div className="mb-1">→ Reduced operational errors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
