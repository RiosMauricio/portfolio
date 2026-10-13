import { Box, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PersonalInfo } from "@/components/AboutMe/PersonalInfo";
import { Formation } from "@/components/AboutMe/Formation";
import { EyesAvatar } from "@/components/AboutMe/EyesAvatar";
import { useRef, useState, useEffect } from "react"; // Importa useRef para manejar el desplazamiento
import { useLanguage } from "@/i18n/languageContext";
import "@/styles/AboutMe.css";
import "@/styles/GeneralAnimations.css"

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

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
          <EyesAvatar size="300px" />
          <Flex flexDirection="column" alignItems={screenWidth > 767 ? 'start' : 'center'}>
            <Heading className="titleName" size={screenWidth > 767 ? "6xl" : '3xl'} mb={9}>{t.hero.greeting}</Heading>
            <Heading className="subtitle" size={screenWidth > 767 ? "2xl" : 'xl'} fontWeight="normal">{t.hero.role1}</Heading>
            <Heading className="subtitle" size={screenWidth > 767 ? "2xl" : 'xl'} fontWeight="normal">{t.hero.role2}</Heading>
            <Flex gap={3} mt={6} justifyContent={screenWidth > 767 ? 'flex-start' : 'center'}>
              {[
                { icon: <FaGithub />, href: "https://github.com/RiosMauricio", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rios-mauricio-4504532b9", label: "LinkedIn" },
                { icon: <FaEnvelope />, href: "mailto:riosmaurii@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <IconButton
                  key={label}
                  asChild
                  aria-label={label}
                  variant="outline"
                  size="lg"
                  borderRadius="full"
                  color="gray.300"
                  _hover={{ color: "white", borderColor: "blue.400", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </IconButton>
              ))}
            </Flex>
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