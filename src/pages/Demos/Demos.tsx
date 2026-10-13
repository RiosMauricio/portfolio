import { Box, Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { ShowedDemo } from "@/components/Demos/ShowedDemo";
import { IoStatsChart } from "react-icons/io5";
import { FaRegCalendarAlt, FaWpforms, FaTerminal } from "react-icons/fa";
import "@/styles/Dock.css";
import "@/styles/GeneralAnimations.css";
import { useState } from "react";
import { useLanguage } from "@/i18n/languageContext";

export const Demos = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<boolean>(false)
  const [showedContent, setShowedContent] = useState<string>('')

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openDemo = (mode: string) => {
    setOpen(true);
    setShowedContent(mode);
  };

  const dockApps = [
    { mode: 'stats', icon: <IoStatsChart />, label: t.demos.dock.stats },
    { mode: 'calendar', icon: <FaRegCalendarAlt />, label: t.demos.dock.calendar },
    { mode: 'form', icon: <FaWpforms />, label: t.demos.dock.form },
    { mode: 'terminal', icon: <FaTerminal />, label: t.demos.dock.terminal },
  ];

  return (
    <>
      {/* Contenedor en flujo normal para que el footer quede debajo del contenido */}
      <Box
        minH="100vh"
        pt={{ base: "70px", md: "80px" }}
        pb="80px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        {/* Monitor — diseño sobrio tipo escritorio moderno */}
        <Flex direction="column" alignItems="center">
          <Box
            w={{ base: "92vw", md: "1100px" }}
            h={{ base: "55vh", md: "70vh" }}
            bg="#14161a"
            borderRadius="16px"
            border="1px solid #2d3748"
            boxShadow="0 25px 60px rgba(0, 0, 0, 0.6)"
            position="relative"
            p={{ base: "10px", md: "14px" }}
          >
            {/* Pantalla */}
            <Box
              position="relative"
              w="100%"
              h="100%"
              borderRadius="8px"
              overflow="hidden"
              backgroundImage={screenWidth > 1023 ? 'url(/assets/wallpaper.jpg)' : 'url(/assets/phoneWallpaper.jpg)'}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              {/* Hint sobre el wallpaper — como un widget del escritorio */}
              <Text
                position="absolute"
                top="38%"
                left="50%"
                transform="translateX(-50%)"
                color="whiteAlpha.800"
                fontFamily="monospace"
                fontSize={{ base: "xs", md: "sm" }}
                letterSpacing="wide"
                textShadow="0 1px 10px rgba(0,0,0,0.7)"
                zIndex={1}
                pointerEvents="none"
              >
                {t.demos.subtitle} ↓
              </Text>

              {/* Barra superior estilo macOS */}
              <Flex
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="28px"
                bg="rgba(15, 17, 21, 0.55)"
                backdropFilter="blur(8px)"
                alignItems="center"
                px={3}
                gap={2}
                zIndex={2}
              >
                <Box w="10px" h="10px" borderRadius="full" bg="#f56565" />
                <Box w="10px" h="10px" borderRadius="full" bg="#ecc94b" />
                <Box w="10px" h="10px" borderRadius="full" bg="#48bb78" />
                <Text
                  position="absolute"
                  left="50%"
                  transform="translateX(-50%)"
                  fontSize="xs"
                  color="gray.300"
                  fontFamily="monospace"
                  letterSpacing="wide"
                >
                  {t.demos.screenTitle}
                </Text>
              </Flex>

              {/* Dock */}
              <nav className="Dock">
                {dockApps.map(({ mode, icon, label }) => (
                  <button
                    key={mode}
                    className="dock-app"
                    data-name={label}
                    aria-label={label}
                    onClick={() => openDemo(mode)}
                  >
                    {icon}
                  </button>
                ))}
              </nav>
            </Box>
          </Box>

          {/* Soporte del monitor */}
          <Box
            w="120px"
            h="28px"
            bg="#1c1f26"
            border="1px solid #2d3748"
            borderTop="none"
            style={{ clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)" }}
          />
          <Box
            w="240px"
            h="8px"
            bg="#23272f"
            borderRadius="full"
            border="1px solid #2d3748"
          />
        </Flex>
      </Box>

      <ShowedDemo mode={showedContent} open={open} setOpen={setOpen} />
    </>
  )
}
