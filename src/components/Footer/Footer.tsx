import { Box, Flex, Text, IconButton, Separator } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/i18n/languageContext";

export const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const links = [
    { icon: <FaGithub />, href: "https://github.com/RiosMauricio", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rios-mauricio-4504532b9", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:riosmaurii@gmail.com", label: "Email" },
  ];

  return (
    <Box as="footer" w="100%" py={6} px={4}>
      <Separator mb={5} />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
        maxW="1100px"
        mx="auto"
      >
        <Text color="gray.400" fontSize="sm" textAlign="center">
          © {year} Mauricio Ríos · {t.footer.role} · {t.footer.location}
        </Text>
        <Flex gap={2}>
          {links.map(({ icon, href, label }) => (
            <IconButton
              key={label}
              asChild
              aria-label={label}
              variant="ghost"
              size="sm"
              color="gray.400"
              _hover={{ color: "blue.300" }}
            >
              <a
                href={href}
                {...(href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {icon}
              </a>
            </IconButton>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
