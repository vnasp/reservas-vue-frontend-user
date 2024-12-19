<template>
  <h4 class="my-5 text-center">
    <i class="bi bi-bookmark-star-fill text-dark fs-2"></i><br />Crea tu cuenta
  </h4>
  <form @submit.prevent="handleRegister">
    <div class="d-flex justify-content-between gap-2">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          v-model="usuario.nombre"
          class="form-control"
          id="nombre"
          placeholder="Ingresa tu nombre"
          @input="validateNombre"
        />
        <p v-if="errores.nombre" class="text-danger">{{ errores.nombre }}</p>
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input
          type="text"
          v-model="usuario.apellido"
          class="form-control"
          id="apellido"
          placeholder="Ingresa tu apellido"
          @input="validateApellido"
        />
        <p v-if="errores.apellido" class="text-danger">{{ errores.apellido }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-between gap-2">
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input
          type="email"
          v-model="usuario.email"
          class="form-control"
          id="email"
          placeholder="Ingresa tu e-mail"
          @input="validateEmail"
        />
        <p v-if="errores.email" class="text-danger">{{ errores.email }}</p>
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input
          type="tel"
          v-model="usuario.telefono"
          class="form-control"
          id="telefono"
          placeholder="Ingresa tu teléfono"
          @input="validateTelefono"
        />
        <p v-if="errores.telefono" class="text-danger">{{ errores.telefono }}</p>
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input
        type="password"
        v-model="usuario.password"
        class="form-control"
        id="password"
        placeholder="Ingresa tu Contraseña"
        @input="validatePassword"
      />
      <p v-if="errores.password" class="text-danger">{{ errores.password }}</p>
    </div>
    <input type="hidden" v-model="usuario.adminStatus" value="false" />
    <div class="text-center">
      <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
        Registrarse
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "RegisterView",
  data() {
    return {
      usuario: {
        id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        adminStatus: false,
      },
      errores: {
        nombre: null,
        apellido: null,
        email: null,
        telefono: null,
        password: null,
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        !this.errores.nombre &&
        !this.errores.apellido &&
        !this.errores.email &&
        !this.errores.telefono &&
        !this.errores.password
      );
    },
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
    async handleRegister() {
      if (this.isFormValid) {
        try {
          await this.registrarUsuario(this.usuario);
          this.$router.push("/reservas");
        } catch (error) {
          console.error("Error al registrar usuario:", error);
        }
      }
    },
    validateNombre() {
      const nombreRegex = /^[a-zA-Z\s]+$/;
      this.errores.nombre = nombreRegex.test(this.usuario.nombre)
        ? null
        : "El nombre no puede contener números ni caracteres especiales.";
    },
    validateApellido() {
      const apellidoRegex = /^[a-zA-Z\s]+$/;
      this.errores.apellido = apellidoRegex.test(this.usuario.apellido)
        ? null
        : "El apellido no puede contener números ni caracteres especiales.";
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errores.email = emailRegex.test(this.usuario.email)
        ? null
        : "El correo no tiene un formato válido.";
    },
    validateTelefono() {
      const telefonoRegex = /^[0-9]+$/;
      this.errores.telefono = telefonoRegex.test(this.usuario.telefono)
        ? null
        : "El teléfono solo debe contener números.";
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      this.errores.password = passwordRegex.test(this.usuario.password)
        ? null
        : "La contraseña debe tener al menos 8 caracteres, 1 mayúscula y 1 número.";
    },
  },
};
</script>

<style scoped lang="scss">
input::placeholder {
  color: #ccc;
}
.text-danger {
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>