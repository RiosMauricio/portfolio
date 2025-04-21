import { ProjectsList } from "@/components/Projects/ProjectsList"
import { Box, Card } from "@chakra-ui/react";
import { useEffect } from "react";
import '@/styles/ProjectCards.css';
import '@/styles/AboutMe.css';

export const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box p={4} className="tab-content">
      {/* Renderizamos las tarjetas dinámicamente en un Grid */}
      <Card.Root size="sm" m={4} bg={'transparent'} border={'none'}>
        <Card.Header
          justifyContent={'center'}
          alignItems={'center'}
          p={4}
        >
        </Card.Header>

        <Card.Body>
          <ProjectsList></ProjectsList>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};