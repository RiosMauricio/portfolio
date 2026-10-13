import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/languageContext";

export const NotFound = () => {
  const { t } = useLanguage();
  return (
    <Flex
      minH="70vh"
      direction="column"
      justify="center"
      align="center"
      gap={6}
      color="white"
      textAlign="center"
      px={4}
    >
      <Heading size="6xl">404</Heading>
      <Text fontSize="xl" color="gray.300">
        {t.notFound.text}
      </Text>
      <Link to="/">
        <Button colorScheme="blue" variant="solid">
          {t.notFound.button}
        </Button>
      </Link>
    </Flex>
  );
};
