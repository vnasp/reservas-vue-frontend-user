import { createStore } from "vuex";
import getProductos from "@/services/productService";
import getUsuarios from "@/services/userService";
import getReservas from "@/services/bookingService";

export default createStore({
  state: {
    menu: [],
    usuarios: [],
    usuarioActual: null,
    reservas: []
  },
  getters: {
    usuarios(state) {
      return state.usuarios;
    },
    reservas(state) {
      return state.reservas;
    },
    isAuthenticated(state) {
      return state.usuarioActual !== null && state.usuarioActual !== undefined;
    },
    adminStatus(state) {
      return state.usuarioActual !== null && state.usuarioActual !== undefined && state.usuarioActual.adminStatus === true;
    },
    usuarioActual(state) {
      return state.usuarioActual;
    }
  },
  mutations: {
    SET_MENU(state, menu) {
      state.menu = menu;
    },
    SET_USUARIOS(state, usuarios) {
      state.usuarios = usuarios;
    },
    SET_USUARIO_ACTUAL(state, usuario) {
      state.usuarioActual = usuario;
    },
    ADD_USUARIO(state, usuario) {
      state.usuarios.push(usuario);
    },
    SET_RESERVAS(state, reservas) {
      state.reservas = reservas;
    },
    ADD_RESERVA(state, reserva) {
      state.reservas.push(reserva);
    },
    REMOVE_USUARIO_ACTUAL(state) {
      state.usuarioActual = null;
    },
    REMOVE_RESERVA(state, reservaId) {
      state.reservas = state.reservas.filter(reserva => reserva.id !== reservaId);
    },
    EDIT_USUARIO_ROL(state, usuario) {
      const buscarUsuario = state.usuarios.find(u => u.id === usuario.id);
      if (buscarUsuario) {
        buscarUsuario.adminStatus = !buscarUsuario.adminStatus;
      }
    }
  },
  actions: {
    async setMenu({ commit }) {
      try {
        let data = await getProductos();
        console.log('Datos obtenidos:', data);
        commit('SET_MENU', data);
      } catch (error) {
        console.log('Error al obtener el menú:', error);
      }
    },
    async cargarUsuarios({ commit }) {
      try {
        let usuarios = await getUsuarios();
        commit('SET_USUARIOS', usuarios);
      } catch (error) {
        console.log('Error al obtener los usuarios:', error);
      }
    },
    registrarUsuario({ commit }, usuario) {
      commit('ADD_USUARIO', usuario);
    },
    async login({ state, commit }, datosLogin) {
      const usuario = state.usuarios.find(
        usuario => usuario.email === datosLogin.email && usuario.password === datosLogin.password
      );
      if (usuario) {
        commit('SET_USUARIO_ACTUAL', usuario);
        return usuario;
      } else {
        throw new Error('Datos de inicio de sesión incorrectos');
      }
    },
    logout({ commit }) {
      commit('REMOVE_USUARIO_ACTUAL');
    },
    cambiarRol({ commit }, usuario) {
      commit('EDIT_USUARIO_ROL', usuario);
    },
    async cargarReservas({ commit }) {
      try {
        let reservas = await getReservas();
        console.log('Reservas obtenidas del JSON:', reservas);
        commit('SET_RESERVAS', reservas);
      } catch (error) {
        console.log('Error al obtener las reservas:', error);
      }
    },
    registrarReserva({ commit, state }, reserva) {
      console.log('Registrar reserva en acción:', reserva);
      commit('ADD_RESERVA', reserva);
      console.log('Reservas después de registrar:', state.reservas);
    },
    cancelarReserva({ commit }, reservaId) {
      commit('REMOVE_RESERVA', reservaId);
    }
  },
  modules: {},
});