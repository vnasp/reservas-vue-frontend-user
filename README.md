# Hostal - Sistema de Reservas

Proyecto desarrollado como desafío del Bootcamp Frontend Developer de Talento Digital para Chile. Sistema de reservas para un hostal con autenticación de usuarios, sistema de roles (admin/usuario), gestión de servicios y panel de administración.

> **Nota:** Este es un proyecto académico, no un sistema de reservas real.

## Vista previa

[Ver en GitHub Pages](https://vnasp.github.io/bootcamp-vue3-hostal/)

## Funcionalidades

- Registro y login de usuarios
- Sistema de roles: administrador y usuario
- Catálogo de servicios (habitaciones, spa, bicicletas, ski, tours)
- Reserva de servicios por usuario
- Panel admin para gestionar usuarios y reservas
- Cambio de roles desde panel admin
- Página de contacto
- Navegación protegida según rol

## Tecnologías

- Vue.js 3
- Vuex 4
- Vue Router 4
- Axios
- Bootstrap 5
- SweetAlert2
- Jest

## Estructura

```
src/
├── App.vue                    → Layout principal
├── main.js                    → Punto de entrada
├── assets/css/styles.scss     → Estilos globales
├── components/
│   ├── CardProduct.vue        → Tarjeta de producto
│   ├── CardServicios.vue      → Tarjeta de servicio
│   ├── FooterComponent.vue    → Pie de página
│   ├── HomeButton.vue         → Botón volver al inicio
│   ├── NavBar.vue             → Barra de navegación
│   └── TableReservas.vue      → Tabla de reservas
├── router/
│   └── index.js               → Rutas con guards
├── services/
│   ├── bookingService.js      → Servicio de reservas
│   ├── servicesService.js     → Servicio de servicios
│   └── userService.js         → Servicio de usuarios
├── store/
│   └── index.js               → Store con auth, roles y reservas
└── views/
    ├── AdminReservasView.vue  → Panel admin de reservas
    ├── AdminUsuariosView.vue  → Panel admin de usuarios
    ├── ContactoView.vue       → Página de contacto
    ├── HomeView.vue           → Página de inicio
    ├── LoginView.vue          → Login
    ├── NotFoundView.vue       → Página 404
    ├── RegisterForm.vue       → Registro
    ├── ReservarView.vue       → Reservar servicios
    ├── ServiciosView.vue      → Catálogo de servicios
    └── UsuarioReservasView.vue → Mis reservas
```
