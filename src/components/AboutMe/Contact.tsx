import { Grid, GridItem, Box, Image, Link } from "@chakra-ui/react"

export const Contact = () => {
  return (
    <>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
        <GridItem>
          <a href="mailto:riosmaurii@gmail.com">
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={5} _hover={{backgroundColor: 'blue.900'}}>
              <Image mt={3} src="/assets/gmailIcon.jpg" h={'18vh'} />
              <Link mt={4} mb={2} href="mail.to:riosmauri@gmail.com">riosmaurii@gmail.com</Link>
            </Box>
          </a>

        </GridItem>

        <GridItem>
          <a href="https://www.linkedin.com/in/rios-mauricio-4504532b9">
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={5} _hover={{backgroundColor: 'blue.900'}}>
              <Image mt={3} src="/assets/likedinIcon.png" h={'18vh'}/>
              <Link mt={4} mb={2}>Rios Mauricio</Link>
            </Box>
          </a>
        </GridItem>

        <GridItem>
          <a href="https://github.com/RiosMauricio">
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={5} _hover={{backgroundColor: 'blue.900'}}>
              <Image mt={3} src="/assets/githubIcon.png" h={'18vh'} />
              <Link mt={4} mb={2}>Rios Mauricio</Link>
            </Box>
          </a>
        </GridItem>
      </Grid>
    </>
  )
}
