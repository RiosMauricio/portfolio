import { CardSlider } from "../utils/CardSlider"
import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

export const Skills = () => {
  const { t } = useLanguage();
  return (
    <Box w={'100%'} display={'flex'} justifyContent={'center'} gap={6} flexDirection={'column'} alignItems={'center'}>
      <Heading className="paragraph" size={'md'} ml={2}>
        {t.skills.text}
      </Heading>
      <CardSlider></CardSlider>
    </Box>
  )
}
