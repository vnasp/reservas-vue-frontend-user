import axios from "axios";

// Obtener los usuarios registrados
const getUsuarios = async () => {
  try {
    let response = await axios.get(`/api/usuarios.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener los usuarios. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};

export default getUsuarios;
