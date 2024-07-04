import axios from "axios";

// Obtener los items del menú
const getProductos = async () => {
  try {
    let response = await axios.get(`/api/menu.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener la información. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};

export default getProductos;
