# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm ci

# Copia el código
COPY . .

# Build
RUN npm run build

# Etapa 2: Serve
FROM node:18-alpine

WORKDIR /app

# Instala serve para servir archivos estáticos
RUN npm install -g serve

# Copia los archivos compilados de la etapa anterior
COPY --from=builder /app/dist ./dist

# Puerto
EXPOSE 3000

# Comando para iniciar
CMD ["serve", "-s", "dist", "-l", "3000"]
