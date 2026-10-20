import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp} from '../utils'
import {Chart_,bar,pie,Card,KPI} from './ui'
import {TABS} from '../tabs'
export function General({go}){
  const s=D.sup.nat,m=D.mod.nat,i=D.irr.nat,a=D.agua.nat,f=D.fuente.nat,fe=D.fert.nat;
  const tf=top(D.fert,r=>r[0],1)[0],tm=top(D.mod,r=>r[2],10),tt=top(D.fert,r=>r[0]);
  const ins=[
   `El territorio nacional suma ${f0(s[0])} ha; ${f1(pc(s[2],s[0]))}% tiene uso o vocación agropecuaria y ${f1(pc(s[3],s[0]))}% aprovechamiento forestal.`,
   `Hay ${f0(m[0])} unidades de producción activas, ${f0(m[1])} con actividad agrícola, sobre ${f0(m[2])} ha agrícolas.`,
   `Solo ${f1(pc(m[4],m[2]))}% de la superficie agrícola se riega (${f0(m[4])} ha); el ${f1(pc(m[6],m[2]))}% depende de la lluvia (temporal).`,
   `${f1(pc(i[2],m[1]))}% de las unidades agrícolas tienen riego. El método dominante es el riego por gravedad (${f1(i[3])}% de esas unidades), seguido del goteo (${f1(i[6])}%).`,
   `Entre grandes productores con riego (${f0(a[3])}), ${f1(pc(a[6],a[3]))}% usa agua blanca o potable y ${f1(pc(f[5],f[3]))}% extrae de pozo profundo (profundidad media ${f0(f[6])} m).`,
   `Se aplicaron ${f0(fe[0])} t de fertilizante químico; la urea representa ${f1(pc(fe[5],fe[0]))}%. El mayor volumen está en ${tf[0]} (${f0(tf[1])} t).`];
  return html`<div class="space-y-4"><div><h2 class="text-xl font-bold">Resumen general</h2><p class="text-sm text-slate-500 dark:text-slate-400">INEGI · Censo Agropecuario 2022 (oct 2021 – sep 2022) · Totales nacionales</p></div>
  <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><${KPI} l="Unidades de producción" v=${f0(m[0])}/><${KPI} l="Superficie agrícola (ha)" v=${f0(m[2])}/><${KPI} l="% superficie con riego" v=${f1(pc(m[4],m[2]))+'%'}/><${KPI} l="Fertilizante químico (t)" v=${f0(fe[0])}/></div>
  <div class="grid gap-4 xl:grid-cols-3">
   <${Card} title="Uso del territorio" sub="Hectáreas"><${Chart_} cfg=${pie(['Agropecuario','Forestal','Sin uso','Resto'],[s[2],s[3],s[4],s[5]])}/><//>
   <${Card} title="Riego vs temporal, top 10 estados" sub="Superficie agrícola (ha)"><${Chart_} cfg=${{type:'bar',data:{labels:tm.map(x=>x[0]),datasets:[{label:'Riego',data:tm.map(x=>D.mod.st[x[2]][5]),backgroundColor:P[2]},{label:'Temporal',data:tm.map(x=>D.mod.st[x[2]][7]),backgroundColor:P[1]}]},options:{maintainAspectRatio:false,indexAxis:'y',scales:{x:{stacked:true},y:{stacked:true}},plugins:{legend:{position:'bottom'}}}}}/><//>
   <${Card} title="Fertilizante: top 10 estados" sub="Toneladas"><${Chart_} cfg=${bar(tt.map(x=>x[0]),tt.map(x=>x[1]),{horiz:1,colors:P[5]})}/><//></div>
  <${Card} title="Hallazgos principales"><ul class="list-disc space-y-1.5 pl-5 text-sm">${ins.map(x=>html`<li>${x}</li>`)}</ul><//>
  <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${TABS.map(t=>html`<button onClick=${()=>go(t.id)} class=${card+' text-left transition hover:border-teal-500'}><p class="font-semibold">${t.label}</p><p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${t.desc}</p><p class="mt-2 text-xs text-teal-700 dark:text-teal-400">Ver sección →</p></button>`)}</div></div>`}
