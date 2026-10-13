import '../../styles/CardSlider.css';
import '../../styles/AboutMe.css';
import { TbBrandTypescript } from "react-icons/tb"; // Importa íconos necesarios
import { FaReact, FaNodeJs, FaAngular, FaJs, FaDatabase, FaGit } from "react-icons/fa"; // Otros íconos de ejemplo
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSolana, SiSupabase } from "react-icons/si";
import { Box, Flex } from '@chakra-ui/react';

export const CardSlider = () => {
  // Arreglo de datos con íconos dinámicos para las tarjetas
  const cards = [
    { position: 1, title: "React", icon: <FaReact className='icon' color="cyan" size="4em" /> },
    { position: 2, title: "Angular", icon: <FaAngular className='icon' color="red" size="4em" /> },
    { position: 3, title: "NodeJs", icon: <FaNodeJs className='icon' color="green" size="4em" /> },
    { position: 4, title: "JavaScript", icon: <FaJs className='icon' color="yellow" size="4em" /> },
    { position: 5, title: "TypeScript", icon: <TbBrandTypescript className='icon' color="blue" size="4em" /> },
    { position: 6, title: "Next.js", icon: <RiNextjsFill className='icon' color="white" size="4em" /> },
    { position: 7, title: "MySql", icon: <FaDatabase className='icon' color="orange" size="4em" /> },
    { position: 8, title: "PostgreSQL", icon: <BiLogoPostgresql className='icon' color="#336791" size="4em" /> },
    { position: 9, title: "MongoDB", icon: <FaDatabase className='icon' color="green" size="4em" /> },
    { position: 10, title: "Supabase", icon: <SiSupabase className='icon' color="#3ecf8e" size="4em" /> },
    { position: 11, title: "Solana", icon: <SiSolana className='icon' color="#9945FF" size="4em" /> },
    { position: 12, title: "Git", icon: <FaGit className='icon' color="orange" size="4em" /> },
  ];

  return (
    <div
      className="slider"
      style={{
        '--width': '200px',
        '--height': '150px',
        '--quantity': cards.length.toString(),
      } as React.CSSProperties}
    >
      <div className="list">
        {cards.map((card) => (
          <div
            key={card.position}
            className="item"
            style={{ '--position': card.position } as React.CSSProperties}
          >
            <div className="card">
              {/* Renderiza el ícono dinámicamente */}
              <Box color="white" borderRadius="md">
                <Flex justify="center" align="center" my={3} height="100%" flexDirection="row" gap={6}>
                  {card.icon}
                </Flex>
                <p className='subtitle'>{card.title}</p>
                {/* <p>{card.subtitle}</p> */}
              </Box>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};