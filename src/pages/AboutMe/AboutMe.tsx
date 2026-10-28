import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PersonalInfo } from "@/components/AboutMe/PersonalInfo";
import { Formation } from "@/components/AboutMe/Formation";
import { HeroAvatar } from "@/components/AboutMe/HeroAvatar";
import { Reveal } from "@/components/utils/Reveal";
import { GlitchText } from "@/components/GlitchText";
import { TypedText } from "@/components/TypedText";
import { useRef } from "react"; // Importa useRef para manejar el desplazamiento
import { useLanguage } from "@/i18n/languageContext";
import "@/styles/AboutMe.css";
import "@/styles/GeneralAnimations.css"

// El glitch solo cubre el nombre dentro del saludo; el prefijo queda
// quieto y el heading sigue siendo un único string legible.
const HERO_NAME = "MAURICIO RIOS";

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  const nameAt = t.hero.greeting.indexOf(HERO_NAME);
  const greetingPre = nameAt >= 0 ? t.hero.greeting.slice(0, nameAt) : "";
  const greetingName = nameAt >= 0 ? t.hero.greeting.slice(nameAt) : t.hero.greeting;
  // El acento cae solo sobre el apellido (ultima palabra) para que el
  // coloreado no dependa del ancho ni del salto de linea, igual en ES/EN.
  const lastSpace = greetingName.lastIndexOf(" ");
  const nameFirst = lastSpace >= 0 ? greetingName.slice(0, lastSpace + 1) : "";
  const nameLast = lastSpace >= 0 ? greetingName.slice(lastSpace + 1) : greetingName;

  const scrollToSection = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll con efecto suave
    }
  };

  return (
    <div className="tab-content" style={{ border: '1px solid transparent' }}>
      {/* Box de vista de entrada */}
      <Box color="white" p={4} borderRadius="md" height="calc(100vh - 50px)" pt="70px">
        <Flex justify="center" align="center" height="100%" flexDirection={{ base: 'column', md: 'row' }} flexWrap={{ base: 'nowrap', md: 'wrap' }} gap={6}>
          <HeroAvatar size="300px" />
          <Flex flexDirection="column" alignItems={{ base: 'center', md: 'start' }} minW={0} maxW="100%">
            <Text className="kicker" mb={2} textAlign={{ base: 'center', md: 'left' }}><TypedText text={t.hero.kicker} /></Text>
            <Heading className="titleName hero-name" size={{ base: '3xl', md: '6xl' }} mb={{ base: 4, md: 5 }}>{greetingPre}<GlitchText text={greetingName} auto>{nameFirst}<span className="hero-surname">{nameLast}</span></GlitchText></Heading>
            <Text className="paragraph hero-value" textAlign={{ base: 'center', md: 'left' }} maxW="54ch">{t.hero.value}</Text>
            <Box as="span" className="status-badge" mt={4}>
              <Box as="span" className="status-dot" aria-hidden="true" />
              {t.hero.availability}
            </Box>
            <Flex gap={3} mt={6} flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }} maxW="100%">
              <Link to="/projects" className="cta cta-primary">{t.hero.ctaProjects}</Link>
              <a href="/cv/CV-Mauricio-Rios.pdf" download className="cta cta-outline">{t.hero.ctaCv}</a>
            </Flex>
            <Flex gap={3} mt={6} justifyContent={{ base: 'center', md: 'flex-start' }}>
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
        <Reveal>
          <PersonalInfo></PersonalInfo>
        </Reveal>

        {/* Mi formacion */}
        <Reveal delay={90}>
          <Formation></Formation>
        </Reveal>

      </section>
    </div>
  );
};