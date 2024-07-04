import { shallowMount } from '@vue/test-utils';
import RegisterView from '@/views/RegisterView.vue';

describe('RegisterView.vue', () => {
  it('Crear un snapshot de la vista de Registro', () => {
    // Arrange: Configuración inicial
    const wrapper = shallowMount(RegisterView);

    // Act: No aplica

    // Assert: Comprobación de que el HTML coincide con el snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});