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
      bodyText: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.',
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
        <Card.Header>
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
            w="100%" // Ocupa todo el ancho disponible
          >
            {cards.map((card, index) => (
              <GridItem key={index} w="100%" h="auto" my={4} ml={4}>
                <Box className="project-cards" p={4}>
                  <Grid templateColumns="6fr 1fr" gap={4} alignItems="start">
                    {/* Columna del video */}
                    <GridItem>
                      <div className="project-cards-image">
                        <ReactPlayer
                          url={card.videoUrl}
                          width="100%"
                          height="30vh"
                          playing={card.playOn}
                          controls
                          loop
                          muted
                          playbackRate={1.75}
                        />
                      </div>
                    </GridItem>

                    {/* Columna de íconos */}
                    <GridItem>
                      {[IoRadioButtonOnOutline, GiSettingsKnobs, GiRoundKnob].map((Icon, iconIndex) => (
                        <div key={iconIndex} style={{ margin: '20px 0' }}>
                          <Icon color="white" size="2em" />
                        </div>
                      ))}
                    </GridItem>
                  </Grid>

                  {/* Texto de contenido */}
                  <Heading size={'md'} mt={5} className="paragraph">{card.bodyText}</Heading>
                  <Heading className="footer">{card.footerText}</Heading>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};