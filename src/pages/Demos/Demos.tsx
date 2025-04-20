import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { ShowedDemo } from "@/components/Demos/ShowedDemo";
import "@/styles/Dock.css";
import "@/styles/Monitor.css";
import { useState } from "react"

export const Demos = () => {

  const [open, setOpen] = useState(false);
  const [showedContent, setShowedContent] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Base del escritorio */}
      {/* <Box
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="8%"
        height="10vh"
        backgroundColor="#2d2d2d"
        borderRadius="10px"
        className="feet-shadow"
      ></Box> */}

      {/* Marco de la pantalla */}
      <Box
        backgroundColor="#1f3e5c"
        borderRadius="20px"
        mt={7}
        height="80%"
        width="80%"
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
          height="70vh"
          width="90%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          flexDirection="column" /* Cambia a columna para apilar elementos verticalmente */
          justifyContent="space-between" /* Distribuye los elementos con espacio */
          backgroundImage={`url('/assets/wallpaper.jpg')`}
          backgroundSize="cover"
          alignItems="center"
          borderRadius="5px"
          className="screen-shadow"
        >
          {/* CardSlider en la parte superior */}
          {/* <CardSlider /> */}

          {/* Dock con los íconos */}
          <div className="Dock">
            <div data-name="Estadisticas" className="Icon material-icons tab-content" onClick={() => { setOpen(true), setShowedContent('stats') }}>bar_chart</div>
            <div data-name="Calendario" className="Icon material-icons tab-content" onClick={() => { setOpen(true), setShowedContent('calendar') }}>calendar_today</div>
            {/* <div data-name="Mapa" className="Icon material-icons" onClick={() => { setOpen(true), setShowedContent('map') }}>public</div> */}
            <div data-name="Formularios" className="Icon material-icons tab-content" onClick={() => { setOpen(true), setShowedContent('form') }}>description</div>
          </div>
        </Box>
      </Box>

      {/* Ventanas que se abriran al apretar botones del dock */}
      <ShowedDemo open={open} setOpen={setOpen} mode={showedContent} />
    </>
  );
};