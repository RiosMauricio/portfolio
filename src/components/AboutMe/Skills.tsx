import { CardSlider } from "../utils/CardSlider"
import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import "@/styles/AboutMe.css"

export const Skills = () => {
  return (
    <Box w={'100%'} display={'flex'} justifyContent={'center'} gap={6} flexDirection={'column'} alignItems={'center'}>
      <Heading className="paragraph" size={'md'} ml={2}>
        Forme parte de proyectos donde empleé diversas tecnologías. En el desarrollo frontend, implementé TypeScript con Angular y 
        JavaScript con React, adaptándome a las necesidades específicas de cada proyecto. Para el desarrollo backend, trabajé con 
        NodeJs y gestioné las bases de datos con MongoDB para esquemas no relacionales y MySql para bases de datos relacionales.
      </Heading>
      <CardSlider></CardSlider>
    </Box>
  )
}
