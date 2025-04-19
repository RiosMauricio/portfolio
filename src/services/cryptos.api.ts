import axios from "axios";

const baseURL = "https://api.coingecko.com/api/v3/coins/markets";

export const fetchCryptoData = async (): Promise<any[]> => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 200,
        page: 1,
      },
    });

    return response.data; // ¡Ya es JSON, no necesitas JSON.parse()!
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    throw new Error("No se pudieron cargar los datos de criptomonedas");
  }
};