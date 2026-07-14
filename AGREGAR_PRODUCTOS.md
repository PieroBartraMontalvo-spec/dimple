# Guía: Cómo Agregar Más Productos

Este documento explica cómo agregar nuevos productos a tu tienda Dimple.

## Archivo de Productos

Los productos se encuentran en: `src/data/products.js`

## Estructura de un Producto

```javascript
{
  id: 1,                                    // ID único (debe ser diferente para cada producto)
  name: 'Conjunto Encaje Rosa',             // Nombre del producto
  category: 'conjuntos',                    // Categoría: 'brassieres', 'pants', 'conjuntos', 'accesorios'
  price: 59.90,                             // Precio en dólares
  image: 'https://...jpg',                  // URL de la imagen
  description: 'Descripción del producto',  // Descripción corta
  colors: ['rosa', 'negro', 'blanco'],      // Colores disponibles
  sizes: ['XS', 'S', 'M', 'L', 'XL'],       // Tallas disponibles
  rating: 4.8,                              // Calificación (0-5)
  reviews: 24,                              // Número de reseñas
}
```

## Ejemplo: Agregar un Nuevo Producto

### 1. Abre el archivo `src/data/products.js`

### 2. Agrega tu producto al final del array:

```javascript
{
  id: 13,
  name: 'Brasier Strapless',
  category: 'brassieres',
  price: 45.90,
  image: 'https://images.unsplash.com/photo-1600352811031-f59e6f68e96a?w=400&h=500&fit=crop',
  description: 'Brasier sin tirantes perfecto para vestidos sin espalda.',
  colors: ['negro', 'nude', 'blanco'],
  sizes: ['32B', '34B', '34C', '36B', '36C', '36D'],
  rating: 4.7,
  reviews: 18,
}
```

### 3. Guarda el archivo

¡Listo! El producto aparecerá automáticamente en tu tienda.

## Categorías Disponibles

```javascript
'brassieres'   // Sujetadores/Brasiers
'pants'        // Pantaletas/Panties
'conjuntos'    // Conjuntos y ropa de dormir
'accesorios'   // Medias, garters, etc.
```

## Dónde Obtener Imágenes

### Bancos de Imágenes Gratis:
- **Unsplash**: https://unsplash.com (mejor para ropa)
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com
- **Freepik**: https://freepik.com (algunas gratis)

### Pasos para Obtener una Imagen:

1. Ve a Unsplash o Pexels
2. Busca "women underwear" o "intimate clothing"
3. Abre la imagen
4. Click derecho → Copiar URL de imagen
5. Pega la URL en `image: 'URL_AQUI'`

### Opción: Usar Tus Propias Imágenes

Si quieres usar tus propias fotos:

1. Coloca la imagen en `public/images/`
2. En el producto usa: `image: '/images/tu-foto.jpg'`

## Guía de Precios

Para mantener consistencia:
- **Brasiers**: $35-$55
- **Panties**: $20-$30
- **Conjuntos**: $45-$75
- **Accesorios**: $15-$25

## Guía de Calificaciones

- ⭐⭐⭐⭐⭐ 4.8-5.0 = Excelente
- ⭐⭐⭐⭐ 4.0-4.7 = Muy Bueno
- ⭐⭐⭐ 3.0-3.9 = Bueno
- ⭐⭐ 2.0-2.9 = Regular

## Agregar Colores Específicos

Edita el array de `colors`:

```javascript
colors: ['rosa pastel', 'negro', 'rojo', 'nude', 'plateado']
```

Los colores se mostrarán como botones en la página del producto.

## Agregar Tallas

Edita el array de `sizes` según el tipo:

**Para Brasiers:**
```javascript
sizes: ['32A', '32B', '32C', '34A', '34B', '34C', '36B', '36C', '36D']
```

**Para Panties/Pants:**
```javascript
sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
```

**Para Accesorios:**
```javascript
sizes: ['Única']  // Talla única
```

## Ordenar Productos por ID

Los productos aparecen en el orden que establecen los IDs.
- ID 1 = Primer producto
- ID 2 = Segundo producto
- etc.

