# Mini E-Commerce Fullstack

Este proyecto es una aplicación de e-commerce completa con backend Node.js/Express y frontend React.

## 🚀 Características

- **Backend:** API REST con Node.js + Express
- **Frontend:** Aplicación React con Vite
- **Funcionalidades:** 
  - Lista de productos (FakeStore API)
  - Sistema de carrito de compras
  - Login básico
  - Búsqueda de productos
  - Persistencia en localStorage

## 📁 Estructura del Proyecto

```
ecommerce-project/
├── server/
│   ├── index.js
│   └── package.json
└── client/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🛠️ Configuración Local

### Backend (Node.js + Express)

1. Navega a la carpeta del servidor:
```bash
cd server
```

2. Instala dependencias:
```bash
npm install
```

3. Ejecuta el servidor:
```bash
npm start
```

El backend estará disponible en `http://localhost:3000`

### Frontend (React + Vite)

1. Navega a la carpeta del cliente:
```bash
cd client
```

2. Instala dependencias:
```bash
npm install
```

3. Ejecuta en modo desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 🌐 Despliegue en Render

### Backend - Web Service

1. **Crear Web Service:**
   - Conecta tu repositorio de GitHub
   - Apunta a la carpeta `/server`
   
2. **Configuración:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node

3. **Variables de entorno:**
   - `PORT` (se asigna automáticamente)

### Frontend - Static Site

1. **Crear Static Site:**
   - Conecta tu repositorio de GitHub
   - Apunta a la carpeta `/client`

2. **Configuración:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

## 🔧 Archivos de Configuración

### Backend - `server/package.json`
```json
{
  "name": "ecommerce-server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}
```

### Frontend - `client/vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: './',
});
```

## 📋 Endpoints de la API

### Backend Endpoints

- `GET /` - Health check
- `GET /api/products` - Lista de productos (mock data)
- `POST /api/login` - Autenticación

### Credenciales de prueba para login:
- **Email:** `test@correo.com`
- **Password:** `123456`

## 🔄 URLs de Ejemplo

Después del despliegue, tus URLs serán similares a:

- **Backend:** `https://ecommerce-backend-sjrm.onrender.com`
- **Frontend:** `https://ecommerce-frontend-abc123.onrender.com`

## 🛡️ Consideraciones Importantes

### Para el plan gratuito de Render:

1. **Cold Start:** Los servicios se "duermen" después de 15 minutos de inactividad
2. **Tiempo de respuesta:** El primer request puede tardar 30-60 segundos
3. **Límites:** 750 horas por mes en el plan gratuito

### Configuración del Frontend:

Asegúrate de que tu `client/src/App.jsx` tenga la URL correcta del backend:

```javascript
// Reemplaza con tu URL real de backend
const BACKEND_URL = 'https://ecommerce-backend-sjrm.onrender.com';

// En la función login:
fetch(`${BACKEND_URL}/api/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
})
```

## 🐛 Solución de Problemas

### Backend devuelve "Bad Gateway":
- Verifica que el servidor escuche en `0.0.0.0` y puerto `process.env.PORT`
- Revisa los logs en el dashboard de Render
- Espera a que el servicio esté completamente activo

### Frontend muestra página en blanco:
- Verifica que `index.html` apunte a `/src/main.jsx`
- Asegúrate de que `main.jsx` exista y renderice el componente App
- Confirma que el build command sea `npm run build`

## 📚 Tecnologías Utilizadas

- **Backend:** Node.js, Express.js, CORS
- **Frontend:** React 18, Vite, CSS3
- **APIs:** FakeStore API para productos
- **Despliegue:** Render.com
- **Almacenamiento:** localStorage (carrito y token)

## 🎯 Próximas Mejoras

- Base de datos real (PostgreSQL/MongoDB)
- Autenticación JWT completa
- Gestión de estados con Context API o Redux
- Validaciones de formularios
- Responsive design mejorado
- Tests unitarios e integración