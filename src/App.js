import {useState,useEffect,useRef} from 'react'
import {html,D,dark,P,f0,f1,pc,NAMES,R,am,top,card,inp} from './utils'
import {Chart_,bar,pie,Card,KPI} from './components/ui'
import {TABS} from './tabs'
import {Section} from './components/Section'
import {General} from './components/General'
import {Notes} from './components/Notes'
export function App(){const [tab,setTab]=useState('gen');const [sel,setSel]=useState(-1);
  const t=TABS.find(x=>x.id===tab);const label=tab==='gen'?'General':t.label;
  return html`<div class="mx-auto max-w-7xl p-4"><header class="mb-4 flex flex-wrap items-end justify-between gap-3"><div><h1 class="text-2xl font-bold">🌾 Dashboard Agropecuario México</h1><p class="text-sm text-slate-500 dark:text-slate-400">Agua, superficie y fertilizantes · Censo Agropecuario 2022</p></div>
   ${tab!=='gen'&&html`<label class="text-sm">Entidad: <select class=${inp} value=${sel} onChange=${e=>setSel(+e.target.value)}><option value="-1">Nacional</option>${NAMES.map((n,i)=>html`<option value=${i}>${n}</option>`)}</select></label>`}</header>
  <nav class="mb-4 flex gap-1 overflow-x-auto border-b border-slate-200 dark:border-slate-700">${[{id:'gen',label:'General'},...TABS].map(x=>html`<button onClick=${()=>setTab(x.id)} class=${'whitespace-nowrap px-3 py-2 text-sm font-medium '+(tab===x.id?'border-b-2 border-teal-600 text-teal-700 dark:text-teal-400':'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200')}>${x.label}</button>`)}</nav>
  <div class="grid gap-4 lg:grid-cols-[1fr_300px]"><main class="min-w-0">${tab==='gen'?html`<${General} go=${setTab}/>`:html`<${Section} t=${t} sel=${sel}/>`}</main><${Notes} tab=${label}/></div>
  <footer class="mt-6 text-xs text-slate-400">Fuente: INEGI, Censo Agropecuario 2022. Grandes productores: cuestionario ampliado.</footer></div>`}
