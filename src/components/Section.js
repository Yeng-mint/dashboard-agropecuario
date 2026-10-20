import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp} from '../utils'
import {Chart_,bar,pie,Card,KPI} from './ui'
import {Muni} from './Muni'
export function Section({t,sel}){const d=D[t.ds];const [ri,setRi]=useState(0);useEffect(()=>setRi(0),[t.id]);
  const r=R(d,sel),c=t.comp(r),tp=top(d,t.rank[ri][1]);
  return html`<div class="space-y-4"><div><h2 class="text-xl font-bold">${t.title}</h2><p class="text-sm text-slate-500 dark:text-slate-400">${t.desc} · ${sel<0?'Nacional':NAMES[sel]}</p></div>
  <div class="grid gap-3 sm:grid-cols-3">${t.kpis(r).map(k=>html`<${KPI} l=${k[0]} v=${k[1]}/>`)}</div>
  <div class="grid gap-4 xl:grid-cols-2">
  <${Card} title=${t.compT} sub=${sel<0?'Total nacional':NAMES[sel]}><${Chart_} cfg=${c.type==='pie'?pie(c.l,c.v):bar(c.l,c.v,{horiz:c.horiz})} h=${c.horiz?360:300}/><//>
  <${Card} title=${t.rankT+' por: '} right=${html`<select class=${inp} value=${ri} onChange=${e=>setRi(+e.target.value)}>${t.rank.map((x,i)=>html`<option value=${i}>${x[0]}</option>`)}</select>`}>
   <${Chart_} cfg=${bar(tp.map(x=>x[0]),tp.map(x=>x[1]),{horiz:1,colors:tp.map(x=>x[2]===sel?P[1]:P[0])})} h=${360}/><//></div>
  ${d.mu.length>0&&html`<${Muni} t=${t} sel=${sel}/>`}</div>`}
