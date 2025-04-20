import { Separator, Grid, GridItem, Box, Heading } from "@chakra-ui/react";
import { GiRoundKnob, GiSettingsKnobs } from "react-icons/gi";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import ReactPlayer from "react-player";

export const ProjectsList = () => {
  // Proyectos
  const cards = [
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      projectTitle: 'Titulo del proyecto desarrollado',
      bodyText: '',
      footerText: 'Written by John Doe on 25/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      projectTitle: 'Titulo del proyecto desarrollado',
      bodyText: 'Vivamus at quam non nunc tristique placerat. Suspendisse eu magna ut nisl tristique aliquet.',
      footerText: 'Written by Jane Smith on 26/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      projectTitle: 'Titulo del proyecto desarrollado',
      bodyText: 'Praesent vehicula odio eget purus feugiat vehicula. Curabitur eget purus et eros lacinia vulputate.',
      footerText: 'Written by Alice Johnson on 27/05/23',
      playOn: false
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      projectTitle: 'Titulo del proyecto desarrollado',
      bodyText: 'Etiam ac tortor eu nulla efficitur aliquet at non lacus.',
      footerText: 'Written by Bob Wilson on 28/05/23',
      playOn: true
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      projectTitle: 'Titulo del proyecto desarrollado',
      bodyText: 'Suspendisse potenti. Proin vitae justo at augue lacinia vehicula.',
      footerText: 'Written by Sarah Lee on 29/05/23',
      playOn: true
    },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={5}
        height={'50px'}
        background="linear-gradient(90deg,rgba(42, 46, 51, 0.6) 0%, rgba(59, 49, 40, 1) 50%, rgba(42, 46, 51, 0.6) 100%)"
      >
        <Heading size={'lg'}>
          PROYECTOS DESTACADOS
        </Heading>
      </Box>

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
          <GridItem key={index} position="relative" mt={'50px'}>
            {/* Antenas estilo V ajustadas */}
            <Box
              position="absolute"
              top="-50px" /* Antenas ligeramente más arriba */
              left="40%"
              w="2px"
              h="50px" /* Altura ligeramente reducida para balance */
              bg="#6c6c6c" /* Color oscuro para mejor contraste */
              borderRadius="full"
              transform="rotate(-30deg)"
              transformOrigin="bottom"
            />

            <Box
              position="absolute"
              top="-10px"
              left="50%"
              w="100px"
              h="45px"
              bg="#6c6c6c"
              borderRadius={'100%'}
              transform="translateX(-50%)"
              transformOrigin="bottom"
            />

            <Box
              position="absolute"
              top="-50px"
              right="40%"
              w="2px"
              h="50px"
              bg="#6c6c6c"
              borderRadius="full"
              transform="rotate(30deg)"
              transformOrigin="bottom"
            />

            {/* TV principal */}
            <Box
              bg={'#704a3b'}
              className="shadow-tv"
              borderRadius={'10%'}
              w={'85%'}
              h={'35vh'}
              margin={'auto'}
              position="relative"
              backgroundImage="url('/assets/wood.jpg')"
              backgroundSize="cover" /* Ajusta para que la imagen cubra todo */
              backgroundPosition="center" /* Centra la imagen */
            >
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
                      <Icon color="#c8c8c8" size="1.8em" />
                    </div>
                  ))}
                </GridItem>
              </Grid>
            </Box>

            {/* Descripcion */}
            <Box
              mt={5}
              w={'100%'}
              display="flex" /* Añade flex para habilitar el centrado */
              justifyContent="center"
              alignItems="center"
            >
              <div className="codepen-button project-cards-text">
                <span className="codepen-button-content">
                  <p className="codepen-button-title">{card.projectTitle}</p>
                  <Separator></Separator>
                  <p className="codepen-button-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi perferendis dolores deleniti maxime excepturi sapiente error quis eaque labore molestias earum, minima adipisci sequi, obcaecati, aperiam cupiditate corrupti delectus?</p>
                </span>
              </div>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
