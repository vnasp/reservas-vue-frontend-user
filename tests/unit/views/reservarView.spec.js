import { createRouter, createWebHistory } from 'vue-router'
import ReservarView from '@/views/ReservarView.vue'
import HomeView from '@/views/HomeView.vue'

describe('ReservarView', () => {
    test('Redirige a / cuando se intenta acceder a la ruta protegida de Mis Reservas', async () => {
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
                    path: '/mis-reservas',
                    name: 'mis-reservas',
                    component: ReservarView,
                    beforeEnter: (to, from, next) => {
                        next('/')
                    }
                },
            ],
        })

        // Act: se intenta navegar a /mis-reservas
        await router.push('/mis-reservas')
        await router.isReady()

        // Assert: se verifica que la ruta devuelta sea / porque está protegida
        expect(router.currentRoute.value.path).toBe('/')
    })
})


