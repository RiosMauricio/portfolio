import { useEffect, useState } from "react"
import { fetchLeagueData } from "@/services/sports.api"
import { Grid, GridItem } from "@chakra-ui/react"
import { BarList, type BarListData, useChart } from "@chakra-ui/charts"
import { Box, Image, Heading, HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"
import { BarSegment } from "@chakra-ui/charts"

// Definimos los tipos para la información de la liga
interface TeamInfo {
  strTeam: string;
  intPoints: number;
  intPlayed: number;
  intWin: number;
  intDraw: number;
  intLoss: number;
  strBadge: string;
}

// Tipos para temporada y liga
type Season = "2020-2021" | "2021-2022" | "2022-2023" | "2023-2024";
type LeagueId = "4328" | "4332" | "4331"; // Agrega más IDs de ligas si es necesario

export const StatsDemo = () => {
  // Estados con tipos definidos
  const [selectedSeason, setSelectedSeason] = useState<Season>('2023-2024');
  const [selectedLeague, setSelectedLeague] = useState<LeagueId>('4328');
  const [leagueInfo, setLeagueInfo] = useState<TeamInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const seasons: Season[] = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"];
  const leagues = [
    { id: "4328", name: "Premier League" },
    { id: "4332", name: "Serie A" },
    { id: "4331", name: "Bundesliga" },
  ];

  // Función para obtener los datos de la liga
  const getLeagueInfo = async (season: string) => {
    setLoading(true); // Comienza el estado de carga
    try {
      const data = await fetchLeagueData(season, selectedLeague);
      setLeagueInfo(data?.table || []);
    } catch (error) {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  // useEffect para actualizar los datos cuando cambian la temporada o la liga
  useEffect(() => {
    getLeagueInfo(selectedSeason);
  }, [selectedSeason, selectedLeague]);

  // Configuración del gráfico de barras
  const barChart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: leagueInfo.map((e) => ({
      name: e.strTeam,
      value: e.intPoints,
    })),
    series: [{ name: "name", color: "#85a951" }],
  });

  // Configuración de los segmentos de barras
  const barSegment = useChart({
    sort: { by: "value", direction: "desc" },
    data: leagueInfo[0]
      ? [
        { name: "PJ", value: leagueInfo[0].intPlayed, color: "blue.solid" },
        { name: "V", value: leagueInfo[0].intWin, color: "green.solid" },
        { name: "E", value: leagueInfo[0].intDraw, color: "#ddd763" },
        { name: "D", value: leagueInfo[0].intLoss, color: "red.solid" },
      ]
      : [],
  });

  return (
    <>
      {/* Selección de Liga */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
        <GridItem>
          <div style={{ padding: "20px" }}>
            <label htmlFor="league-select" style={{ marginRight: "10px" }}>
              Liga:
            </label>
            <select
              id="league-select"
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value as LeagueId)}
              style={{
                padding: "5px",
                fontSize: "16px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #ccc",
              }}
            >
              {leagues.map((league) => (
                <option key={league.id} value={league.id}>
                  {league.name}
                </option>
              ))}
            </select>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </div>
        </GridItem>

        {/* Selección de Temporada */}
        <GridItem>
          <div style={{ padding: "20px" }}>
            <label htmlFor="season-select">Temporada:</label>
            <select
              id="season-select"
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value as Season)}
              style={{
                padding: "5px",
                fontSize: "16px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #ccc",
              }}
            >
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </div>
        </GridItem>
      </Grid>

      {/* Cargando o mostrando los gráficos */}
      {loading ? (
        <HStack gap="5">
          <SkeletonCircle size="12" />
          <Stack flex="1">
            <Skeleton height="5" />
            <Skeleton height="5" width="80%" />
          </Stack>
        </HStack>
      ) : leagueInfo.length === 0 ? (
        <p>No hay datos disponibles</p>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          {/* Gráfico de barras */}
          <GridItem bg="#1f3e5c" p={2} borderRadius={3}>
            <BarList.Root chart={barChart}>
              <BarList.Content>
                <BarList.Bar />
                <BarList.Value />
              </BarList.Content>
            </BarList.Root>
          </GridItem>

          {/* Información del campeón de liga */}
          <GridItem bg="#1f3e5c" p={2} borderRadius={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Heading size="md" mb={2}>
                CAMPEÓN DE LIGA
              </Heading>
              <Image rounded="md" src={leagueInfo[0]?.strBadge} alt="Escudo de la liga" />
            </Box>

            {/* Segmentos de barras */}
            <BarSegment.Root chart={barSegment}>
              <BarSegment.Content>
                <BarSegment.Value />
                <BarSegment.Bar />
                <BarSegment.Label />
              </BarSegment.Content>
            </BarSegment.Root>
          </GridItem>
        </Grid>
      )}
    </>
  );
};
