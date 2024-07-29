import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import store from '@/store';

const routes = [
  {
    path: "/",
    name: "inicio",
    component: HomeView
  },
  {
    path: "/servicios",
    name: "servicios",
    component: () => import("../views/ServiciosView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/ContactoView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./../views/LoginView.vue"),
  },
  {
    path: "/registro",
    name: "registro",
    component: () => import("../views/RegisterForm.vue"),
  },
  {
    path: "/reservas",
    name: "reservas",
    component: () => import("./../views/ReservarView.vue"),
    meta: { requiresAuth: true, requiresNonAdmin: true }
  },
  {
    path: "/admin/usuarios",
    name: "admin-usuarios",
    component: () => import("./../views/AdminUsuariosView.vue"),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: "/admin/reservas",
    name: "admin-reservas",
    component: () => import("./../views/AdminReservasView.vue"),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: "/mis-reservas",
    name: "mis-reservas",
    component: () => import("./../views/UsuarioReservasView.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("./../views/NotFoundView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Protección de las rutas de admin y usuario
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const adminStatus = store.getters.adminStatus;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.requiresAdmin && !adminStatus) {
    next({ name: 'inicio' });
  } else if (to.meta.requiresNonAdmin && adminStatus) {
    next({ name: 'inicio' });
  } else {
    next();
  }
});

export default router
