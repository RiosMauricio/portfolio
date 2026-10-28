import { ProjectsList } from "@/components/Projects/ProjectsList"
import { Reveal } from "@/components/utils/Reveal";
import { GlitchText } from "@/components/GlitchText";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/languageContext";
import '@/styles/ProjectCards.css';
import '@/styles/AboutMe.css';

export const Projects = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return (
    <Box p={4} pt={{ base: "72px", md: "76px" }} className="tab-content">
      {/* Renderizamos las tarjetas dinámicamente en un Grid */}
      <Card.Root size="sm" mx={4} bg={'transparent'} border={'none'}>
        <Card.Body pt={0}>
          <Reveal>
            <Box mb={4}>
              <Text className="kicker">{"// 01"}</Text>
              <Heading className="titleName" size="2xl" mt={1} color="white"><GlitchText text={t.projects.title} /></Heading>
              <Text className="paragraph" color="gray.400" mt={1}>{t.projects.subtitle}</Text>
            </Box>
          </Reveal>
          <ProjectsList></ProjectsList>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};
