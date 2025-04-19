import { useEffect, useState } from "react"
import { fetchLeagueData } from "@/services/sports.api"
import { NativeSelect } from "@chakra-ui/react"

export const StatsDemo = () => {
  const [selectedSeason, setSelectedSeason] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const getPlayerData = async () => {
    try {
      const data = await fetchLeagueData();
      setPlayerData(data);
    } catch (error) {
      setError("Error al cargar los feriados")
    }
  }

  useEffect(() => {
    getPlayerData();
  }, [])

  console.log(playerData);

  return (
    <>
      <NativeSelect.Root>
        <NativeSelect.Field placeholder="Select option">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </>
  )
}
