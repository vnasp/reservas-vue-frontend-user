import axios from "axios";

// Obtener los items del servicios
const getServicios = async () => {
  try {
    let response = await axios.get(`/api/servicios.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener la información. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};

export default getServicios;
