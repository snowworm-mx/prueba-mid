<div align="center">
  <div>
    <img style="background-color: #000; display: inline-block; padding: 10px; border-radius: 8px;" width="500" src="assets/logo.png" alt="Snowworm Logo">
  </div>
  <br>
  <br>
  <h1 width="200">Prueba Técnica - Desarrollador Fullstack Mid-Level</h1>
  <p>Demuestra tus habilidades construyendo un sistema completo de gestión de inventario con funcionalidades avanzadas.</p>
  <br>
</div>

## 🎯 Objetivos de Evaluación

Esta prueba busca medir tu capacidad para:

1. Diseñar y desarrollar una arquitectura backend robusta y escalable
2. Implementar un frontend eficiente con manejo de estado avanzado
3. Garantizar seguridad y rendimiento en una aplicación completa
4. Tomar decisiones técnicas apropiadas para problemas complejos
5. Escribir código mantenible y bien documentado



## 📋 Requisitos Técnicos

### 🔐 Sistema de Autenticación y Autorización 
- [ ] Registro con validación robusta (incluyendo confirmación por email)
- [ ] Login/logout con JWT
- [ ] Recuperación segura de contraseña
- [ ] Sistema de roles (Admin, Manager, Viewer) con permisos granulares
- [ ] Middleware para protección de rutas según roles

### 🛍️ Gestión de Categorías (CRUD Completo)
- [ ] Creación de categorías con campos:
  - Nombre (requerido, máximo 100 caracteres)
  - Descripción (opcional, texto largo)
  - Subcategoría (ID vinculada a la categoría padre)
  - Imagen (opcional, almacenamiento local)
- [ ] Listado paginado con búsqueda (nombre/descripción), solo deben aparecer las categorías padres, mostrar también las subcategorías en vista de árbol.
- [ ] Edición y eliminación de categorías.
- [ ] Notificaciones visuales para acciones (éxito/error).
- [ ] Implementar SoftDelete.

### 🛍️ Gestión de Proveedores (CRUD Completo)
- [ ] Creación de Proveedores con campos:
  - Nombre (requerido, máximo 100 caracteres).
  - Email (requerido, máximo 50 caracteres, único)
  - Teléfono (requerido, máximo 10 caracteres)
  - Dirección (requerido, máximo 100 caracteres)
- [ ] Listado paginado con búsqueda (nombre).
- [ ] Edición y eliminación de Proveedores.
- [ ] Notificaciones visuales para acciones (éxito/error).
- [ ] Implementar SoftDelete.

### 🛍️ Gestión de Variantes (CRUD Completo)
- [ ] Creación de variantes con campos:
  - Nombre (requerido, máximo 100 caracteres).
- [ ] Listado paginado con búsqueda (nombre).
- [ ] Edición y eliminación de variantes.
- [ ] Notificaciones visuales para acciones (éxito/error).
- [ ] Implementar SoftDelete.

### 🛍️ Gestión de Tipo de variante (CRUD Completo)
- [ ] Creación de Tipo de variante con campos:
  - Nombre (requerido, máximo 100 caracteres).
  - ID de la variante.
- [ ] Los tipos de variantes se deben de crear al momento de crear la variante.
- [ ] Una variante puede tener N cantidad de tipos de variante.
- [ ] Ejemplo:
  - Se crea la variante "Talla" y los tipos de variante serían "chica, mediana, grande".
- [ ] Listado paginado con búsqueda (nombre).
- [ ] Vista mostrando los tipos de variante dentro de la variante.
- [ ] Edición y eliminación de Tipos de variante.
- [ ] Notificaciones visuales para acciones (éxito/error).
- [ ] Implementar SoftDelete.

### 🛍️ Gestión de Catálogo de Productos 
- [ ] CRUD completo de productos con:
  - Campos: 
    - SKU (único).
    - Nombre (requerido, máximo 100 caracteres).
    - Descripción (opcional, texto largo).
    - Precio(requerido, decimal).
    - Costo (requerido, decimal).
    - Tipo de producto (requerido, individual o variante)
    - Categoría(Se debe poder seleccionar más de una categoría para el producto).
    - Proveedor(Se debe poder seleccionar de los proveedores disponibles).
    - Variantes de producto (opcional, tallas, colores, etc.).
    - Se puede elegir una o todas las variantes.
    - Si se elige una variante se debe de crear una variante del producto por cada uno de los tipos de variante seleccionados con los siguientes datos:
      - Id del producto (producto al que pertenece).
      - Id del tipo de variante.
      - Precio.
      - Costo.
      - Tipo de producto(variante).
    - Upload de imágenes (mínimo 3 por producto).
- [ ] Sistema de categorías anidadas (hasta 3 niveles).
- [ ] Búsqueda avanzada con filtros combinables.
- [ ] Exportación a Excel/CSV.

### 📊 Gestión de Inventario 
- [ ] Sistema de múltiples bodegas.
  - Campos:
    - Nombre (requerido, máximo 100 caracteres).
    - Dirección(requerido, máximo 100 caracteres).
- [ ] Transferencias entre bodegas con validación de stock.
- [ ] Historial completo de movimientos (entradas, salidas, ajustes).
- [ ] Alertas de stock bajo/reorden.
- [ ] Reporte de valorización de inventario.

