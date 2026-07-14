#!/bin/bash

# Script para iniciar el proyecto en modo desarrollo

echo "🌸 Iniciando Dimple E-commerce..."
echo ""

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

# Verificar si node existe
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado"
    echo "📥 Descarga desde: https://nodejs.org"
    exit 1
fi

# Iniciar desarrollo
echo "🚀 Iniciando servidor de desarrollo..."
echo "📱 La aplicación se abrirá en http://localhost:3000"
echo "🛑 Presiona Ctrl+C para detener el servidor"
echo ""

npm run dev
