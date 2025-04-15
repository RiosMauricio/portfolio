import { CardSlider } from "@/components/utils/CardSlider";
import { ProjectsList } from "@/components/Projects/ProjectsList"
import { Box, Card, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import '@/styles/ProjectCards.css';
import '@/styles/AboutMe.css';

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box mt={'50px'} p={4}>
      {/* <CardSlider /> */}

      {/* Renderizamos las tarjetas dinámicamente en un Grid */}
      <Card.Root size="sm" m={4}>
        <Card.Header justifyContent={'center'} alignItems={'center'} bg={'#27201a'} p={4} backgroundImage="url('/assets/grey.jpg')"        >
          <Heading className="first-text" size={'lg'}>
            Estos son algunos proyectos de los que forme parte.
          </Heading>
        </Card.Header>

        <Card.Body>
          <ProjectsList></ProjectsList>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};