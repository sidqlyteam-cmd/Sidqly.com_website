import React, { useState, useEffect } from 'react';
import type {
  Node,
  Edge,
} from '@xyflow/react';
import {
  ReactFlow,
  Controls,
  Background,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';
import { workflows } from '../../data/workflows';
import type { WorkflowNode } from '../../data/workflows';
import {
  ChevronRight,
  ChevronLeft,
  Layers,
  User,
  LogIn,
  LogOut,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const elk = new ELK();

interface WorkflowVisualizerProps {
  initialWorkflowId: string;
}

export const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = ({ initialWorkflowId }) => {
  const [activeWorkflowId, setActiveWorkflowId] = useState(initialWorkflowId);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const activeWorkflow = workflows.find(w => w.id === activeWorkflowId) || workflows[0];

  // Screen check for mobile vertical timeline list fallback
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync selected node with the current step index
  useEffect(() => {
    if (activeWorkflow && activeWorkflow.nodes[activeStepIndex]) {
      setSelectedNode(activeWorkflow.nodes[activeStepIndex]);
    }
  }, [activeStepIndex, activeWorkflowId]);

  // Compute graph layouts automatically via ELKjs
  useEffect(() => {
    if (isMobile) return;

    const elkNodes = activeWorkflow.nodes.map(n => ({
      id: n.id,
      width: 170,
      height: 70
    }));

    const elkEdges = activeWorkflow.edges.map(e => ({
      id: e.id,
      sources: [e.source],
      targets: [e.target]
    }));

    const graph = {
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "RIGHT",
        "elk.layered.spacing.nodeSelfLoop": "20",
        "spacing.nodeNode": "40",
        "spacing.edgeNode": "30"
      },
      children: elkNodes,
      edges: elkEdges
    };

    elk.layout(graph)
      .then(layouted => {
        const flowNodes: Node[] = activeWorkflow.nodes.map(n => {
          const lNode = layouted.children?.find(c => c.id === n.id);
          const isSelected = selectedNode?.id === n.id;

          let statusBg = 'bg-white border-gray-200';
          if (n.status === 'Completed') statusBg = 'bg-[#ecfdf5] border-sidqly-green-emerald';
          if (n.status === 'In Progress') statusBg = 'bg-amber-50 border-amber-500';
          if (isSelected) statusBg = 'bg-white border-[#0f4d3e] ring-4 ring-sidqly-green-soft/30';

          return {
            id: n.id,
            position: { x: lNode?.x || 0, y: lNode?.y || 0 },
            data: {
              label: (
                <div
                  className={`p-3 rounded-2xl border text-left transition-all ${statusBg}`}
                  onClick={() => {
                    const idx = activeWorkflow.nodes.findIndex(item => item.id === n.id);
                    if (idx !== -1) setActiveStepIndex(idx);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.label}, Role: ${n.role}, Status: ${n.status}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      const idx = activeWorkflow.nodes.findIndex(item => item.id === n.id);
                      if (idx !== -1) setActiveStepIndex(idx);
                    }
                  }}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 flex justify-between items-center mb-1">
                    <span>{n.role}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      n.status === 'Completed' ? 'bg-sidqly-green-emerald' : n.status === 'In Progress' ? 'bg-amber-500' : 'bg-gray-300'
                    }`}></span>
                  </div>
                  <div className="font-extrabold text-xs text-sidqly-navy truncate">{n.label}</div>
                </div>
              )
            },
            style: { width: 170, padding: 0, border: 'none', background: 'transparent' }
          };
        });

        const flowEdges: Edge[] = activeWorkflow.edges.map(e => ({
          id: e.id,
          source: e.source,
          target: e.target,
          animated: true,
          style: { stroke: '#15803d', strokeWidth: 2 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#15803d'
          }
        }));

        setNodes(flowNodes);
        setEdges(flowEdges);
      })
      .catch(err => {
        console.error("ELKjs Layout Error:", err);
      });
  }, [activeWorkflowId, selectedNode, isMobile]);

  const handleNextStep = () => {
    if (activeStepIndex < activeWorkflow.nodes.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col min-h-[600px]">

      {/* Workflow Selection Tabs */}
      <div className="bg-sidqly-ivory border-b border-gray-100 p-4 overflow-x-auto flex gap-2">
        {workflows.map((flow) => (
          <button
            key={flow.id}
            onClick={() => {
              setActiveWorkflowId(flow.id);
              setActiveStepIndex(0);
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
              activeWorkflowId === flow.id
                ? 'bg-sidqly-green-deep text-white shadow-sm'
                : 'bg-white text-gray-500 border border-gray-200 hover:text-sidqly-navy'
            }`}
          >
            {flow.title}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 flex-grow">

        {/* Step-by-Step Interactive Details Panel (A11y Compliant) */}
        <div className="lg:col-span-1 border-r border-gray-100 p-8 flex flex-col justify-between bg-[#fcfdfe]">
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sidqly-green-soft/30 text-sidqly-green-deep text-[10px] font-bold uppercase tracking-wider mb-2">
                <Layers size={12} /> Step {activeStepIndex + 1} of {activeWorkflow.nodes.length}
              </span>
              <h3 className="text-2xl font-extrabold text-sidqly-navy mb-2">
                {selectedNode?.label}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {selectedNode?.description}
              </p>
            </div>

            {selectedNode && (
              <div className="space-y-4 border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep shrink-0">
                    <User size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Responsible Role</div>
                    <div className="text-xs font-bold text-sidqly-navy">{selectedNode.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep shrink-0">
                    <LogIn size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Step Input</div>
                    <div className="text-xs font-bold text-sidqly-navy">{selectedNode.input}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep shrink-0">
                    <LogOut size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Step Output</div>
                    <div className="text-xs font-bold text-sidqly-navy">{selectedNode.output}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sidqly-ivory flex items-center justify-center text-sidqly-green-deep shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Process Status</div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-1 ${
                      selectedNode.status === 'Completed'
                        ? 'bg-[#ecfdf5] text-sidqly-green-emerald'
                        : selectedNode.status === 'In Progress'
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {selectedNode.status}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Simple Step Navigation Controls */}
          <div className="flex gap-2 mt-8 border-t border-gray-50 pt-6">
            <button
              onClick={handlePrevStep}
              disabled={activeStepIndex === 0}
              className="flex-1 bg-white border border-gray-200 text-sidqly-navy hover:bg-sidqly-ivory disabled:opacity-30 disabled:cursor-not-allowed py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              aria-label="Previous step"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStepIndex === activeWorkflow.nodes.length - 1}
              className="flex-1 bg-sidqly-green-deep text-white hover:bg-sidqly-green-emerald disabled:opacity-30 disabled:cursor-not-allowed py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              aria-label="Next step"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Visual Board Panel */}
        <div className="lg:col-span-2 relative min-h-[450px] bg-slate-50 overflow-hidden flex flex-col justify-between">

          {/* Static SVG Fallback for crawler SEO and Accessibility inside noscript/low performance fallback */}
          <noscript>
            <div className="absolute inset-0 p-8 flex flex-col justify-center bg-white z-20 overflow-y-auto">
              <div className="font-bold text-xs text-red-500 uppercase tracking-widest mb-4">Static Fallback Diagram</div>
              <div dangerouslySetInnerHTML={{ __html: activeWorkflow.svgFallback }} />
              <div className="mt-8 border-t border-gray-100 pt-6">
                 <h4 className="font-bold text-sidqly-navy mb-4">Full Step-by-Step Overview:</h4>
                 <ol className="space-y-4 text-sm text-gray-600 list-decimal pl-5">
                   {activeWorkflow.nodes.map(item => (
                      <li key={item.id}>
                         <strong className="text-sidqly-navy">{item.label}</strong> ({item.role}) — {item.description}
                      </li>
                   ))}
                 </ol>
              </div>
            </div>
          </noscript>

          {isMobile ? (
            /* Mobile View: Simplified vertical step timeline */
            <div className="p-6 overflow-y-auto h-full max-h-[500px] bg-white">
              <div className="font-bold text-xs text-sidqly-green-deep uppercase tracking-widest mb-6">Vertical Process Overview</div>
              <div className="relative pl-6 space-y-6">
                 <div className="absolute top-2 bottom-2 left-2 w-0.5 bg-gray-100"></div>
                 {activeWorkflow.nodes.map((n, idx) => {
                    const isSelected = activeStepIndex === idx;
                    return (
                      <div
                        key={n.id}
                        onClick={() => setActiveStepIndex(idx)}
                        className={`relative cursor-pointer transition-all ${
                          isSelected ? 'scale-[1.02]' : 'opacity-70'
                        }`}
                      >
                         <div className={`absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white transition-colors ${
                           isSelected
                             ? 'border-sidqly-green-deep bg-sidqly-green-soft'
                             : n.status === 'Completed'
                             ? 'border-sidqly-green-emerald bg-[#ecfdf5]'
                             : 'border-gray-200'
                         }`}></div>
                         <div className={`p-4 rounded-xl border ${
                           isSelected ? 'bg-sidqly-ivory border-sidqly-green-soft shadow-sm' : 'bg-white border-gray-100'
                         }`}>
                            <div className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">{n.role}</div>
                            <div className="font-extrabold text-xs text-sidqly-navy">{n.label}</div>
                         </div>
                      </div>
                    );
                 })}
              </div>
            </div>
          ) : (
            /* Desktop/Standard View: Interactive Node-based React Flow Board */
            <div className="w-full h-full flex-grow relative" style={{ height: '480px' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                panOnScroll={false}
                preventScrolling={true}
              >
                <Controls showInteractive={false} className="bg-white border border-gray-100 rounded-lg shadow-sm" />
                <Background color="#cbd5e1" gap={16} size={1} />
              </ReactFlow>
            </div>
          )}

          {/* Text-based accessibility steps list under the workflow for Screen Readers (accessible DOM) */}
          <div className="sr-only">
             <h4>Process Steps Narrative</h4>
             <ul>
               {activeWorkflow.nodes.map(item => (
                  <li key={item.id}>
                     Step {item.id}: {item.label}. Owner: {item.role}. What happens: {item.description}. Inputs: {item.input}. Outputs: {item.output}.
                  </li>
               ))}
             </ul>
          </div>

          <div className="p-4 bg-sidqly-ivory border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider shrink-0">
             <span className="flex items-center gap-1.5"><HelpCircle size={14} className="text-sidqly-green-deep" /> Click nodes or use next/previous steps to inspect details.</span>
             <span className="hidden sm:inline-block">Status: {selectedNode?.status}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WorkflowVisualizer;
