import { useEffect, useState } from "react"
import { fetchCryptoData } from "@/services/cryptos.api"

export const StatsDemo = () => {
  const [cryptoData, setCryptoData] = useState([]); 
  const [error, setError] = useState<string | null>(null);

  const getCryptosData = async () => {
    try {
      const data = await fetchCryptoData();
      setCryptoData(data);
    } catch (error) {
      setError("Error al cargar los feriados")
    }
  }

  useEffect(() => {
    getCryptosData();
  }, [])

  console.log(cryptoData);
  
  return (
    <div>lorem*100</div>
  )
}
