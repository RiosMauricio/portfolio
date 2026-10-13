import { Card, Icon } from "@chakra-ui/react"
import { Float } from "@chakra-ui/react"
import { Blockquote } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { List } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

export const WorkExp = () => {
  const { t } = useLanguage();

  return (
    <>
      <Card.Root border={'transparent'}>
        <Card.Body color="fg.muted">
          {t.work.map((job, index) => {
            const alignEnd = index % 2 === 1;
            return (
              <Blockquote.Root
                key={job.title}
                variant={'plain'}
                my={2}
                colorPalette={'blue'}
                justify={alignEnd ? 'end' : 'start'}
              >
                <Float placement={alignEnd ? 'top-end' : 'top-start'} offsetY={"2"}>
                  <Icon my={2} ml={alignEnd ? 0 : 2} mr={alignEnd ? 2 : 0}>
                    <img src="/assets/shovel.png" style={{ height: '3vh', width: '3vh' }} alt="" />
                  </Icon>
                </Float>
                <Blockquote.Content>
                  <Heading className="subtitle" size={'md'}>
                    {job.title}
                    {'period' in job && job.period && (
                      <Text as="span" fontSize="sm" color="gray.400" fontWeight="normal"> · {job.period}</Text>
                    )}
                  </Heading>
                </Blockquote.Content>
                <Blockquote.Caption>
                  <List.Root>
                    {job.points.map((point, i) => (
                      <List.Item key={i}>{point}</List.Item>
                    ))}
                  </List.Root>
                </Blockquote.Caption>
              </Blockquote.Root>
            );
          })}
        </Card.Body>
      </Card.Root>
    </>
  )
}
