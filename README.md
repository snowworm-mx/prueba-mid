<div align="center">
	<div >
		<img style="background-color: #000; display: inline-block; padding: 10px; border-radius: 8px;" width="500" src="assets/logo.png" alt="Snowworm Logo">
	</div>
   <br>
   <br>
    <h1 width="200">Desarrollador Fullstack</h1>
	<p>La siguiente es una prueba para evaluar a aspectos técnicos de los candidatos a desarrollador Fullstack <b>Mid-Level</b>.</p>
	<br>
</div>

## Objetivo de la Prueba

El objetivo de esta prueba es evaluar la capacidad del candidato para desarrollar una aplicación web que incluya un backend robusto y una API RESTful utilizando **Laravel**, así como un frontend funcional con **React Native**. Durante la prueba se busca medir:

1. Habilidades para diseñar una base de datos eficiente.
2. Capacidad para implementar un backend que cumpla con las mejores prácticas.
3. Desarrollo de una API RESTful funcional y segura.
4. Construcción de un frontend utilizando React Native (o alguna otra tecnología si el candidato lo prefiere) para consumir la API.

---

## Requisitos de Desarrollo

### Funcionalidades Principales

1. **Autenticación de Usuarios**
   - Implementar un sistema de autenticación utilizando Laravel Sanctum.
   - Permitir el registro, inicio de sesión y cierre de sesión de los usuarios.
   - Proteger las rutas de la API mediante tokens de acceso.

2. **Gestión de Productos**
   - CRUD (crear, leer, actualizar y eliminar) para productos mediante la API.
   - Validar los siguientes campos:
     - **Nombre**: Texto corto, obligatorio.
     - **Descripción**: Texto largo, opcional.
     - **Precio**: Decimal, obligatorio.
     - **Cantidad en Inventario**: Número entero, obligatorio (mínimo de 0).
   - Implementar funciones adicionales para:
     - **Aumentar o disminuir la cantidad en inventario de un producto**, respetando que no sea menor a 0.
     - **Historial de movimientos**: Registrar cambios en inventario con fecha, hora y usuario responsable.

3. **Listado de Productos**
   - Implementar endpoints para:
     - Obtener todos los productos con soporte para paginación.
     - Buscar productos por nombre o descripción mediante parámetros en la URL.

4. **Frontend con React Native o similar**
   - Crear una interfaz de usuario que permita:
     - Iniciar sesión y gestionar el token de autenticación.
     - Visualizar el listado de productos con paginación.
     - Buscar productos por nombre o descripción.
     - Crear, editar y eliminar productos.
     - Consultar el historial de movimientos de un producto.
   - En caso de no utilizar React Native, se puede emplear otra tecnología, explicando en el archivo `README.md` los motivos de la elección.

---

## Restricciones

- No está permitido el uso de paquetes externos para funcionalidades principales como CRUD o búsqueda. Se deben utilizar exclusivamente herramientas nativas de Laravel y la herramienta utilizada para el frontend.
- **Excepción:** Se permite usar librerías para navegación en el frontend.

---

## Tecnologías y Herramientas

- **Backend:** Laravel (versión 11).
- **Frontend:** React Native (preferentemente) o alguna otra tecnología elegida por el candidato.
- **Base de Datos:** MySQL o SQLite.
- **Autenticación:** Laravel Sanctum.
- **Control de Versiones:** Git.

---

## Entregables

1. **Repositorio de Código:**
   - Subir el código fuente al repositorio indicado en las intrucciones.

2. **Archivo `README.md`:**
   - Instrucciones claras para configurar y ejecutar el proyecto localmente.
   - Descripción de las decisiones técnicas tomadas.
   - Lista de las tecnologías utilizadas.

3. **Demostraciones Visuales:**
   - Capturas de pantalla o videos mostrando:
     - Uso del sistema de autenticación.
     - CRUD de productos.
     - Funcionalidades avanzadas como gestión de inventarios y búsqueda.

---

## Criterios de Evaluación

1. **Funcionalidad:**
   - Verificar que todas las funcionalidades descritas estén implementadas correctamente.

2. **Diseño:**
   - Interfaz simple, funcional y atractiva utilizando Tailwind CSS.

3. **Calidad del Código:**
   - Evaluar el uso de buenas prácticas en Laravel y React Native.
   - Organización del código y modularidad.

4. **Calidad del control de versiones:**

   - Uso de git flow para la creación los commits del proyecto.
   - Títulos descriptivos para los commits del proyecto.
   - Uso de las diferentes funcionalidades de gitflow para todas las carácteriticas del proyecto según se necesite.

5. **Documentación:**
   - Revisar que el archivo `README.md` sea claro y completo.

6. **Extras Opcionales:**
   - Pruebas unitarias para el backend y/o frontend.
   - Validaciones avanzadas en formularios.

---

## Tiempo Estimado

Se espera que la prueba pueda completarse en **8 horas**. Se otorgará un plazo de **5 días hábiles** para su entrega.

---

## Proceso de Entrega

1. El candidato debe realizar un fork de este repositorio (https://github.com/snowworm-mx/prueba-mid).
    * Clonar el fork a su máquina local.
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
2. Una vez completada la prueba, realizar un pull request al repositorio original.

---

**¡Éxito!**
