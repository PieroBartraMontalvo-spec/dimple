#!/bin/bash
# Script de configuración inicial

echo "🌸 Bienvenido a Dimple E-commerce!"
echo ""
echo "Este script configurará tu proyecto. Presiona Enter para continuar..."
read

# Cambiar a la carpeta del proyecto
cd "$(dirname "$0")"

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado"
    echo "📥 Descarga desde: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ npm encontrado: $(npm --version)"
echo ""

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
else
    echo "✅ Dependencias ya instaladas"
    echo ""
fi

# Compilar
echo "🔨 Compilando proyecto..."
npm run build

echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "📖 Próximos pasos:"
echo ""
echo "1. Para desarrollo local:"
echo "   npm run dev"
echo ""
echo "2. Para ver guía de despliegue:"
echo "   cat GUIA_DESPLIEGUE.md"
echo ""
echo "3. Para agregar productos:"
echo "   cat AGREGAR_PRODUCTOS.md"
echo ""
echo "4. Documentación completa:"
echo "   cat README.md"
echo ""
echo "🚀 ¡Tu tienda está lista!"
