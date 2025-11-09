# 🌍 Countries App — Prueba Técnica Frontend (Vue.js + TypeScript)

Aplicación desarrollada como parte de la prueba técnica para el rol de **Desarrollador Front-End**.

Este proyecto consume la API pública de países **REST Countries** para mostrar un listado paginado, buscador y detalles de cada país.

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|------|
| **Vue 3 + Composition API** | UI principal |
| **TypeScript** | Tipado estático y mantenimiento |
| **Pinia** | Manejo de estado global |
| **Vue Router** | Navegación entre vistas |
| **TailwindCSS** | Estilos rápidos y consistentes |
| **Vitest + Vue Test Utils** | Tests unitarios |

---

## Estilos con TailwindCSS

Se eligió **TailwindCSS** porque permite:

- Crear interfaces limpias y modernas rápido.
- Reducir la cantidad de archivos CSS.
- Mantener consistencia visual mediante clases utilitarias.

Configurado a través del plugin oficial para Vite.

---

## Arquitectura del Proyecto

src/
│
├─ components/ # Componentes reutilizables
│ ├─ Navbar.vue
│ ├─ SearchInput.vue
│ └─ CountryInfoItem.vue
| └─ Pagination.vue
│
├─ pages/ # Vistas principales
│ ├─ Welcome.vue
│ ├─ CountriesList.vue
│ └─ CountryDetail.vue
│
├─ stores/ # Manejo global de estado (Pinia)
│ └─ countries.ts
│
├─ services/ # Consumo de API
│ └─ countriesService.ts
│
├─ router/ # Definición de rutas
│ └─ index.ts
│
└─ App.vue


---

## Decisiones Técnicas

| Decisión | Razón |
|---------|-------|
| Uso de **Pinia** en lugar de Vuex | Más sencillo, reactivo y moderno |
| Servicio `countriesService.ts` | Permite reutilizar y centralizar las llamadas a la API |
| Componente `CountryInfoItem.vue` | Evita repetir código en la vista de detalle |
| Componente `SearchInput.vue` con `v-model` | Facilita reutilización y limpieza en `CountriesList.vue` |

---

## Tests (Vitest)

Se escribieron tests unitarios sobre componentes clave:

| Componente | Lo que se prueba |
|-----------|------------------|
| `CountryInfoItem.vue` | Renderizar correctamente `label` y `value` |
| `SearchInput.vue` | Emisión correcta de `update:modelValue` con escritura |

### Ejecutar los tests

```sh
npm run test:unit
```
---

### Instalación y Ejecución

```sh
npm install
npm run dev 
```

---

### Build de producción:

```sh
npm run build
```

---

### Archivo de Tipado para .vue
```sh
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

TypeScript no entiende archivos .vue por defecto.
Este archivo le dice a TypeScript cómo tiparlos, evitando errores como:

Cannot find module '*.vue'
```

---

### Requisitos de Node.js
Esta aplicación fue desarrollada utilizando Node.js versión 20.18.0.
Por lo tanto, se recomienda ejecutar el proyecto usando Node 20.18.0 o una versión superior.

```sh
Verificar versión de Node:
node -v
```

---

## Autor
**Anderson Yepes Bedoya**  
Desarrollador Front-End & UX/UI Designer
