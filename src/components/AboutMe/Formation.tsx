import { Card } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Tabs } from "@chakra-ui/react"
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { WorkExp } from "./WorkExp";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { LuNotebookPen } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
import "@/styles/AboutMe.css"
import { Contact } from "./Contact";

export const Formation = () => {
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
          <Tabs.Root defaultValue="works" >
            <Tabs.List>
              <Tabs.Trigger value="works">
                <MdOutlineWorkOutline />
                Trabajos
              </Tabs.Trigger>
              <Tabs.Trigger value="education">
                <LuNotebookPen />
                Educación
              </Tabs.Trigger>
              <Tabs.Trigger value="contact">
                <BsPhone />
                Contacto
              </Tabs.Trigger>
              <Tabs.Trigger value="skills">
                <VscTools />
                Habilidades
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="works" _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}>
              <WorkExp></WorkExp>
            </Tabs.Content>
            <Tabs.Content value="education" _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}>
              <Education></Education>
            </Tabs.Content>
            <Tabs.Content value="contact" _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}>
              <Contact></Contact>
              <Tabs.Content value="skills" _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "300ms",
              }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "120ms",
                }}>
                <Skills></Skills>
              </Tabs.Content>
            </Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </>
  )
}
