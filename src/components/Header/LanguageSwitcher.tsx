import { Box, Button, HStack } from "@chakra-ui/react";
import { useLanguage } from "@/i18n/languageContext";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <Box
      position="fixed"
      bottom={5}
      right={5}
      zIndex={1100}
      bg="gray.900"
      borderRadius="full"
      p={1}
      boxShadow="0 4px 20px rgba(0,0,0,0.55)"
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <HStack gap={0}>
        {(["es", "en"] as const).map((l) => (
          <Button
            key={l}
            size="xs"
            px={3}
            borderRadius="full"
            variant={lang === l ? "solid" : "ghost"}
            colorScheme={lang === l ? "blue" : "gray"}
            color={lang === l ? "white" : "gray.400"}
            onClick={() => setLang(l)}
            textTransform="uppercase"
            fontWeight="bold"
          >
            {l}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};
