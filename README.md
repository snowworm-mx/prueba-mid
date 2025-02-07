# Product Manager - Prueba Técnica

Este proyecto es una aplicación web Fullstack desarrollada con **Laravel 11** y **React.js**, diseñada para gestionar productos con autenticación de usuarios y control de inventario.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- **PHP 8.4 o superior**
- **Composer** (Para gestionar dependencias de PHP)
- **Node.js 18 o superior**
- **npm o yarn** (Para gestionar dependencias de React)
- **MySQL o SQLite** (Para la base de datos)
- **Git** (Para control de versiones)

## Instalación y Configuración

### 1.- Clonar el Repositorio

```sh
git clone https://github.com/shauuuh/prueba-mid.git
cd prueba-mid
```

### 2.- Configurar el Backend (Laravel)

```sh
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

**Nota:** Asegúrate de configurar la conexión a la base de datos en el archivo `.env`.

### 3️.- Configurar el Frontend (React.js)

```sh
cd frontend
npm install
npm run dev
```

## Ejecutar el Proyecto

- **Backend (Laravel):** Se ejecutará en `http://localhost:8000`
- **Frontend (React):** Se ejecutará en `http://localhost:5173`

## Decisiones Técnicas

- **Autenticación:** Laravel Sanctum con sesiones y cookies para mantener la seguridad.
- **Base de Datos:** MySQL con migraciones y seeding para datos de prueba.
- **Api Testing:** Postman para probar peticiones y recibir respuestas del servidor web.
- **Paginación:** Implementada en Laravel con soporte para búsqueda.
- **Gestión de Estado:** Se utiliza `useState` y `useEffect` en React para manejar datos actualizar componentes.
- **Control de Errores:** Manejadores de excepciones en backend y validaciones en frontend con codigos de estado para identificar problemas.
- **Diseño:** Tailwind CSS para un diseño moderno y responsivo.
- **Control de Versiones:** Uso de Git y GitFlow para estructurar ramas y commits.
- **Elección de React.js sobre React Native:** Se eligió React.js en lugar de React Native debido a que por gestión de tiempo y enfoque, se quiso orientar la aplicación a una plataforma web y no a dispositivos móviles. React.js permite un desarrollo más rápido para entornos web y una mejor integración con tecnologías como Laravel, Tailwind CSS y bibliotecas de administración de estado como React Router.

## Tecnologías Utilizadas

### **Backend**

- Laravel 11
- PHP 8.4
- MySQL / SQLite
- Laravel Sanctum (Autenticación)

### **Frontend**

- React.js (Tecnología elegida porque )
- React Router
- Axios (para peticiones API)
- Tailwind CSS (estilos)

### **Herramientas Adicionales**

- Postman (Pruebas de API)
- Git y GitHub (Control de versiones)

## Demostración en Video

Puedes ver la demostración del proyecto en el siguiente enlace:

[Ver Video en Google Drive](https://drive.google.com/file/d/1AvMJhofQpk-Lq-F9xw2jtq02LpgMiyHz/view?usp=drive_link)

## Autor

- **Tu Nombre**
- [GitHub](https://github.com/shauuuh)
- [LinkedIn](https://www.linkedin.com/in/shaury-ss/)
