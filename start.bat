@echo off
setlocal enabledelayedexpansion

echo.
echo 🌸 Iniciando Dimple E-commerce...
echo.

REM Verificar si node_modules existe
if not exist node_modules (
    echo 📦 Instalando dependencias...
    call npm install
    echo.
)

REM Verificar si node existe
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Error: Node.js no está instalado
    echo 📥 Descarga desde: https://nodejs.org
    pause
    exit /b 1
)

REM Iniciar desarrollo
echo 🚀 Iniciando servidor de desarrollo...
echo 📱 La aplicación se abrirá en http://localhost:3000
echo 🛑 Presiona Ctrl+C para detener el servidor
echo.

call npm run dev

pause
