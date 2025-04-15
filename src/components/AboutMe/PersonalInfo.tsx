import { Card } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import "@/styles/AboutMe.css"

export const PersonalInfo = () => {
  return (
    <>
      <Card.Root size="sm" m={4}>
        <Card.Header>
          <Heading className="subtitle" size={'md'}>Un poco sobre mí</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <p className="paragraph">
            ¡Hola! Soy Mauricio, un desarrollador web y analista programador universitario de 22 años con experiencia en proyectos individuales y colaborativos.
            A lo largo de mi trayectoria, he trabajado con diversas tecnologías, adaptándome rápidamente a diferentes entornos y roles. Me destaco por ser una persona social,
            con excelentes habilidades de comunicación y versatilidad tanto técnica como profesional.
            Mi objetivo es crecer constantemente en mi carrera, aprendiendo y adquiriendo nuevas habilidades que me permitan llevar cada proyecto al siguiente nivel y superar mis propios estándares.
          </p>
        </Card.Body>
      </Card.Root>
    </>
  )
}
