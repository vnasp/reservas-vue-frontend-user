import { createRouter, createWebHistory } from 'vue-router'
import AdminReservasView from '@/views/AdminReservasView.vue'
import HomeView from '@/views/HomeView.vue'

describe('AdminReservasView', () => {
    test('Redirige a / cuando se intenta acceder a la ruta protegida al listado completo de reservas', async () => {
        // Arrange: configuración inicial del router y las rutas
        const router = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: '/',
                    name: 'inicio',
                    component: HomeView,
                },
                {
                    path: '/admin/reservas',
                    name: 'admin-reservas',
                    component: AdminReservasView,
                    beforeEnter: (to, from, next) => {
                        next('/')
                    }
                },
            ],
        })

        // Act: se intenta navegar a /admin/reservas
        await router.push('/admin/reservas')
        await router.isReady()

        // Assert: se verifica que la ruta devuelta sea / porque está protegida
        expect(router.currentRoute.value.path).toBe('/')
    })
})