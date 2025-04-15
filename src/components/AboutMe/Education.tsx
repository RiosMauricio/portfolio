import { Card, Icon } from "@chakra-ui/react"
import { Float } from "@chakra-ui/react"
import { Blockquote } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import "@/styles/AboutMe.css"

export const Education = () => {
  return (
    <>
      <Card.Root
        size="sm"
        m={4}
        transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" /* Aplica la transición en todos los estados */
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card.Header>
          <Heading className="subtitle" size={'md'}>Mi formación</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Blockquote.Root variant={'plain'} my={2} colorPalette={'blue'} justify={'start'}>
            <Float placement={"top-start"} offsetY={"2"}>
              <Icon my={2} ml={2}>
                <img src="/assets/bookspng.png" style={{ height: '3vh', width: '3vh' }} alt="" />
              </Icon>
            </Float>
            <Blockquote.Content>
              <Heading className="subtitle" size={'md'}>Técnico informático</Heading>
            </Blockquote.Content>
            <Blockquote.Caption>
              — <cite>Escuela de minas Dr. Horacio Carrillo.</cite>
            </Blockquote.Caption>
          </Blockquote.Root>

          <Blockquote.Root variant={'plain'} my={2} colorPalette={'blue'} justify={'end'}>
            <Float placement={"top-end"} offsetY={"2"}>
              <Icon my={2} mr={2}>
                <img src="/assets/bookspng.png" style={{ height: '3vh', width: '3vh' }} alt="" />
              </Icon>
            </Float>
            <Blockquote.Content>
              <Heading className="subtitle" size={'md'}>Analista programador universitario</Heading>
            </Blockquote.Content>
            <Blockquote.Caption>
              <cite>Universidad Nacional de Jujuy.</cite> —
            </Blockquote.Caption>
          </Blockquote.Root>

        </Card.Body>
      </Card.Root>
    </>
  )
}
