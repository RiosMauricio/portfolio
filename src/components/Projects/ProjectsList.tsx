import { CSSProperties, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/i18n/languageContext";
import { CrtScreen } from "@/components/CrtScreen";
import { RetroTv } from "@/components/Projects/RetroTv";

interface ProjectCardData {
  videoUrl?: string;
  image?: string;
  projectTitle: string;
  bodyText: string;
  footerText: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  playbackRate?: number;
}

/* Acento por canal: rota en el LED/etiqueta de la TV y el marcador del
   título de la card (--rtv-accent en el GridItem alcanza a ambos). */
const CHANNEL_ACCENTS = ["#63b3ed", "#22d3ee", "#f472b6", "#fbbf24"];

const ProjectCard = ({ card, channel, delay = 0 }: { card: ProjectCardData; channel: number; delay?: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const { ref: revealRef, inView: revealed } = useInView<HTMLDivElement>(0.15, true);
  const [powered, setPowered] = useState(false);
  const { t } = useLanguage();

  // El power-on del CRT se dispara solo la primera vez que la card entra
  // en viewport (aunque inView siga alternando para el autoplay).
  useEffect(() => {
    if (inView) setPowered(true);
  }, [inView]);

  return (
    <GridItem
      mt={4}
      ref={revealRef}
      className={revealed ? "reveal is-revealed" : "reveal"}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--rtv-accent": CHANNEL_ACCENTS[(channel - 1) % CHANNEL_ACCENTS.length],
      } as CSSProperties}
    >
      {/* TV retro dibujada con CSS (RetroTv): el video/imagen va en el tubo */}
      <RetroTv channel={channel} powered={powered} screenRef={ref}>
        <CrtScreen channel={channel} powered={powered}>
          {card.videoUrl ? (
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
          ) : (
            <img
              src={card.image}
              alt={card.projectTitle}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )}
        </CrtScreen>
      </RetroTv>

      {/* Ficha del proyecto: misma lengua "pixel corner" que las .px-card */}
      <div className="proj-card">
        <div className="proj-card-inner">
          <div className="proj-card-head">
            <p className="proj-card-title">{card.projectTitle.replace(/\.$/, "")}</p>
            {(card.repoUrl || card.liveUrl) && (
              <div className="proj-card-links">
                {card.repoUrl && (
                  <a
                    className="proj-link"
                    href={card.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.projects.repoLabel}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>{t.projects.repoLabel}</span>
                  </a>
                )}
                {card.liveUrl && (
                  <a
                    className="proj-link"
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.projects.liveLabel}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span>{t.projects.liveLabel}</span>
                  </a>
                )}
              </div>
            )}
          </div>
          <p className="proj-card-text">{card.bodyText}</p>
          <div className="proj-chips">
            {card.techStack.map((tech) => (
              <span key={tech} className="proj-chip">{tech}</span>
            ))}
          </div>
          <p className="proj-card-footer">{card.footerText}</p>
        </div>
      </div>
    </GridItem>
  );
};

export const ProjectsList = () => {
  const { t } = useLanguage();

  // Datos no traducibles: media, stack y repos (en el orden de t.projects.cards)
  const mediaData: Omit<ProjectCardData, 'projectTitle' | 'bodyText' | 'footerText'>[] = [
    {
      image: '/assets/pomoplane-vuelo.png',
      techStack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind', 'three.js', 'Zustand', 'Supabase'],
      repoUrl: 'https://github.com/RiosMauricio/pomoplane',
      liveUrl: 'https://pomoplane.vercel.app/',
    },
    { videoUrl: '/assets/videoMapa.mp4', techStack: ['React', 'Redux Toolkit', 'Google Maps API'] },
    { videoUrl: '/assets/agenda.mp4', techStack: ['React', 'Redux Toolkit', 'REST API'] },
    { videoUrl: '/assets/formVideo.mp4', techStack: ['React', 'Formularios', 'Dashboards'] },
    {
      videoUrl: '/assets/videoRincones-BpFKGbOM.mp4',
      techStack: ['Angular', 'Node.js', 'MySQL', 'TypeScript', 'Canvas API'],
      repoUrl: 'https://github.com/RiosMauricio/Rincones-de-jujuy-check_in',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=8-ldV9uTK2U',
      techStack: ['Solana', 'USDC', 'Next.js', 'Web3'],
      playbackRate: 1,
    },
    {
      videoUrl: '/assets/emptytv.mp4',
      techStack: ['Angular', 'PrimeNG', 'Bootstrap'],
      repoUrl: 'https://github.com/RiosMauricio/SalvaVentura',
    },
  ];

  const cards: ProjectCardData[] = t.projects.cards.map((c, i) => {
    const media: (typeof mediaData)[number] | undefined = mediaData[i];
    return {
      ...media,
      projectTitle: c.title,
      bodyText: c.body,
      footerText: c.footer,
      techStack: media?.techStack ?? [],
    };
  });

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
          <ProjectCard key={index} card={card} channel={index + 1} delay={Math.min(index * 70, 350)} />
        ))}
      </Grid>
    </>
  )
}
