import { Card, Heading, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { WorkExp } from "./WorkExp";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { LuNotebookPen } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
import { Contact } from "./Contact";
import { useLanguage } from "@/i18n/languageContext";
import { GlitchText } from "@/components/GlitchText";

export const Formation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { t } = useLanguage();

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
        className="px-card"
        bg="transparent"
        border="none"
        boxShadow="none"
      >
        <Card.Header>
          <Text className="px-kicker" mb={1}>{"// 02"}</Text>
          <Heading className="px-title" size="md">
            <GlitchText text={t.formation.title} />
          </Heading>
        </Card.Header>
        <Card.Body color="gray.300">
          <Tabs.Root defaultValue="works" className="arcade-tabs">
            <Tabs.List>
              <Tabs.Trigger value="works">
                <MdOutlineWorkOutline />
                {screenWidth > 767 && <>{t.formation.tabs.works}</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="education">
                <LuNotebookPen />
                {screenWidth > 767 && <>{t.formation.tabs.education}</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="skills">
                <VscTools />
                {screenWidth > 767 && <>{t.formation.tabs.skills}</>}
              </Tabs.Trigger>
              <Tabs.Trigger value="contact">
                <BsPhone />
                {screenWidth > 767 && <>{t.formation.tabs.contact}</>}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="works" className="px-card px-card--panel">
              <WorkExp />
            </Tabs.Content>
            <Tabs.Content value="education" className="px-card px-card--panel">
              <Education />
            </Tabs.Content>
            <Tabs.Content value="skills" className="px-card px-card--panel">
              <Skills />
            </Tabs.Content>
            <Tabs.Content value="contact" className="px-card px-card--panel">
              <Contact />
            </Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </>
  );
};