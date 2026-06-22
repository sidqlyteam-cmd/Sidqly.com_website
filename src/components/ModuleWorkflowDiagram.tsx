import React from 'react';
import { CheckCircle2, ArrowDown } from 'lucide-react';

interface ModuleWorkflowDiagramProps {
  steps: string[];
}

const ModuleWorkflowDiagram: React.FC<ModuleWorkflowDiagramProps> = ({ steps }) => {
  return (
    <div className="bg-sidqly-navy rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sidqly-green-emerald rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>

      <div className="mb-8 border-b border-white/10 pb-6 relative z-10 flex items-center justify-between">
        <div>
           <div className="text-sidqly-green-soft font-bold text-xs uppercase tracking-widest mb-1">Standardized Process</div>
           <div className="text-white font-extrabold text-2xl md:text-3xl">Workflow Steps</div>
        </div>
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
           <CheckCircle2 className="text-sidqly-green-emerald" />
        </div>
      </div>

      <div className="space-y-0 relative z-10 pl-2">
        <div className="absolute top-8 bottom-8 left-5 w-0.5 bg-gradient-to-b from-sidqly-green-emerald via-sidqly-green-soft to-white/10 hidden md:block"></div>

        {steps.map((step, i) => {
           const isOutput = i === steps.length - 1;
           const isReview = step.toLowerCase().includes('review') || step.toLowerCase().includes('check') || step.toLowerCase().includes('approve') || step.toLowerCase().includes('reject');

           return (
             <div key={i} className={`flex flex-col md:flex-row md:items-center gap-4 relative py-4 ${isOutput ? 'pb-0' : 'border-b border-white/5 md:border-none'}`}>

               <div className="hidden md:flex flex-shrink-0 w-6 h-6 rounded-full bg-sidqly-navy border-2 border-sidqly-green-emerald items-center justify-center z-10 shadow-[0_0_10px_rgba(21,128,61,0.5)]">
                 <div className={`w-2 h-2 rounded-full ${isReview ? 'bg-sidqly-gold' : isOutput ? 'bg-white' : 'bg-sidqly-green-soft'}`}></div>
               </div>

               <div className="flex md:hidden items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 text-white text-[10px] font-bold flex items-center justify-center">
                     {i + 1}
                  </div>
                  {isReview && <span className="text-[10px] bg-sidqly-gold/20 text-sidqly-gold px-2 py-0.5 rounded-full font-bold uppercase">Human Review</span>}
                  {isOutput && <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold uppercase">Output</span>}
               </div>

               <div className={`flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all hover:bg-white/10 border ${isReview ? 'border-sidqly-gold/30 shadow-[inset_2px_0_0_#d4af37]' : isOutput ? 'border-white/30 shadow-[inset_2px_0_0_#ffffff]' : 'border-white/5 shadow-[inset_2px_0_0_rgba(167,243,208,0.5)]'}`}>
                 <div className="flex justify-between items-center">
                   <span className="text-white font-medium capitalize text-sm md:text-base">{step}</span>
                   {isReview && <span className="hidden md:inline-block text-[10px] bg-sidqly-gold/20 text-sidqly-gold px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Review Stage</span>}
                   {isOutput && <span className="hidden md:inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Result</span>}
                 </div>
               </div>

               {!isOutput && (
                 <div className="md:hidden flex justify-center text-white/20 py-2">
                    <ArrowDown size={16} />
                 </div>
               )}
             </div>
           );
        })}
      </div>
    </div>
  );
};

export default ModuleWorkflowDiagram;