# Dashboard Agropecuario México · Censo 2022
Tecnologias:
React 18 + Vite + Tailwind CSS 3 (PostCSS) + Chart.js.

    npm install
    npm run dev       # desarrollo
    npm run build     # despliege -> Render sitio estatico
    npm run preview   # probar el build

Datos: src/data.json (generado con prepare_data.py a partir de los 6 Excel del INEGI).
Estructura: src/utils.js, src/tabs.js (configuración de pestañas), src/components/*, src/App.js.

# Especificaciones de tecnologías:
 React 18: es la biblioteca que arma la interfaz con componentes reutilizables (Section, Muni, General, Notes, App). Maneja el estado de lo que el usuario cambia: la pestaña activa, el estado o entidad elegida, la métrica del ranking, la columna de la tabla y las notas. Cuando cambia alguno, React actualiza solo las partes afectadas. Eso es lo que hace al dashboard dinámico.
htm: permite escribir el HTML de cada componente dentro del JavaScript, con una sintaxis parecida a JSX, pero sin necesitar un paso de compilación extra para esa sintaxis.

 Tailwind CSS 3: es el sistema de estilos. En lugar de escribir archivos CSS, se aplican clases pequeñas directamente en los elementos (rounded-2xl, grid, text-sm). Se encarga de la cuadrícula adaptable a celular y escritorio, y del modo oscuro automático según el sistema del usuario. Va instalado como plugin de PostCSS, por lo que el resultado final es un CSS de unos 11 KB con solo las clases usadas.
PostCSS y Autoprefixer: procesan el CSS de Tailwind y agregan prefijos para que los estilos funcionen en distintos navegadores.

 Chart.js 4: dibuja las gráficas: dosnuts, barras y barras apiladas. Se encarga de las leyendas, los colores y los textos que aparecen al pasar el cursor.

# Manipulación de datos
 Python con openpyxl: el script prepare_data.py lee los 6 archivos Excel del INEGI, ubica las filas nacionales, estatales y municipales entre los encabezados de varios niveles, y limpia los valores.
JSON (src/data.json): es el resultado de ese proceso, con los datos ya ordenados. La aplicación lo carga directamente, así que no necesita servidor ni base de datos.
localStorage del navegador: guarda las notas del usuario. Cada persona ve solo las suyas, porque quedan en su propio navegador.

# Construcción y despliege del sitio web

Node.js y npm: instalan las dependencias del proyecto y ejecutan los comandos de desarrollo y compilación.
Vite: es la herramienta de construcción. En desarrollo ofrece recarga inmediata y, con npm run build, empaqueta, minimiza y optimiza todo en la carpeta dist/, lista para publicar.
