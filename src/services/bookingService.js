import axios from "axios";

// Obtener las reservas existentes
const getReservas = async () => {
  try {
    let response = await axios.get(`./api/reservas.json`);
    return response.data;
  } catch (error) {
    this.$swal('Error al obtener las reservas. Por favor, intenta de nuevo más tarde.');
    throw new Error(error.message);
  }
};

export default getReservas