### 📱 Frontend Avanzado 
- [ ] Dashboard con métricas clave (productos bajos en stock, movimientos recientes).
- [ ] Tablas con paginación, ordenamiento y filtros persistentes.
- [ ] Formularios complejos con validación en tiempo real.
- [ ] Manejo de estado global.
- [ ] Diseño responsive y accesible.
- [ ] Animaciones básicas para mejor UX.

---

## ⚙️ Requisitos Técnicos Avanzados

### Backend
- [ ] Uso de Repository Pattern o Service Layer
- [ ] API RESTful bien diseñada (resources, collections)
- [ ] Validación robusta con Form Requests
- [ ] Eventos y listeners para acciones críticas
- [ ] Jobs para procesos largos (ej. reportes)
- [ ] Caching estratégico para mejorar rendimiento

### Frontend
- [ ] Componentes reutilizables y bien estructurados
- [ ] Custom hooks para lógica compartida
- [ ] Manejo elegante de errores y loading states
- [ ] Internacionalización básica (i18n)
- [ ] Lazy loading de rutas

### Calidad de Código
- [ ] Estructura de proyecto limpia y organizada
- [ ] Tipado estático (TypeScript preferido)
- [ ] Comentarios donde sea necesario
- [ ] Principios SOLID aplicados donde corresponda

---

---

## ⚙️ Tecnologías Requeridas

| Área         | Tecnologías                                                                 |
|--------------|-----------------------------------------------------------------------------|
| Backend      | Laravel (actual), Eloquent ORM, API Resources, Sanctum                          |
| Frontend     | React 18+ (Preferido) u otro framework de FrontEnd ( Vue, Flutter, etc.).  |
| Base de Datos| MySQL 8+ o PostgreSQL (con relaciones bien definidas)                      |
| Autenticación| JWT con Sanctum, roles y permisos                                          |
| Control de Versión| Git con convenciones estándar, Git Flow                                |

---

## 📦 Entregables Obligatorios

1. **Repositorio Git** con:
   - Código completo backend/frontend
   - Migraciones y seeders para datos de prueba
   - Instrucciones claras de setup

2. **Documentación** en README.md que incluya:
   - Requisitos del sistema.
   - Instrucciones de instalación detalladas.
   - Explicación de decisiones técnicas relevantes.

3. **Documentación técnica** que incluya:
   - Diagrama de base de datos (ERD)
   - Diagrama de flujo para procesos clave

4. **Pruebas Automatizadas**:
   - Mínimo 5 pruebas backend (unitarias o feature)
   - Mínimo 3 pruebas frontend (componentes críticos)

---



## 📊 Criterios de Evaluación 

| Categoría          | Peso  | Detalles                                                                 |
|--------------------|-------|--------------------------------------------------------------------------|
| **Funcionalidad**  | 35%   | Compleción de requisitos, correcto funcionamiento                        |
| **Arquitectura**   | 25%   | Diseño limpio, patrones apropiados, escalabilidad                        |
| **Calidad Código** | 20%   | Estándares, mantenibilidad, eficiencia                                  |
| **Pruebas**        | 10%   | Cobertura, casos de prueba relevantes                                   |
| **Documentación**  | 10%   | Claridad, completitud, decisiones justificadas                          |

---

## ⏱️ Tiempo y Proceso de Entrega

- **Duración estimada:** 3-4 días de trabajo efectivo
- **Plazo máximo:** 7 días naturales desde asignación
- **Proceso:**
  1. Fork del repositorio base
  2. Desarrollo en branch con tu nombre (ej. `john-doe`)
  3. Pull Request al repositorio original
  4. Incluir en descripción del PR:
     - Tiempo invertido
     - Dificultades encontradas
     - Features extras implementadas

---

## 🏆 Elementos Diferenciadores (Opcionales)

Estos elementos no son obligatorios pero demostrarán habilidades avanzadas:

- Implementación de GraphQL junto a REST
- Sistema de notificaciones en tiempo real (WebSockets)
- Integración con servicio externo (ej. generación de reportes en PDFs)
- Dockerización del proyecto
- Despliegue en cloud (AWS, GCP, Azure)
- Implementación de CI/CD básica  

---

## ❓ Preguntas Frecuentes

**¿Puedo usar [tecnología X] en lugar de [tecnología Y]?**  
Sí, siempre que justifiques técnicamente la decisión en el README y sólo para el FrontEnd.

**¿Qué profundidad se espera en las pruebas?**  
Cobertura de Happy Path y errores principales. No se espera 100% de cobertura.

**¿Se permite usar plantillas/admin templates?**  
 Solo si agregan componentes visuales como Material UI, toda la funcionalidad del FrontEnd debe ser construida desde cero.

**¿Debo implementar todos los extras?**  
No, pero cada extra bien implementado sumará puntos.

---

## 📌 Consideraciones Finales

- **Prioriza calidad sobre cantidad** - Mejor pocas funcionalidades bien hechas que muchas incompletas
- **Documenta tus decisiones** - Explícanos por qué elegiste cierto enfoque
- **Manejo de errores es clave** - Demuestra cómo manejas casos extremos
- **El diseño debe ser funcional** - No requiere ser llamativo, pero sí funcional y usable

¡Estamos emocionados por ver lo que puedes construir! 💻🚀