import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react"

export const Contact = () => {
  const contacts = [
    {
      href: "mailto:riosmaurii@gmail.com",
      img: "/assets/gmailIcon.jpg",
      label: "riosmaurii@gmail.com",
      external: false,
    },
    {
      href: "https://www.linkedin.com/in/rios-mauricio-4504532b9",
      img: "/assets/likedinIcon.png",
      label: "LinkedIn — Rios Mauricio",
      external: true,
    },
    {
      href: "https://github.com/RiosMauricio",
      img: "/assets/githubIcon.png",
      label: "GitHub — RiosMauricio",
      external: true,
    },
  ];

  return (
    <>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
        {contacts.map(({ href, img, label, external }) => (
          <GridItem key={href}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                borderRadius={5}
                p={3}
                _hover={{ backgroundColor: 'blue.900' }}
                transition="background-color 0.2s"
              >
                <Image src={img} h={'18vh'} alt={label} />
                <Text mt={4} mb={2} color="blue.300" fontSize="sm">{label}</Text>
              </Box>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
