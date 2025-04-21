import { Card, Heading, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { WorkExp } from "./WorkExp";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { LuNotebookPen } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
import { Contact } from "./Contact";

export const Formation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    // Agregamos el listener para "resize"
    window.addEventListener("resize", handleResize);
    // Limpiamos el listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Card.Root
        size="sm"
        m={4}
        transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card.Header>
          <Heading className="subtitle" size="md">
            Mi formación
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Tabs.Root defaultValue="works">
            <Tabs.List>
              <Tabs.Trigger value="works">
                <MdOutlineWorkOutline />
                {screenWidth > 767 && <>Trabajos</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="education">
                <LuNotebookPen />
                {screenWidth > 767 && <>Educación</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="skills">
                <VscTools />
                {screenWidth > 767 && <>Habilidades</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="contact">
                <BsPhone />
                {screenWidth > 767 && <>Contacto</>}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="works">
              <WorkExp />
            </Tabs.Content>
            <Tabs.Content value="education">
              <Education />
            </Tabs.Content>
            <Tabs.Content value="skills">
              <Skills />
            </Tabs.Content>
            <Tabs.Content value="contact">
              <Contact />
            </Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </>
  );
};