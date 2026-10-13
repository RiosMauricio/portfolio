import { Card, Icon } from "@chakra-ui/react"
import { Float } from "@chakra-ui/react"
import { Blockquote } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

export const Education = () => {
  const { t } = useLanguage();

  return (
    <>
      <Card.Root border={'transparent'}>
        <Card.Body color="fg.muted">
          {t.education.map((item, index) => {
            const alignEnd = index % 2 === 1;
            return (
              <Blockquote.Root
                key={item.title}
                variant={'plain'}
                my={2}
                colorPalette={'blue'}
                justify={alignEnd ? 'end' : 'start'}
              >
                <Float placement={alignEnd ? 'top-end' : 'top-start'} offsetY={"2"}>
                  <Icon my={2} ml={alignEnd ? 0 : 2} mr={alignEnd ? 2 : 0}>
                    <img src="/assets/bookspng.png" style={{ height: '3vh', width: '3vh' }} alt="" />
                  </Icon>
                </Float>
                <Blockquote.Content>
                  <Heading className="subtitle" size={'md'}>{item.title}</Heading>
                </Blockquote.Content>
                <Blockquote.Caption>
                  <cite>{item.place}</cite>
                </Blockquote.Caption>
              </Blockquote.Root>
            );
          })}
        </Card.Body>
      </Card.Root>
    </>
  )
}
