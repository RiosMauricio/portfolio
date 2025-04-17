import { Box } from "@chakra-ui/react";
import "@/styles/Dock.css";
import "@/styles/Monitor.css";

export const Demos = () => {
  return (
    <>
      {/* Base del escritorio */}
      <Box
        position="absolute"
        bottom="0" /* Asegura que la base esté en la parte inferior */
        left="50%"
        transform="translateX(-50%)"
        width="8%"
        height="12vh" /* Define una altura para el escritorio */
        backgroundColor="#2d2d2d" /* Color sólido para simular madera o metal */
        borderRadius="10px" /* Bordes suavizados */
        className="feet-shadow"
      ></Box>

      {/* Marco de la pantalla */}
      <Box
        backgroundColor="#1f3e5c"
        borderRadius="20px"
        mt={6}
        height="85%"
        width="90%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="monitor-shadow"
      >
        {/* Pantalla interna */}
        <Box
          height="75vh"
          width="94%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          justifyContent="center"
          backgroundImage={`url('/assets/wallpaper2.jpg')`}
          backgroundSize="cover"
          alignItems="center"
          borderRadius="5px"
          className="screen-shadow"
        >
          {/* Dock con los íconos */}
          <div className="Dock">
            <div data-name="Inicio" className="Icon material-icons">home</div>
            <div data-name="Calendario" className="Icon material-icons">calendar_today</div>
            <div data-name="Mapa" className="Icon material-icons">public</div>
            <div data-name="Formularios" className="Icon material-icons">description</div>
          </div>
        </Box>
      </Box>

    </>
  );
};