import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DashboardView } from './wireframe/DashboardView';
import { POSView } from './wireframe/POSView';
import { InventoryView } from './wireframe/InventoryView';
import { EcommerceView } from './wireframe/EcommerceView';
import { CRMView } from './wireframe/CRMView';
import { ReportsView } from './wireframe/ReportsView';

export function SystemWireframe() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-slate-900">System Wireframe Prototype</h2>
        <p className="text-slate-600">Interactive demonstration of all system modules</p>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <div className="border-b border-slate-200 px-6">
          <TabsList className="h-auto p-0 bg-transparent">
            <TabsTrigger value="dashboard" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="pos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              POS System
            </TabsTrigger>
            <TabsTrigger value="inventory" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              Inventory
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              E-commerce
            </TabsTrigger>
            <TabsTrigger value="crm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              CRM
            </TabsTrigger>
            <TabsTrigger value="reports" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent">
              Reports
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="dashboard" className="mt-0">
            <DashboardView />
          </TabsContent>

          <TabsContent value="pos" className="mt-0">
            <POSView />
          </TabsContent>

          <TabsContent value="inventory" className="mt-0">
            <InventoryView />
          </TabsContent>

          <TabsContent value="ecommerce" className="mt-0">
            <EcommerceView />
          </TabsContent>

          <TabsContent value="crm" className="mt-0">
            <CRMView />
          </TabsContent>

          <TabsContent value="reports" className="mt-0">
            <ReportsView />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
