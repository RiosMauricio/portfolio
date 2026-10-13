import { Box, Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/languageContext";

export const Header = () => {
  const { t } = useLanguage();

  const navItems = [
    { to: "/", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/demos", label: t.nav.demos },
  ];

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
      gap={3}
    >
      <Box bg="gray.900" p={2} borderRadius={6} boxShadow="md">
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {navItems.map(({ to, label }) => (
            <GridItem key={to}>
              <Link to={to}>
                <Button
                  bg="gray.900"
                  colorScheme="blue"
                  _hover={{ backgroundColor: "blue.900" }}
                  variant="subtle"
                  size="md"
                  whiteSpace="nowrap"
                >
                  {label}
                </Button>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
