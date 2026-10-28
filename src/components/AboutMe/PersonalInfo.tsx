import { Card } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import { GlitchText } from "@/components/GlitchText"
import "@/styles/AboutMe.css"

export const PersonalInfo = () => {
  const { t } = useLanguage();
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
          <Text className="kicker" mb={1}>{"// 01"}</Text>
          <Heading className="subtitle" size={'md'}><GlitchText text={t.about.title} /></Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <p className="paragraph">
            {t.about.paragraph}
          </p>
        </Card.Body>
      </Card.Root>
    </>
  )
}
