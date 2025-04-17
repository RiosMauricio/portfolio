import { Card, Icon } from "@chakra-ui/react"
import { Float } from "@chakra-ui/react"
import { Blockquote } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { List } from "@chakra-ui/react"
import "@/styles/AboutMe.css"

export const WorkExp = () => {
  return (
    <>
      <Card.Root border={'transparent'}>
        <Card.Body color="fg.muted">
          <Blockquote.Root variant={'plain'} my={2} colorPalette={'blue'} justify={'start'}>
            <Float placement={"top-start"} offsetY={"2"}>
              <Icon my={2} ml={2}>
                <img src="/assets/shovel.png" style={{ height: '3vh', width: '3vh' }} alt="" />
              </Icon>
            </Float>
            <Blockquote.Content>
              <Heading className="subtitle" size={'md'}>Ministerio Público de la Acusación</Heading>
            </Blockquote.Content>
            <Blockquote.Caption>
              <List.Root>
                <List.Item>
                  Implementación de tecnologías web como JavaScript en ReactJs
                  para el desarrollo de interfaces de usuario dinámicas e interactivas.
                </List.Item>
                <List.Item>
                  Creación y uso de servicios, para la gestión y visualización de datos
                  utilizando NodeJs.
                </List.Item>
              </List.Root>
            </Blockquote.Caption>
          </Blockquote.Root>

          <Blockquote.Root variant={'plain'} my={2} colorPalette={'blue'} justify={'end'}>
            <Float placement={"top-end"} offsetY={"2"}>
              <Icon my={2} mr={2}>
                <img src="/assets/shovel.png" style={{ height: '3vh', width: '3vh' }} alt="" />
              </Icon>
            </Float>
            <Blockquote.Content>
              <Heading className="subtitle" size={'md'}>Freelancer</Heading>
            </Blockquote.Content>
            <Blockquote.Caption>
              <List.Root>
                <List.Item>
                  Página web para registro de Check-in en hotel, utilizando MySql, NodeJs, Angular y Typescript.
                </List.Item>
                <List.Item>
                  Proyecto de aplicación web estilo red social, utilizando el ORM Prisma con Mysql, NodeJs, Angular y Typescript.
                </List.Item>
              </List.Root>
            </Blockquote.Caption>
          </Blockquote.Root>

          <Blockquote.Root variant={'plain'} my={2} colorPalette={'blue'} justify={'start'}>
            <Float placement={"top-start"} offsetY={"2"}>
              <Icon my={2} ml={2}>
                <img src="/assets/shovel.png" style={{ height: '3vh', width: '3vh' }} alt="" />
              </Icon>
            </Float>
            <Blockquote.Content>
              <Heading className="subtitle" size={'md'}>Facultad de ciencias economicas</Heading>
            </Blockquote.Content>
            <Blockquote.Caption>
              <List.Root>
                <List.Item>
                  Ayudante en capacitación de herramientas ofimáticas
                  <List.Root ps="5">
                    <List.Item>Planificación de programa de aprendizaje.</List.Item>
                    <List.Item>Dictado de clases virtuales y presenciales.</List.Item>
                  </List.Root>
                </List.Item>
              </List.Root>
            </Blockquote.Caption>
          </Blockquote.Root>
        </Card.Body>
      </Card.Root>
    </>
  )
}
