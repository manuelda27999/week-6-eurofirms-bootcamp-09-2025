# Semana 6 – Proyecto básico individual (React + Vite)

Catálogo de productos en React que sirve como introducción práctica a componentes, props, renderizado de listas y estilos básicos. La actividad parte de un dataset estático y compone una vista con cabecera, listado de productos (tarjetas) y pie de página.

---

# 1. Descripción General

- Modalidad: individual
- Duración: 1 semana (Week 6).
- Temática: catálogo para un negocio u organización ficticia.
- Objetivo: aplicar React + Vite para construir un MVP estático con estructura clara y estilos consistentes; preparar el terreno para la actividad avanzada (carrito básico).

---

# 2. Estructura por Fases

## 🔹 Fase 1 – Actividad inicial, lista de productos

> Objetivo: Montar la composición base con componentes y estilos iniciales. Resultado: MVP estático que renderiza tarjetas de producto a partir de un dataset local.
> 

### 📂 Secciones obligatorias (componentes)

- `Header` → cabecera de la página.
- `Products` → sección que consume los datos y mapea tarjetas.
- `Product` → tarjeta con nombre, categoría, descripción, precio e imagen.
- `Footer` → pie de página.

> Buenas prácticas: etiquetas semánticas (header, main, section, footer), alt descriptivo para imágenes, key estable al mapear.
> 

### 📂 Estructura mínima del proyecto

```bash
initial-activity/├─ index.html
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

### Restricciones (Fase 1)

- React + Vite; sin frameworks CSS (Bootstrap/Tailwind), estilos en `src/index.css`.
- Sin estilos inline; preferir clases y un CSS simple y consistente.
- Evitar manipulación directa del DOM; usar JSX y props.

### ✅ Checklist JSX/Componentes

- Se renderiza un listado desde `data/data.jsx` con al menos 10 productos.
- Estructura semántica (header/main/section/footer) y jerarquía de títulos clara.
- Cada tarjeta muestra: nombre, categoría, descripción, precio e imagen con `alt`.
- `key` estable al iterar (por ejemplo, `product.id`).
- Sin warnings/errores en consola.

### ✅ Checklist CSS

- Hoja externa `src/index.css` enlazada por Vite.
- Estilos consistentes (márgenes, padding, tipografía, colores y espaciado).
- Layout de las tarjetas legible en distintos anchos (columnar por defecto).
- Uso de Flexbox o Grid en el layout de producto(s).

### ♿ Accesibilidad mínima

- Todas las imágenes con `alt` descriptivo.
- Orden y jerarquía de encabezados (un `h1` global y `h2`/`h3` en secciones).
- Contraste suficiente en textos/botones.

---

## **🧩 Fase 2 – Actividad Avanzada: Carrito de Compras con funcionalidad**

> Extensión del proyecto de catálogo de productos.
> 

> El objetivo es convertir el MVP estático en una aplicación interactiva donde el usuario pueda
> 
> 
> **mostrar, añadir y eliminar productos del carrito**
> 

---

### **⚙️ Fase 2.1 – Botón y ventana emergente (Pop-up)**

**🎯 Objetivo:**

> Implementar un **botón flotante 🛒** que permita **mostrar y ocultar el carrito** mediante un pop-up o panel lateral.
> 

**📋 Requisitos:**

- Añadir un componente ShoppingCart.jsx (carrito) y un botón flotante que lo active/desactive.
- El carrito puede mostrarse **vacío o con productos simulados** (array estático).
- El estado showCart controlará si el carrito está visible o no.
- Incluir un botón de cierre ❌ dentro del pop-up.

**🧠 Conceptos clave:**

- useState para controlar visibilidad.
- Condicionales en JSX para renderizar el carrito.
- Props para comunicación entre componentes.

**✅ Checklist:**

- Botón flotante visible en toda la página.
- Carrito aparece y desaparece correctamente.
- Sin errores ni advertencias en consola.
- Diseño limpio, coherente y funcional.

---

### **🧠 Fase 2.2 – Añadir productos al carrito**

**🎯 Objetivo:**

> Permitir al usuario **añadir productos reales del catálogo** al carrito con un botón en cada tarjeta.
> 

**📋 Requisitos:**

- Botón “Add to cart” en cada producto.
- Función addToShoppingCart(product) que actualiza el estado.
- El carrito se actualiza dinámicamente mostrando los productos añadidos.
- El estado shoppingCart se mantiene en el componente padre (Products.jsx).
- El carrito recibe los productos mediante props.

**🧠 Conceptos clave:**

- Manejo de estado con useState.
- Comunicación entre componentes (padre → hijo).
- Renderizado dinámico con map.

**✅ Checklist:**

- Productos se añaden sin duplicar estructura.
- Carrito se actualiza en tiempo real.
- Flujo de interacción fluido y sin errores.

---

### **🧹 Fase 2.3 – Eliminar productos del carrito**

**🎯 Objetivo:**

> Permitir al usuario **eliminar productos** del carrito con un botón 🗑️ en cada elemento.
> 

**📋 Requisitos:**

- Cada producto dentro del carrito muestra un botón “Eliminar”.
- Función onDeleteProduct(index) actualiza el estado del carrito.
- El total (totalPrice) se recalcula automáticamente al eliminar un elemento.

**🧠 Conceptos clave:**

- Actualización inmutable del estado.
- Uso de índices o id como key.
- Cálculo de totales con reduce.

**✅ Checklist:**

- Eliminación individual funcional.
- Total actualizado automáticamente.
- Comportamiento coherente y sin errores.

---

### **📊 Criterios de evaluación (Definition of Done – Fase 2 completa)**

- La aplicación se ejecuta sin errores ni advertencias.
- El carrito aparece y desaparece correctamente.
- Los productos se añaden y eliminan correctamente.
- El total se calcula y actualiza automáticamente.
- La interfaz mantiene una estructura y UX claras.
- Se aplican buenas prácticas de React (componentes, props, estado, JSX limpio).

---

## 3. Recursos

- React Docs: https://react.dev/
- Vite Docs: https://vite.dev/guide/
- MDN HTML/ARIA: https://developer.mozilla.org/
- CSS Flexbox (CSS-Tricks): https://css-tricks.com/snippets/css/a-guide-to-flexbox/

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

## 6. Estructura de datos (dataset)

Cada producto incluye:

```jsx
{
  id: number,  name: string,  price: number,  description: string,  category: string,  imageUrl: string
}
```

El archivo `data/data.jsx` exporta un array `products` con al menos 10 elementos.