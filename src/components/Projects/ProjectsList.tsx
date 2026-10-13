import { Separator, Grid, GridItem, Box, Badge, Flex, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/i18n/languageContext";

interface ProjectCardData {
  videoUrl: string;
  projectTitle: string;
  bodyText: string;
  footerText: string;
  techStack: string[];
  repoUrl?: string;
  playbackRate?: number;
}

const ProjectCard = ({ card }: { card: ProjectCardData }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <GridItem position="relative" mt={4} ref={ref}>
      {/* TV retro: imagen de marco + video dentro del área de pantalla */}
      <Box position="relative" w="85%" margin="auto">
        <img
          src="/assets/tv.png"
          alt=""
          style={{ display: "block", width: "100%" }}
        />
        {/* Pantalla del TV: ocupa ~x 32-415 / y 49-310 del marco (546x350) */}
        <Box
          position="absolute"
          left="6.4%"
          top="15.2%"
          w="69.5%"
          h="72%"
          borderRadius="8px"
          overflow="hidden"
          bg="#0d0f14"
          boxShadow="inset 0 0 18px rgba(170, 200, 255, 0.28), 0 0 26px 2px rgba(215, 228, 255, 0.30)"
        >
          <ReactPlayer
            url={card.videoUrl}
            width="100%"
            height="100%"
            playing={inView}
            controls
            loop
            muted
            playbackRate={card.playbackRate ?? 1.75}
            config={{
              file: { attributes: { style: { width: "100%", height: "100%", objectFit: "cover" } } },
            }}
          />
        </Box>
      </Box>

      {/* Descripcion */}
      <Box
        mt={5}
        w={'100%'}
        display="flex" /* Añade flex para habilitar el centrado */
        justifyContent="center"
        alignItems="center"
      >
        <div className="codepen-button project-cards-text">
          <span className="codepen-button-content">
            <Flex alignItems="center" justifyContent="center" gap={3}>
              <p className="codepen-button-title">{card.projectTitle}</p>
              {card.repoUrl && (
                <Link href={card.repoUrl} target="_blank" rel="noopener noreferrer" title="Ver en GitHub">
                  <Icon color="#c8c8c8" _hover={{ color: 'white' }} boxSize={5}>
                    <FaGithub />
                  </Icon>
                </Link>
              )}
            </Flex>
            <Separator></Separator>
            <p className="codepen-button-text">{card.bodyText}</p>
            <Flex justifyContent="center" gap={2} flexWrap="wrap" my={2}>
              {card.techStack.map((tech) => (
                <Badge key={tech} size="sm" colorPalette="blue" variant="subtle">
                  {tech}
                </Badge>
              ))}
            </Flex>
            <p className="codepen-button-footer">{card.footerText}</p>
          </span>
        </div>
      </Box>
    </GridItem>
  );
};

export const ProjectsList = () => {
  const { t } = useLanguage();

  // Datos no traducibles: media, stack y repos
  const mediaData = [
    { videoUrl: 'assets/videoMapa.mp4', techStack: ['React', 'Redux Toolkit', 'Google Maps API'] },
    { videoUrl: 'assets/agenda.mp4', techStack: ['React', 'Redux Toolkit', 'REST API'] },
    { videoUrl: 'assets/formVideo.mp4', techStack: ['React', 'Formularios', 'Dashboards'] },
    {
      videoUrl: 'assets/videoRincones-BpFKGbOM.mp4',
      techStack: ['Angular', 'Node.js', 'MySQL', 'TypeScript', 'Canvas API'],
      repoUrl: 'https://github.com/RiosMauricio/Rincones-de-jujuy-check_in',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=8-ldV9uTK2U',
      techStack: ['Solana', 'USDC', 'Next.js', 'Web3'],
      playbackRate: 1,
    },
    {
      videoUrl: 'assets/emptytv.mp4',
      techStack: ['Angular', 'PrimeNG', 'Bootstrap'],
      repoUrl: 'https://github.com/RiosMauricio/SalvaVentura',
    },
  ];

  const cards: ProjectCardData[] = t.projects.cards.map((c, i) => ({
    projectTitle: c.title,
    bodyText: c.body,
    footerText: c.footer,
    ...mediaData[i],
  }));

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",   // Una columna en pantallas pequeñas
          md: "repeat(2, 1fr)", // Dos columnas en pantallas medianas
          lg: "repeat(3, 1fr)", // Tres columnas en pantallas grandes
        }}
        gap={6} // Espaciado entre las tarjetas
        mt={2}
        w="100%"
        justifyContent="center" // Asegura el centrado horizontal
        alignContent="center"   // Centra el contenido verticalmente
      >

        {cards.map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </Grid>
    </>
  )
}
