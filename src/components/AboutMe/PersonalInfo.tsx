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
        className="px-card"
        bg="transparent"
        border="none"
        boxShadow="none"
      >
        <Card.Header>
          <Text className="px-kicker" mb={1}>{"// 01"}</Text>
          <Heading className="px-title" size={'md'}><GlitchText text={t.about.title} /></Heading>
        </Card.Header>
        <Card.Body color="gray.300">
          <p className="paragraph">
            {t.about.paragraph}
          </p>
        </Card.Body>
      </Card.Root>
    </>
  )
}
