import { CardSlider } from "@/components/utils/CardSlider";
import { Grid, Box, GridItem, Card, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { GiRoundKnob, GiSettingsKnobs } from "react-icons/gi";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import '../../styles/ProjectCards.css';
import '../../styles/AboutMe.css';

export const Projects = () => {
  // Datos dinámicos de las tarjetas
  const cards = [
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      bodyText: '',
      footerText: 'Written by John Doe on 25/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      bodyText: 'Vivamus at quam non nunc tristique placerat. Suspendisse eu magna ut nisl tristique aliquet.',
      footerText: 'Written by Jane Smith on 26/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      bodyText: 'Praesent vehicula odio eget purus feugiat vehicula. Curabitur eget purus et eros lacinia vulputate.',
      footerText: 'Written by Alice Johnson on 27/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      bodyText: 'Etiam ac tortor eu nulla efficitur aliquet at non lacus.',
      footerText: 'Written by Bob Wilson on 28/05/23',
      playOn: true
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      bodyText: 'Suspendisse potenti. Proin vitae justo at augue lacinia vehicula.',
      footerText: 'Written by Sarah Lee on 29/05/23',
      playOn: true
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box mt={'80px'} p={4}>
      <CardSlider />

      {/* Renderizamos las tarjetas dinámicamente en un Grid */}
      <Card.Root size="sm" m={4}>
        <Card.Header justifyContent={'center'} alignItems={'center'}>
          <Heading className="subtitle" size={'md'}>Estos son algunos de los proyectos en los que participé.</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Grid
            templateColumns={{
              base: "1fr",   // Una columna en pantallas pequeñas
              md: "repeat(2, 1fr)", // Dos columnas en pantallas medianas
              lg: "repeat(3, 1fr)", // Tres columnas en pantallas grandes
            }}
            gap={6} // Espaciado entre las tarjetas
            mt={6}
            w="100%"
            justifyContent="center" // Asegura el centrado horizontal
            alignContent="center"   // Centra el contenido verticalmente
          >
            {cards.map((card, index) => (
              <GridItem key={index} position="relative" mt={8}>
                {/* Antenas estilo V ajustadas */}
                <Box
                  position="absolute"
                  top="-40px" /* Antenas ligeramente más arriba */
                  left="30%"
                  w="2px"
                  h="45px" /* Altura ligeramente reducida para balance */
                  bg="grey" /* Color oscuro para mejor contraste */
                  borderRadius="full"
                  transform="rotate(-30deg)"
                  transformOrigin="bottom"
                />
                <Box
                  position="absolute"
                  top="-40px"
                  right="30%"
                  w="2px"
                  h="45px"
                  bg="grey"
                  borderRadius="full"
                  transform="rotate(30deg)"
                  transformOrigin="bottom"
                />

                {/* TV principal */}
                <Box bg={'#8B4513'} borderRadius={'10%'} w={'85%'} h={'35vh'} margin={'auto'} position="relative">
                  <Grid templateColumns="8fr 1fr" gap={4}>
                    {/* Columna del video */}
                    <GridItem m={4} borderRadius={'10%'}>
                      <div className='player-wrapper'>
                        <ReactPlayer
                          url={card.videoUrl}
                          width="100%"
                          height="30vh"
                          playing
                          controls
                          loop
                          muted
                          className='react-player'
                          playbackRate={1.75}
                        />
                      </div>
                    </GridItem>

                    {/* Columna de íconos */}
                    <GridItem
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      pr={3}
                      width="80%"
                    >
                      {[IoRadioButtonOnOutline, GiSettingsKnobs, GiRoundKnob].map((Icon, iconIndex) => (
                        <div key={iconIndex} style={{ marginTop: '15px' }}>
                          <Icon color="#292929" size="1.8em" />
                        </div>
                      ))}
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};