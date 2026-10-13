import axios from "axios";

const DIRECT_URL = `https://api.argentinadatos.com/v1/feriados/${new Date().getFullYear()}`;
const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(DIRECT_URL)}`;

interface Feriado {
  nombre: string;
  fecha: string;
}

export const fetchFeriados = async (): Promise<Feriado[]> => {
  try {
    // Intento directo primero (la API soporta CORS)
    const response = await axios.get(DIRECT_URL);
    return response.data;
  } catch {
    try {
      // Fallback vía proxy si el directo falla
      const response = await axios.get(PROXY_URL);
      return JSON.parse(response.data.contents);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
      throw new Error("No se pudieron cargar los datos de feriados");
    }
  }
};
