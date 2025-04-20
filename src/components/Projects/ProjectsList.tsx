import { Separator, Grid, GridItem, Box, Heading } from "@chakra-ui/react";
import { GiRoundKnob, GiSettingsKnobs } from "react-icons/gi";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import ReactPlayer from "react-player";

export const ProjectsList = () => {
  // Proyectos
  const cards = [
    {
      videoUrl: 'assets/videoMapa.mp4',
      projectTitle: 'Mapa de herramientas.',
      bodyText: 'Desarrollé un mapa de herramientas para el alta y baja de marcadores personalizados utilizando la API oficial de Google maps, renderizando los mismos de acuerdo a la zona mostrada en pantalla. Se gestionaron los estados de las herramientas activas con Redux toolkit.',
      footerText: 'Rol: Front-end',
      playOn: false
    },
    {
      videoUrl: 'assets/agenda.mp4',
      projectTitle: 'Agenda de turnos.',
      bodyText: 'Desarrollé una agenda para la gestión ordenada de turnos del ministerio de salud de mi provincia. El mismo carga automaticamente la información del/los turnos desde la base de datos y permite administrar sus estados de manera rapida y sencilla. Se utilizo Redux toolkit para metodos y estados.',
      footerText: 'Rol: Front-end',
      playOn: false
    },
    {
      videoUrl: 'assets/formVideo.mp4',
      projectTitle: 'Dashboard para calculos de costos.',
      bodyText: 'Desarrollé un dashboard para gestionar pedidos de información de costos, mediante el cual se calculan los precios de los insumos utilizados en cada pedido a traves de indices especificados por el usuario, ademas de contar con el resto de operaciones necesarias en el sector, como editar o asignar responsable, eliminar pedido, etc. ',
      footerText: 'Rol: Front-end',
      playOn: false
    },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      projectTitle: 'Sistema de check-in para hotel.',
      bodyText: 'Participé en el desarrollo de un sistema de registro de ingresos en mi provincia, registrando la entrada al establecimiento con un formulario de ingreso y la posibilidad de firmar mediante canvas en pantalla. Además, es posible administrar empleados mediante permisos almacenados en base de datos.',
      footerText: 'Rol: Fullstack',
      playOn: true
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      projectTitle: 'Landing page para lugar de atracciones naturales',
      bodyText: 'Fui parte del desarrollo de una landing page promocional de un emprendimiento local, enfocado en actividades interactivas en terreno montañoso.',
      footerText: 'Rol: Front-end',
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
                  <p className="codepen-button-text">{card.bodyText}</p>
                  <p className="codepen-button-footer">{card.footerText}</p>
                </span>
              </div>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
