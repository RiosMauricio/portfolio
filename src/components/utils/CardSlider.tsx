import '../../styles/CardSlider.css';
import '../../styles/AboutMe.css';
import { TbBrandTypescript } from "react-icons/tb"; // Importa íconos necesarios
import { FaReact, FaNodeJs, FaAngular, FaJs, FaDatabase, FaGit } from "react-icons/fa"; // Otros íconos de ejemplo
import { Box, Flex } from '@chakra-ui/react';

export const CardSlider = () => {
  // Arreglo de datos con íconos dinámicos para las tarjetas
  const cards = [
    { position: 1, title: "React", subtitle: "Am Ashwin.A", icon: <FaReact color="cyan" size="4em" /> },
    { position: 2, title: "Angular", subtitle: "ashwin_ambar_", icon: <FaAngular color="red" size="4em" /> },
    { position: 3, title: "NodeJs", subtitle: "for an image slider", icon: <FaNodeJs color="green" size="4em" /> },
    { position: 4, title: "JavaScript", subtitle: "Am Ashwin.A", icon: <FaJs color="yellow" size="4em" /> },
    { position: 5, title: "TypeScript", subtitle: "Am Ashwin.A", icon: <TbBrandTypescript color="blue" size="4em" /> },
    { position: 6, title: "MySql", subtitle: "CSS can be fun!", icon: <FaDatabase color="orange" size="4em" /> },
    { position: 7, title: "MongoDB", subtitle: "Flexible and dynamic", icon: <FaDatabase color="green" size="4em" /> },
    { position: 8, title: "Git", subtitle: "Code your own way!", icon: <FaGit color="orange" size="4em" /> },
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