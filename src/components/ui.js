import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp,Chart} from '../utils'
export function Chart_({cfg,h=300}){const ref=useRef();
  useEffect(()=>{const c=new Chart(ref.current,cfg);return()=>c.destroy()},[JSON.stringify(cfg)]);
  return html`<div style=${{height:h}}><canvas ref=${ref}></canvas></div>`}
export const bar=(labels,vals,o={})=>({type:'bar',data:{labels,datasets:[{data:vals,backgroundColor:o.colors||P[0],borderRadius:4}]},
  options:{indexAxis:o.horiz?'y':'x',maintainAspectRatio:false,plugins:{legend:{display:false}}}});
export const pie=(labels,vals)=>({type:'doughnut',data:{labels,datasets:[{data:vals,backgroundColor:P,borderWidth:0}]},
  options:{maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}});
export const Card=({title,sub,children,right})=>html`<div class=${card}><div class="mb-3 flex items-start justify-between gap-2"><div><h3 class="font-semibold">${title}</h3>${sub&&html`<p class="text-xs text-slate-500 dark:text-slate-400">${sub}</p>`}</div>${right}</div>${children}</div>`;
export const KPI=({l,v})=>html`<div class=${card}><p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">${l}</p><p class="mt-1 text-2xl font-bold text-teal-700 dark:text-teal-400">${v}</p></div>`;
