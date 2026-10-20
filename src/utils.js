import React from 'react'
import htm from 'htm'
import {Chart,registerables} from 'chart.js'
import D from './data.json'
Chart.register(...registerables)
export {Chart,D}
export const html=htm.bind(React.createElement)
export const dark=matchMedia('(prefers-color-scheme: dark)').matches
Chart.defaults.color=dark?'#cbd5e1':'#475569';Chart.defaults.borderColor=dark?'#334155':'#e2e8f0';
export const P=['#0f766e','#d97706','#2563eb','#be123c','#7c3aed','#65a30d','#0891b2','#db2777','#6b7280','#ca8a04','#16a34a','#9333ea'];
export const f0=n=>n==null?'—':Number(n).toLocaleString('es-MX',{maximumFractionDigits:0});
export const f1=n=>n==null?'—':Number(n).toLocaleString('es-MX',{maximumFractionDigits:1});
export const pc=(a,b)=>b?a/b*100:0;
export const NAMES=D.sup.st.map(r=>r[0]);
export const R=(d,s)=>s<0?d.nat:d.st[s].slice(1);
export const am=(a)=>a.indexOf(Math.max(...a));
export const top=(d,fn,k=10)=>d.st.map((r,i)=>[r[0],fn(r.slice(1)),i]).sort((a,b)=>b[1]-a[1]).slice(0,k);
export const card='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800';
export const inp='rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900';
