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

1. Diseño eficiente de la base de datos con migraciones y relaciones adecuadas.
2. Implementación de un backend con mejores prácticas y optimización del rendimiento.
3. Desarrollo de una API RESTful funcional y segura con roles de usuario.
4. Construcción de un frontend utilizando React Native (o alguna otra tecnología si el candidato lo prefiere) con manejo adecuado del estado.

---

## Requisitos de Desarrollo

### Funcionalidades Principales

1. **Autenticación Avanzada**
   - Implementar autenticación con Laravel Sanctum.
   - Permitir el registro, inicio de sesión y cierre de sesión de los usuarios.
   - Recuperación de contraseña mediante Laravel Mail.
   - Proteger las rutas de la API mediante tokens de acceso.
   - Implementar roles (admin, empleado):
      * Solo admin puede gestionar productos.
      * Empleado solo puede visualizar productos.

2. **Gestión de Productos con Categorías**
   - CRUD (crear, leer, actualizar y eliminar) para productos mediante la API.
   - Validar los siguientes campos:
     - **Nombre**: Texto corto, obligatorio.
     - **Descripción**: Texto largo, opcional.
     - **Precio**: Decimal, obligatorio.
     - **Cantidad en Inventario**: Número entero, obligatorio (mínimo de 0).
   - Implementar funciones adicionales para:
     - **Aumentar o disminuir la cantidad en inventario de un producto**, respetando que no sea menor a 0.
     - **Historial de movimientos**: Registrar cambios en inventario con fecha, hora y usuario responsable.
     - Categoría: Relación con tabla categorías (obligatorio).
   - Funciones adicionales:
      * Aumentar o disminuir inventario, respetando stock mínimo.
      * Historial de movimientos: Registrar cambios con fecha, hora y usuario responsable.
      * Alerta de stock mínimo cuando la cantidad llegue a cierto umbral.

3. **Listado y Búsqueda de Productos**
   - Implementar endpoints para:
     - Obtener todos los productos con soporte para paginación.
     - Buscar productos por nombre o descripción mediante parámetros en la URL.
     - Filtrar productos por categoría.

4. **Frontend con React Native o similar**
   - Crear una interfaz de usuario que permita:
     - Iniciar sesión y gestionar el token de autenticación.
     - Visualizar el listado de productos con paginación.
     - Buscar productos por nombre o descripción.
     - Crear, editar y eliminar productos.
     - CRUD de productos (solo admin).
     - Historial de movimientos de productos.
   - En caso de no utilizar React Native, se puede emplear otra tecnología, explicando en el archivo `README.md` los motivos de la elección.

---

## Restricciones

- No está permitido el uso de paquetes externos para funcionalidades principales como CRUD o búsqueda. Se deben utilizar exclusivamente herramientas nativas de Laravel y la herramienta utilizada para el frontend.
- **Excepción:** Se permite usar librerías para navegación en frontend y para autenticación en Laravel.

---

## Tecnologías y Herramientas

- **Backend:** Laravel (versión 11).
- **Frontend:** React Native (preferentemente), React con Tailwind o alguna otra tecnología elegida por el candidato.
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
  
4. **Extras Opcionales:**
   - Pruebas unitarias en backend y/o frontend por lo menos en 2 modulos principales.

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

Se espera que la prueba pueda completarse en **2 días**. Se otorgará un plazo de **6 días hábiles** para su entrega a partir de que se realice el fork del repositorio.

---

## Proceso de Entrega

1. El candidato debe realizar un fork de este repositorio (https://github.com/snowworm-mx/prueba-mid).
    * Clonar el fork a su máquina local.
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
2. Una vez completada la prueba, realizar un pull request al repositorio original.

---

**¡Éxito!**
