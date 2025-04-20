import axios from "axios";

const API_URL = "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=";

export const fetchLeagueData = async (season: string, league: string): Promise<any> => {
  try {
    const response = await axios.get(API_URL + `${league}`+ '&s=' +`${season}`);
    return response.data; // La API devuelve JSON directamente, no necesita `JSON.parse()`
  } catch (error) {
    console.error("Error al obtener datos del jugador:", error);
    throw new Error("No se pudieron cargar los datos de Lionel Messi.");
  }
};