Para cambiar el orden, edita los IDs.

## Editar un Producto Existente

1. Abre `src/data/products.js`
2. Busca el producto por su `id`
3. Edita los campos que necesites
4. Guarda el archivo

```javascript
{
  id: 1,
  name: 'NUEVO NOMBRE',  // ← Cambiar
  category: 'conjuntos',
  price: 79.90,          // ← Cambiar precio
  // ... resto igual
}
```

## Eliminar un Producto

Simplemente borra el objeto del producto del array:

```javascript
// ANTES:
{
  id: 5,
  name: 'Brasier Sin Aros',
  // ...
},
{
  id: 6,
  name: 'Ropa de Dormir Rosa',
  // ...
},

// DESPUÉS (eliminamos id: 5):
{
  id: 6,
  name: 'Ropa de Dormir Rosa',
  // ...
},
```

## Agregar Categoría Nueva

Si necesitas una categoría nueva:

### 1. Edita `src/data/products.js`:

```javascript
export const categories = [
  // ... categorías existentes
  { id: 'medias', name: 'Medias', icon: '🧦' },  // ← Nueva
];
```

### 2. Agrega productos con esa categoría:

```javascript
{
  id: 99,
  name: 'Medias de Red Negras',
  category: 'medias',  // ← Usa la nueva categoría
  // ... resto igual
}
```

## Cambiar el Icono de Categoría

Edita el `icon` en el array de categorías:

```javascript
{ id: 'brassieres', name: 'Brassieres', icon: '👙' },  // Cambiar emoji
```

**Emojis útiles:**
- 👙 = Brasier
- 👖 = Pants
- 💄 = Conjunto
- ✨ = Accesorios
- 🧦 = Medias
- 💋 = Labios
- 💕 = Corazón
- 🎀 = Lazo
- ❤️ = Corazón rojo

## Guardar e Implementar Cambios

### En Modo Desarrollo:
El sitio se recarga automáticamente cuando guardas cambios.

### Para Producción:
```bash
npm run build
```

## Ejemplo Completo: Agregar 3 Productos Nuevos

```javascript
{
  id: 100,
  name: 'Tanga Deportiva',
  category: 'pants',
  price: 25.90,
  image: 'https://images.unsplash.com/photo-1490200246615-c934d9adcff1?w=400&h=500&fit=crop',
  description: 'Tanga cómoda para actividades físicas.',
  colors: ['negro', 'gris', 'blanco'],
  sizes: ['XS', 'S', 'M', 'L'],
  rating: 4.6,
  reviews: 15,
},

{
  id: 101,
  name: 'Brasier Push Up',
  category: 'brassieres',
  price: 52.90,
  image: 'https://images.unsplash.com/photo-1599643478941-9831a32bc5d3?w=400&h=500&fit=crop',
  description: 'Brasier push up con realce y soporte.',
  colors: ['rosa', 'negro'],
  sizes: ['32B', '32C', '34B', '34C', '36B', '36C'],
  rating: 4.9,
  reviews: 42,
},

{
  id: 102,
  name: 'Set Lencería Seductora',
  category: 'conjuntos',
  price: 65.90,
  image: 'https://images.unsplash.com/photo-1518739866257-7639e3e5b1f7?w=400&h=500&fit=crop',
  description: 'Set completo para momentos especiales.',
  colors: ['rojo', 'negro', 'blanco'],
  sizes: ['S', 'M', 'L'],
  rating: 4.8,
  reviews: 38,
},
```

## Tips Importantes

✅ **Siempre usa IDs únicos**
✅ **Las imágenes deben ser de HTTPS** (URLs seguras)
✅ **Los colores deben estar en minúsculas**
✅ **Las ratings deben estar entre 0 y 5**
✅ **Los precios sin decimales funcionan pero se recomienda usar .90**

---

## ¿Necesitas Ayuda?

Si tienes preguntas sobre:
- Agregar integraciones de pago
- Conectar base de datos
- Agregar más funcionalidades
- Optimizar performance

📧 Contáctame en: support@dimple.com

¡Happy selling! 🌸
