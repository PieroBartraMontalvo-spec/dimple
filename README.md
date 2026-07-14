# 🌸 Dimple - E-commerce de Ropa Interior

Página web de e-commerce moderna, responsiva y completamente funcional para vender ropa interior y ropa para mujeres. Construida con React, Vite y Tailwind CSS.

## ✨ Características

✅ **Responsive Design** - Funciona perfectamente en móvil, tablet y desktop
✅ **Catálogo Completo** - Múltiples categorías de productos
✅ **Carrito de Compras** - Funcional con actualización de cantidades
✅ **Filtros y Búsqueda** - Busca por nombre, categoría y precio
✅ **Detalles de Productos** - Colores, tallas y descripción
✅ **Favoritos** - Guarda tus productos favoritos
✅ **Optimizado para SEO** - Meta tags y estructura semántica
✅ **Diseño Moderno** - Interfaz elegante y atractiva

## 🚀 Instalación

### Requisitos
- Node.js 16+ 
- npm o yarn

### Pasos

1. **Clona o descarga el proyecto**
```bash
cd ecommerce-dimple
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`

## 📦 Compilar para Producción

```bash
npm run build
```

Esto crea una carpeta `dist` con los archivos listos para desplegar.

## 🌐 Desplegar en Google Cloud

### Opción 1: Google Cloud Run (Recomendado)

1. **Instala Google Cloud CLI**
   https://cloud.google.com/sdk/docs/install

2. **Autentica con Google**
```bash
gcloud auth login
gcloud config set project TU_PROJECT_ID
```

3. **Crea un Dockerfile** (ya incluido)

4. **Despliega**
```bash
gcloud run deploy dimple --source . --platform managed --region us-central1 --allow-unauthenticated
```

### Opción 2: Google Cloud Storage + Cloud CDN

1. **Compila el proyecto**
```bash
npm run build
```

2. **Crea un bucket**
```bash
gsutil mb gs://tu-bucket-dimple
```

3. **Sube los archivos**
```bash
gsutil -m cp -r dist/* gs://tu-bucket-dimple
```

4. **Configura la URL pública**
```bash
gsutil iam ch serviceAccount:cloud-storage-analytics@system.gserviceaccount.com:objectViewer gs://tu-bucket-dimple
```

### Opción 3: Netlify (Más Simple)

1. Ve a https://netlify.com
2. Conecta tu repositorio GitHub
3. Configura el build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. ¡Listo! Tu sitio estará en línea

### Opción 4: Vercel

1. Ve a https://vercel.com
2. Importa tu proyecto
3. Vercel configurará automáticamente todo
4. Tu sitio estará disponible en una URL de Vercel

## 📱 Estructura del Proyecto

```
ecommerce-dimple/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas principales
│   ├── data/             # Datos de productos
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entrada de la app
│   ├── store.js          # Estado global (Zustand)
│   └── index.css         # Estilos globales
├── public/               # Archivos estáticos
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
└── package.json          # Dependencias
```

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.js` en la sección de colores:
```javascript
colors: {
  pink: {
    500: '#tu-color',
    600: '#tu-color',
  },
}
```

### Agregar Productos
Edita `src/data/products.js` y agrega nuevos productos al array.

### Cambiar Nombre/Logo
Busca "Dimple" en:
- `index.html`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`

## 💳 Integración de Pagos

Actualmente el carrito es totalmente funcional pero necesita integración de un proveedor de pagos.

**Opciones recomendadas:**
- Stripe (https://stripe.com)
- PayPal (https://paypal.com)
- MercadoPago
- Conekta

Contacta si necesitas ayuda con la integración.

## 📊 Analytics y SEO

Para mejorar el posicionamiento en Google:

1. **Google Search Console** - Registra tu sitio
2. **Google Analytics** - Agrega código de seguimiento
3. **Meta Tags** - Ya están optimizados en `index.html`

## 🐛 Troubleshooting

### El sitio no carga
- Verifica que tengas Node.js instalado: `node --version`
- Instala dependencias: `npm install`
- Borra node_modules y reinstala: `rm -rf node_modules && npm install`

### Problemas con el build
```bash
npm run build
```

### Puerto 3000 en uso
```bash
npm run dev -- --port 3001
```

## 📞 Soporte

Para soporte técnico o preguntas sobre customización, contacta:
- 📧 Email: support@dimple.com
- 💬 WhatsApp: +1 (555) 123-4567

## 📄 Licencia

© 2024 Dimple. Todos los derechos reservados.

---

**¡Gracias por usar Dimple! 🌸**
