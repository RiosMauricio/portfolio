import { Box } from "@chakra-ui/react";
import { useGlitchBursts } from "@/hooks/useGlitchBursts";
import { PixelAvatar, PixelAvatarCopy } from "./PixelAvatar/PixelAvatar";

/*
 * Avatar del hero: busto pixel-art (PixelAvatar/) dentro del anillo + glow
 * de acento de siempre. El sprite vive sobre un circulo navy con scanlines
 * suaves; las pupilas siguen el cursor (o miran al azar en tactil), parpadea
 * y "respira" 1px en steps(). Sobre el wrapper van dos copias monocromas
 * (cyan/magenta) que el glitch recorta en franjas ~320ms — mismas rafagas
 * que el nombre via useGlitchBursts/.is-glitching, mas :hover en CSS.
 * prefers-reduced-motion: sprite estatico sin mirada, parpadeo ni glitch.
 */
export const HeroAvatar = ({ size = "300px" }: { size?: string }) => {
  const glitchRef = useGlitchBursts<HTMLDivElement>(true);

  return (
    <Box boxSize={size} flexShrink={0}>
      <Box
        ref={glitchRef}
        className="pixel-avatar"
        position="relative"
        boxSize="100%"
        borderRadius="full"
        overflow="hidden"
        boxShadow="0 0 0 2px rgba(144, 205, 244, 0.42), 0 0 60px 6px rgba(99, 179, 237, 0.22)"
      >
        <PixelAvatar />
        <Box className="pa-copy pa-copy-a" aria-hidden="true">
          <PixelAvatarCopy fill="#22d3ee" />
        </Box>
        <Box className="pa-copy pa-copy-b" aria-hidden="true">
          <PixelAvatarCopy fill="#f472b6" />
        </Box>
        <Box className="pa-scan" aria-hidden="true" />
      </Box>
    </Box>
  );
};
