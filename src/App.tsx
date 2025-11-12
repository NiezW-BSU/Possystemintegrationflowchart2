import React, { useState } from 'react';
import { ProcessFlowchart } from './components/ProcessFlowchart';
import { SystemWireframe } from './components/SystemWireframe';
import { SitePlanningWireframe } from './components/SitePlanningWireframe';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-slate-900">Integrated POS & E-commerce System</h1>
        <p className="text-slate-600">To-Be Process Flow & Wireframe Prototype</p>
      </header>
      
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="flowchart" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="flowchart">Process Flowchart</TabsTrigger>
            <TabsTrigger value="wireframe">System Wireframe</TabsTrigger>
            <TabsTrigger value="siteplanning">Site Planning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="flowchart" className="mt-0">
            <ProcessFlowchart />
          </TabsContent>
          
          <TabsContent value="wireframe" className="mt-0">
            <SystemWireframe />
          </TabsContent>

          <TabsContent value="siteplanning" className="mt-0">
            <SitePlanningWireframe />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
