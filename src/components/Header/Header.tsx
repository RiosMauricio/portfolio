import { Box, Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      justify="center"
      bg="transparent"
      p={3}
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      zIndex={1000}
    >
      <Box bg="gray.900" p={2} w={80} borderRadius={6} boxShadow="md">
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem>
            <Link to="/">
              <Button
                bg="gray.900"
                colorScheme="blue"
                _hover={{ backgroundColor: "blue.900" }}
                variant="subtle"
                size="md"
              >
                About me
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/projects">
              <Button
                bg="gray.900"
                colorScheme="blue"
                _hover={{ backgroundColor: "blue.900" }}
                variant="subtle"
                size="md"
              >
                Projects
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/demos">
              <Button
                bg="gray.900"
                colorScheme="blue"
                _hover={{ backgroundColor: "blue.900" }}
                variant="subtle"
                size="md"
              >
                Demos
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};
