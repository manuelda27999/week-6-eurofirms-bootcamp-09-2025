# Week 6 – Initial Activity (React + Vite)

Catálogo de productos en React que sirve como introducción práctica a componentes, props, renderizado de listas y estilos básicos. La actividad parte de un dataset estático y compone una vista con cabecera, listado de productos (tarjetas) y pie de página.

---

## 1. Descripción General

- Modalidad: individual (opcional en parejas).
- Duración: 1 semana (Week 6).
- Temática: catálogo para un negocio u organización ficticia.
- Objetivo: aplicar React + Vite para construir un MVP estático con estructura clara y estilos consistentes; preparar el terreno para la actividad avanzada (carrito básico).

---

## 2. Estructura por Fases (adaptado a este proyecto)

### 🔹 Fase 1 – Estructura + Estilos (React + CSS)

> Objetivo: Montar la composición base con componentes y estilos iniciales. Resultado: MVP estático que renderiza tarjetas de producto a partir de un dataset local.

#### 📂 Secciones obligatorias (componentes)

- `Header` → cabecera de la página.
- `Products` → sección que consume los datos y mapea tarjetas.
- `Product` → tarjeta con nombre, categoría, descripción, precio e imagen.
- `Footer` → pie de página.

> Buenas prácticas: etiquetas semánticas (header, main, section, footer), `alt` descriptivo para imágenes, `key` estable al mapear.

#### 📂 Estructura mínima del proyecto

```bash
initial-activity/
├─ index.html
├─ data/
│  └─ data.jsx            # dataset con ~10 productos
├─ src/
│  ├─ App.jsx             # composición de Header, Products, Footer
│  ├─ index.css           # hoja de estilos compartida
│  ├─ main.jsx            # bootstrap de React + Vite
│  └─ components/
│     ├─ Header.jsx
│     ├─ Products.jsx     # mapea el dataset a <Product />
│     ├─ Product.jsx      # tarjeta de producto
│     └─ Footer.jsx
├─ public/                # (opcional) estáticos
└─ README.md
```

#### Restricciones (Fase 1)

- React + Vite; sin frameworks CSS (Bootstrap/Tailwind), estilos en `src/index.css`.
- Sin estilos inline; preferir clases y un CSS simple y consistente.
- Evitar manipulación directa del DOM; usar JSX y props.

#### ✅ Checklist JSX/Componentes

- Se renderiza un listado desde `data/data.jsx` con al menos 10 productos.
- Estructura semántica (header/main/section/footer) y jerarquía de títulos clara.
- Cada tarjeta muestra: nombre, categoría, descripción, precio e imagen con `alt`.
- `key` estable al iterar (por ejemplo, `product.id`).
- Sin warnings/errores en consola.

#### ✅ Checklist CSS

- Hoja externa `src/index.css` enlazada por Vite.
- Estilos consistentes (márgenes, padding, tipografía, colores y espaciado).
- Layout de las tarjetas legible en distintos anchos (columnar por defecto).

#### ♿ Accesibilidad mínima

- Todas las imágenes con `alt` descriptivo.
- Orden y jerarquía de encabezados (un `h1` global y `h2`/`h3` en secciones).
- Contraste suficiente en textos/botones.

---

### 🔹 Fase 2 – Responsive (CSS puro) + pequeños toques de JS

> Objetivo: asegurar que la vista del catálogo es usable en móvil, tablet y escritorio usando media queries y Flexbox/Grid. Opcional: interacciones suaves (p. ej., hover states, enfoque visible).

#### 📂 Alcance y reglas

- Mantener la composición actual; no convertir en SPA multipágina.
- Sin frameworks CSS; solo CSS puro (media queries, Flexbox, Grid).
- Interacciones ligeras con React (sin complejidad de estado global).

#### ✅ Checklist Responsive (CSS)

- Media queries para 3 rangos: móvil, tablet y escritorio.
- Uso de Flexbox o Grid en el layout de producto(s).
- Imágenes fluidas (`max-width: 100%`) y espaciado adaptativo.
- Tipografía escalable por breakpoint.

---

### 🔹 Fase 3 – Extensión opcional (prepara Advanced Activity)

> Objetivo: añadir una funcionalidad sencilla (p. ej., botón que “abre” un carrito simulado o contador de productos seleccionados). Esta fase es opcional aquí porque se aborda más a fondo en `advanced-activity`.

#### ✅ Checklist Interacción (opcional)

- Botón flotante “🛒” que muestra/oculta un panel.
- Estado local en React para controlar la visibilidad.
- Sin errores en consola, UX básica correcta (foco y cierre claros).

---

## 3. Recursos

- React Docs: https://react.dev/
- Vite Docs: https://vite.dev/guide/
- MDN HTML/ARIA: https://developer.mozilla.org/
- CSS Flexbox (CSS-Tricks): https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- (Opcional) Bootstrap: https://getbootstrap.com/

---

## 4. Criterios de aceptación (Definition of Done)

- Existen `App.jsx`, componentes (`Header`, `Products`, `Product`, `Footer`), `data/data.jsx`, `index.css`, `README.md`.
- Se renderizan todos los productos desde el dataset y se muestran sus campos clave.
- No hay errores en consola; el mapeo usa `key` estable.
- Estilos centralizados en `index.css` (sin inline), consistencia visual.
- Responsive básico funcionando en móvil, tablet y escritorio.

---

## 5. Cómo ejecutar el proyecto

```bash
npm install
npm run dev
# abre la URL que te indica Vite (p. ej., http://localhost:5173)
```

---

## 6. Trabajo en equipo (si aplica)

- Reparto sugerido: una persona por componente (Header/Products/Product/Footer).
- Archivos sensibles a conflictos: `src/index.css` y la composición en `App.jsx`.
- Guía rápida:
  - Acordar prefijos de clase por sección (`.header-…`, `.products-…`, `.footer-…`).
  - Antes de editar CSS compartido: pull → editar → commit → pull → resolver conflictos → push.
  - Mantener reglas globales arriba del CSS y reglas específicas debajo; documentar decisiones brevemente.

---

## 7. Estructura de datos (dataset)

Cada producto incluye:

```js
{
  id: number,
  name: string,
  price: number,
  description: string,
  category: string,
  imageUrl: string
}
```

El archivo `data/data.jsx` exporta un array `products` con al menos 10 elementos.

---

## 8. Notas finales

- Este README está enfocado a la actividad inicial de Week 6. Para funcionalidades de carrito y mayor interactividad, consulta `Week-6/advanced-activity`.
