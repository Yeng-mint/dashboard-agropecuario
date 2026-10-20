import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp} from '../utils'
import {Chart_,bar,pie,Card,KPI} from './ui'
export function Notes({tab}){
  const ld=()=>{try{return JSON.parse(localStorage.getItem('notas-censo')||'[]')}catch(e){return[]}};
  const [ns,setNs]=useState(ld);const [t,setT]=useState('');
  const save=n=>{setNs(n);try{localStorage.setItem('notas-censo',JSON.stringify(n))}catch(e){}};
  const add=()=>{if(!t.trim())return;save([{id:Date.now(),tab,text:t.trim(),at:new Date().toLocaleString('es-MX')},...ns]);setT('')};
  return html`<aside class=${card+' lg:sticky lg:top-4'}><h3 class="font-semibold">📝 Mis notas</h3><p class="mb-2 text-xs text-slate-500 dark:text-slate-400">Se guardan en tu navegador y se etiquetan con la pestaña actual.</p>
  <textarea class=${inp+' w-full'} rows="4" placeholder="Escribe una observación…" value=${t} onInput=${e=>setT(e.target.value)}></textarea>
  <button onClick=${add} class="mt-2 w-full rounded-lg bg-teal-700 py-1.5 text-sm font-medium text-white hover:bg-teal-800">Agregar nota</button>
  <div class="mt-3 max-h-[50vh] space-y-2 overflow-y-auto">${ns.length===0&&html`<p class="text-sm text-slate-400">Aún no hay notas.</p>`}
  ${ns.map(n=>html`<div class="rounded-lg bg-slate-100 p-2 text-sm dark:bg-slate-900"><div class="flex justify-between text-xs text-slate-500"><span>${n.tab} · ${n.at}</span><button onClick=${()=>save(ns.filter(x=>x.id!==n.id))} title="Eliminar">✕</button></div><p class="mt-1 whitespace-pre-wrap">${n.text}</p></div>`)}</div></aside>`}
