# 🚀 Guía de Despliegue - Dimple E-commerce

## Opción 1: Google Cloud Run (Recomendado - Más Fácil)

### Paso 1: Crear una Cuenta en Google Cloud
1. Ve a https://console.cloud.google.com
2. Crea un nuevo proyecto llamado "dimple-ecommerce"
3. Habilita la API de Cloud Run

### Paso 2: Instalar Google Cloud CLI
```bash
# Windows
# Descarga: https://cloud.google.com/sdk/docs/install-windows

# macOS
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Linux
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### Paso 3: Autenticarse
```bash
gcloud auth login
gcloud config set project TU_PROJECT_ID
```

### Paso 4: Desplegar
```bash
cd c:/ecommerce-dimple

# Opción A: Desde la carpeta del proyecto
gcloud run deploy dimple-shop \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Opción B: Si tienes Dockerfile (más control)
gcloud run deploy dimple-shop \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

✅ ¡Tu sitio estará en línea en minutos!

---

## Opción 2: Google Cloud Storage + CDN (Más Barato)

### Paso 1: Compilar
```bash
npm run build
```

### Paso 2: Crear bucket
```bash
gsutil mb gs://dimple-shop-2024
```

### Paso 3: Subir archivos
```bash
gsutil -m cp -r dist/* gs://dimple-shop-2024
```

### Paso 4: Hacer público
```bash
gsutil iam ch allUsers:objectViewer gs://dimple-shop-2024
```

### Paso 5: Configurar como sitio web
```bash
gsutil web set -m index.html -e 404.html gs://dimple-shop-2024
```

✅ Tu sitio estará en: http://storage.googleapis.com/dimple-shop-2024/index.html

---

## Opción 3: Netlify (Más Simple)

### Paso 1: Crear Cuenta
1. Ve a https://netlify.com
2. Regístrate con GitHub/Email

### Paso 2: Conectar Repositorio
- Click en "New site from Git"
- Selecciona tu repositorio
- Netlify detectará automáticamente que es React

### Paso 3: Configurar Build
- Build command: `npm run build`
- Publish directory: `dist`

### Paso 4: Deploy
- Click "Deploy"

✅ Tu sitio estará en línea en minutos

---

## Opción 4: Vercel (Aún Más Simple)

### Paso 1: Crear Cuenta
1. Ve a https://vercel.com
2. Regístrate

### Paso 2: Importar Proyecto
- Click "New Project"
- Selecciona tu repositorio de GitHub
- Vercel configura automáticamente todo

### Paso 3: Deploy
- Click "Deploy"

✅ Automáticamente en: https://dimple-shop.vercel.app

---

## Opción 5: Heroku (Tradicional)

### Paso 1: Instalar Heroku CLI
```bash
# Windows
chocolatey install heroku-cli

# macOS
brew tap heroku/brew && brew install heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

### Paso 2: Autenticarse
```bash
heroku login
```

### Paso 3: Crear app
```bash
heroku create dimple-shop-2024
```

### Paso 4: Desplegar
```bash
git push heroku main
```

---

## Mi Recomendación

📌 **Para Principiantes:** Netlify o Vercel (más simple)
📌 **Para Producción:** Google Cloud Run (escalable)
📌 **Para Bajo Costo:** Google Cloud Storage

---

## Configuración de Dominio Personalizado

### Paso 1: Comprar Dominio
- GoDaddy, Namecheap, Google Domains, etc.

### Paso 2: Configurar DNS

**Para Netlify:**
- Ve a Settings → Domain Management
- Sigue las instrucciones para configurar DNS

**Para Vercel:**
- Ve a Settings → Domains
- Agrega tu dominio
- Sigue las instrucciones de DNS

**Para Google Cloud Run:**
- Crea un Cloud Load Balancer
- Configura DNS records CNAME

---

## Optimización de Imágenes para Producción

### Paso 1: Instalar herramienta
```bash
npm install -D vite-plugin-imagemin
```

### Paso 2: Actualizar vite.config.js
```javascript
import ImageminPlugin from 'vite-plugin-imagemin'

export default {
  plugins: [
    react(),
    ImageminPlugin()
  ]
}
```

### Paso 3: Rebuild
```bash
npm run build
```

---

## SEO y Google Search Console

### Paso 1: Registrarse
1. Ve a https://search.google.com/search-console
2. Agrega tu dominio

### Paso 2: Verificar Sitio
- Descarga el archivo HTML
- Coloca en la carpeta `public/`

### Paso 3: Enviar Sitemap
```bash
npm install --save-dev vite-plugin-sitemap
```

---

## Monitoreo y Análitica

### Google Analytics
```javascript
// En App.jsx
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    // Agregar script de Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args) { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'G-TU_ID_AQUI')
  }, [])
  
  return (...)
}
```

---

## Troubleshooting

### "Error de build"
```bash
rm -rf node_modules dist
npm install
npm run build
```

### "Puerto en uso"
```bash
npm run dev -- --port 3001
```

### "Problemas con imágenes después de desplegar"
- Usa rutas absolutas en vez de relativas
- O usa URLs completas de CDN

---

## Contáctame para Ayuda

Si necesitas ayuda con:
- ✅ Integración de pagos (Stripe, PayPal)
- ✅ Backend (Node.js, MongoDB)
- ✅ Dominio personalizado
- ✅ SSL/HTTPS
- ✅ Optimización de performance

📧 Email: support@dimple.com
💬 WhatsApp: +1 (555) 123-4567

---

**¡Tu tienda online está lista! 🚀🌸**
