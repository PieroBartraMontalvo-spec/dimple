# ⚡ INICIO RÁPIDO - Dimple E-commerce

## 🚀 En 3 Pasos (5 minutos)

### Paso 1: Instalar y Ejecutar
```bash
cd c:/ecommerce-dimple
npm install
npm run dev
```

¡Tu tienda estará en http://localhost:3000! 🎉

---

## 📁 Estructura Importante

```
ecommerce-dimple/
├── src/
│   ├── pages/          ← Páginas (Home, Shop, Cart, etc.)
│   ├── components/     ← Componentes (Header, ProductCard, etc.)
│   ├── data/
│   │   └── products.js ← AQUÍ AGREGAR PRODUCTOS
│   └── App.jsx         ← App principal
└── README.md           ← Documentación completa
```

---

## 📝 Quick Tasks

### ➕ Agregar Producto
Edita `src/data/products.js` y agrega:
```javascript
{
  id: 13,
  name: 'Nuevo Producto',
  category: 'conjuntos',
  price: 49.90,
  image: 'https://...',
  description: 'Descripción',
  colors: ['rosa', 'negro'],
  sizes: ['S', 'M', 'L'],
  rating: 4.8,
  reviews: 10,
}
```

### 🛍️ Cambiar Nombre de Tienda
Busca "Dimple" y reemplaza en:
- `index.html`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`

### 🎨 Cambiar Colores (Rosa → Otro)
Edita `tailwind.config.js`:
```javascript
colors: {
  pink: {
    500: '#tu-color',
    600: '#tu-color',
  },
}
```

### 📦 Compilar para Producción
```bash
npm run build
```
Los archivos listos para subir están en la carpeta `dist/`.

---

## 🌐 Desplegar (Elige 1)

### Opción A: Google Cloud Run
```bash
gcloud run deploy dimple \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Opción B: Netlify
1. Ve a https://netlify.com
2. Conecta tu repositorio GitHub
3. Netlify hace el resto automáticamente

### Opción C: Vercel
1. Ve a https://vercel.com
2. Importa tu proyecto
3. ¡Listo! Tu sitio está en línea

---

## 🆘 Troubleshooting

| Problema | Solución |
|----------|----------|
| "npm not found" | Instala Node.js desde https://nodejs.org |
| Errores de compilación | `rm -rf node_modules && npm install` |
| Puerto 3000 en uso | `npm run dev -- --port 3001` |
| Cambios no se ven | Recarga la página (Ctrl+R) |

---

## 📱 Características

✅ Totalmente responsivo (móvil + desktop)
✅ Carrito funcional al 100%
✅ Filtros y búsqueda
✅ Favoritos
✅ 12 productos incluidos
✅ Listo para desplegar

---

## 📖 Documentación Completa

- `README.md` - Documentación general
- `GUIA_DESPLIEGUE.md` - Cómo subir a internet
- `AGREGAR_PRODUCTOS.md` - Cómo agregar más productos
- `QUICKSTART.md` - Este archivo

---

## 💬 ¿Preguntas?

Contacta:
- 📧 info@dimple.com
- 💬 WhatsApp: +1 (555) 123-4567

---

## ✨ ¡Listo para empezar!

```bash
cd c:/ecommerce-dimple
npm run dev
```

🎉 Tu tienda estará en línea en segundos.

---

**Próximo paso:** Lee `GUIA_DESPLIEGUE.md` para subir tu tienda a Google Cloud, Netlify o Vercel.
