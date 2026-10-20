import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp} from '../utils'
import {Chart_,bar,pie,Card,KPI} from './ui'
export function Muni({t,sel}){const [sc,setSc]=useState(0);useEffect(()=>setSc(0),[t.id]);
  const d=D[t.ds],code=String(sel+1).padStart(2,'0');
  const rows=d.mu.filter(m=>sel<0||m[0]===code).sort((a,b)=>(b[2+t.mu[sc][1]]||0)-(a[2+t.mu[sc][1]]||0)).slice(0,10);
  return html`<${Card} title=${'Top 10 municipios'+(sel>=0?' de '+NAMES[sel]:' del país')} sub="Haz clic en una columna para ordenar">
  <div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="text-left text-slate-500"><th class="py-1">Municipio</th>
  ${t.mu.map((c,i)=>html`<th class=${'cursor-pointer py-1 text-right '+(i===sc?'text-teal-700 dark:text-teal-400':'')} onClick=${()=>setSc(i)}>${c[0]}${i===sc?' ▼':''}</th>`)}</tr></thead>
  <tbody>${rows.map(m=>html`<tr class="border-t border-slate-100 dark:border-slate-700"><td class="py-1">${m[1]}</td>${t.mu.map(c=>html`<td class="py-1 text-right tabular-nums">${f1(m[2+c[1]])}</td>`)}</tr>`)}</tbody></table></div><//>`}
