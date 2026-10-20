import {createRoot} from 'react-dom/client'
import './index.css'
import {html} from './utils'
import {App} from './App'
createRoot(document.getElementById('root')).render(html`<${App}/>`)
