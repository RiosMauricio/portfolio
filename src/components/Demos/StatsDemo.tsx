import { useEffect, useState } from "react"
import { fetchLeagueData } from "@/services/sports.api"
import { Grid, GridItem } from "@chakra-ui/react"
import { BarList, type BarListData, useChart } from "@chakra-ui/charts"
import { Box, Image, Heading, HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
import { BarSegment } from "@chakra-ui/charts"

export const StatsDemo = () => {
  const [selectedSeason, setSelectedSeason] = useState('2023-2024');
  const [leagueInfo, setLeagueInfo] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const seasons = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"];

  const getLeagueInfo = async (season: string) => {
    try {
      const data = await fetchLeagueData(season);
      console.log(data);
      setLeagueInfo(data?.table);
    } catch (error) {
      setError("Error al cargar los datos")
    }
  };

  useEffect(() => {
    getLeagueInfo(selectedSeason);
  }, [selectedSeason]);

  const barChart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: leagueInfo.map((e) => ({
      name: e.strTeam,
      value: e.intPoints,
    })),
    series: [{ name: "name", color: "teal.subtle" }],
  })

  const barSegment = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "PJ", value: parseInt(leagueInfo[0]?.intPlayed), color: "teal.solid" },
      { name: "V", value: parseInt(leagueInfo[0]?.intWin), color: "blue.solid" },
      { name: "E", value: parseInt(leagueInfo[0]?.intDraw), color: "orange.solid" },
      { name: "D", value: parseInt(leagueInfo[0]?.intLoss), color: "purple.solid" },
    ],
  })

  return (
    <>

      <div style={{ padding: "20px" }}>
        {/* Dropdown nativo */}
        <label htmlFor="season-select" style={{ marginRight: "10px" }}>
          Temporada:
        </label>
        <select
          id="season-select"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          style={{
            padding: "5px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>

        {/* Muestra error si ocurre */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>

      {
        leagueInfo.length === 0 ? (
          <HStack gap="5">
            <SkeletonCircle size="12" />
            <Stack flex="1">
              <Skeleton height="5" />
              <Skeleton height="5" width="80%" />
            </Stack>
          </HStack>
        ) : (
          
          // Graficos con estadisticas de la liga
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // 1 columna en pantallas pequeñas, 2 en medianas/grandes
            gap={4} // Espaciado entre las columnas
          >
            <GridItem>
              <BarList.Root chart={barChart}>
                <BarList.Content>
                  <BarList.Bar />
                  <BarList.Value />
                </BarList.Content>
              </BarList.Root>
            </GridItem>
            <GridItem>
              <Box
                display={'flex'}
                flexDirection={'column'} // Apila los elementos verticalmente
                alignItems={'center'}    // Centra los elementos horizontalmente
              >
                <Heading size={'md'} mb={2}>CAMPEÓN DE LIGA</Heading>
                <Image rounded="md" src={`${leagueInfo[0]?.strBadge}`} alt="Dan Abramov" />
              </Box>

              <BarSegment.Root chart={barSegment}>
                <BarSegment.Content>
                  <BarSegment.Value />
                  <BarSegment.Bar />
                  <BarSegment.Label />
                </BarSegment.Content>
              </BarSegment.Root>
            </GridItem>
          </Grid>

        )
      }

    </>
  )
}
