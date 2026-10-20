# Dashboard Agropecuario México · Censo 2022
React 18 + Vite + Tailwind CSS 3 (PostCSS) + Chart.js.

    npm install
    npm run dev       # desarrollo
    npm run build     # producción -> dist/ (subir a Netlify, Vercel, GitHub Pages, etc.)
    npm run preview   # probar el build

Datos: src/data.json (generado con prepare_data.py a partir de los 6 Excel del INEGI; ajusta las rutas del script).
Estructura: src/utils.js, src/tabs.js (configuración de pestañas), src/components/*, src/App.js.
