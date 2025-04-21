import { Box, Image, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { PersonalInfo } from "@/components/AboutMe/PersonalInfo";
import { Formation } from "@/components/AboutMe/Formation";
import { useRef, useState, useEffect } from "react"; // Importa useRef para manejar el desplazamiento
import "@/styles/AboutMe.css";
import "@/styles/GeneralAnimations.css"

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll con efecto suave
    }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    // Agregamos el listener para "resize"
    window.addEventListener("resize", handleResize);
    // Limpiamos el listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="tab-content" style={{ border: '1px solid transparent' }}>
      {/* Box de vista de entrada */}
      <Box color="white" p={4} borderRadius="md" height="calc(100vh - 50px)" pt="70px">
        <Flex justify="center" align="center" height="100%" flexDirection={screenWidth > 767 ? "row" : 'column'} gap={6}>
          <Image
            src="assets/1656613.png"
            boxSize="300px"
            borderRadius="full"
            fit="cover"
          />
          <Flex flexDirection="column" alignItems={screenWidth > 767 ? 'start' : 'center'}>
            <Heading className="titleName" size={screenWidth > 767 ? "6xl" : '3xl'} mb={9}>HOLA, SOY MAURICIO RIOS.</Heading>
            <Heading className="subtitle" size={screenWidth > 767 ? "2xl" : 'xl'} fontWeight="normal">Software developer.</Heading>
            <Heading className="subtitle" size={screenWidth > 767 ? "2xl" : 'xl'} fontWeight="normal">Analista Programador.</Heading>
          </Flex>
        </Flex>
      </Box>

      {/* Botón para desplazarse a más información */}
      <Flex justify="center" height="100%" flexDirection="row" gap={6}>
        <button className="readMore" onClick={scrollToSection}>
          <Icon size={'xs'}>
            <FaChevronDown />
          </Icon>
        </button>
      </Flex>

      {/* Sección AboutMe con referencia */}
      <section id="aboutme" ref={aboutMeRef}>
        {/* Card info sobre mi */}
        <PersonalInfo></PersonalInfo>

        {/* Mi formacion */}
        <Formation></Formation>

      </section>
    </div>
  );
};