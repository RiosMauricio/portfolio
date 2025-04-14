import { Box, Image, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { PersonalInfo } from "@/components/AboutMe/PersonalInfo";
import { WorkExp } from "@/components/AboutMe/WorkExp";
import { useRef } from "react"; // Importa useRef para manejar el desplazamiento
import "../../styles/AboutMe.css";

export const AboutMe = () => {
  const aboutMeRef = useRef(null); // Creamos una referencia para la sección AboutMe

  const scrollToSection = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll con efecto suave
    }
  };

  return (
    <>
      {/* Box de vista de entrada */}
      <Box color="white" p={4} borderRadius="md" height="calc(100vh - 50px)" pt="70px">
        <Flex justify="center" align="center" height="100%" flexDirection="row" gap={6}>
          <Image
            src="assets/1656613.png"
            boxSize="300px"
            borderRadius="full"
            fit="cover"
          />
          <Flex flexDirection="column" align="flex-start">
            <Heading className="titleName" size="6xl" mb={9}>HOLA, SOY MAURICIO RIOS.</Heading>
            <Heading className="subtitle" size="2xl" fontWeight="normal">Software developer.</Heading>
            <Heading className="subtitle" size="2xl" fontWeight="normal">Analista programador universitario.</Heading>
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

        {/* Card experiencia */}
        <WorkExp></WorkExp>

      </section>
    </>
  );
};