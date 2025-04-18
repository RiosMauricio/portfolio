import axios from "axios";

const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent("https://api.argentinadatos.com/v1/feriados/2025")}`;

export const fetchFeriados = async (): Promise<any> => {
  try {
    const response = await axios.get(API_URL);
    const jsonData = JSON.parse(response.data.contents); // Extrae los datos reales desde el proxy
    return jsonData;
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    throw new Error("No se pudieron cargar los datos de feriados");
  }
};