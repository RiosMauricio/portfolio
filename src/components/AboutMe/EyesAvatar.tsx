import { Box, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

/*
 * Avatar con ojos que siguen el cursor.
 * La imagen es una ilustración plana (512×512): cada ojo original es una
 * píldora negra de ~14×48px centrada en y≈59.8%. Se cubre con un parche
 * del color de piel (#c99061) y encima se dibuja una pupila que se
 * desplaza hacia el cursor, recortada por el parche (overflow hidden).
 */

// Posiciones medidas sobre el PNG: (x%, y%) del centro de cada ojo
const EYES = [
  { left: "36.9%", top: "59.8%" },
  { left: "63.9%", top: "59.8%" },
];

const SKIN = "#c99061";
const PUPIL = "#111111";

export const EyesAvatar = ({ size = "300px" }: { size?: string }) => {
  const patchRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pupilRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      patchRefs.current.forEach((patch, i) => {
        const pupil = pupilRefs.current[i];
        if (!patch || !pupil) return;
        const r = patch.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const angle = Math.atan2(dy, dx);
        // Recorrido proporcional a la distancia, con tope (~120px = mirada máxima)
        const t = Math.min(Math.hypot(dx, dy) / 120, 1);
        pupil.style.transform = `translate(${Math.cos(angle) * t * 5}px, ${Math.sin(angle) * t * 7}px)`;
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Box position="relative" boxSize={size} flexShrink={0}>
      <Image src="assets/1656613.png" boxSize={size} borderRadius="full" fit="cover" alt="Mauricio" />
      {EYES.map((pos, i) => (
        <Box
          key={i}
          ref={(el: HTMLDivElement | null) => { patchRefs.current[i] = el; }}
          position="absolute"
          left={pos.left}
          top={pos.top}
          transform="translate(-50%, -50%)"
          w="24px"
          h="52px"
          borderRadius="full"
          bg={SKIN}
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Box
            ref={(el: HTMLDivElement | null) => { pupilRefs.current[i] = el; }}
            w="9px"
            h="28px"
            borderRadius="full"
            bg={PUPIL}
            transition="transform 0.08s ease-out"
          />
        </Box>
      ))}
    </Box>
  );
};
