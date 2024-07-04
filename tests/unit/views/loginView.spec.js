import { shallowMount } from '@vue/test-utils';
import LoginView from '@/views/LoginView.vue';

describe('LoginView.vue', () => {
  it('Crear un snapshot de la vista de Login', () => {
    // Arrange: Configuración inicial
    const wrapper = shallowMount(LoginView);

    // Act: No aplica

    // Assert: Comprobación de que el HTML coincide con el snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});