import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, ArrowRight } from 'lucide-react';

interface Props {
  links?: { title: string; url: string }[];
  className?: string;
}

const RelatedUseCases: React.FC<Props> = ({ links, className }) => {
  if (!links || links.length === 0) return null;
  return (
    <div className={`bg-white/5 rounded-2xl p-6 border border-white/10 md:col-span-2 mt-4 ${className || ''}`}>
        <h3 className="font-bold text-lg mb-4 text-sidqly-green-soft flex items-center gap-2"><LayoutTemplate size={18} /> Related Use Cases</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
             <li key={i}>
               <Link to={link.url} className="text-white hover:text-sidqly-green-emerald flex items-center gap-2 group text-sm font-medium">
                 <span className="group-hover:translate-x-1 transition-transform">{link.title}</span> <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </Link>
             </li>
          ))}
        </ul>
    </div>
  );
};

export default RelatedUseCases;
