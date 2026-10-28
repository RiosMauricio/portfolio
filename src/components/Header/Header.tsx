import { Box, Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/languageContext";

export const Header = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <Box
        bg="rgba(23, 25, 35, 0.72)"
        backdropFilter="blur(12px)"
        p={scrolled ? 1.5 : 2}
        borderRadius={6}
        border="1px solid"
        borderColor="var(--line)"
        boxShadow={scrolled ? "0 12px 32px rgba(0, 0, 0, 0.55)" : "md"}
        transition="padding 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out)"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={scrolled ? 3 : 4}>
          {navItems.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <GridItem key={to}>
                <Link to={to} aria-current={active ? "page" : undefined}>
                  <Button
                    position="relative"
                    bg="transparent"
                    color={active ? "var(--accent-strong)" : "gray.200"}
                    colorScheme="blue"
                    _hover={{ backgroundColor: "blue.900" }}
                    variant="subtle"
                    size="md"
                    whiteSpace="nowrap"
                    _after={
                      active
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: "4px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            w: "18px",
                            h: "2px",
                            borderRadius: "full",
                            bg: "var(--accent)",
                          }
                        : undefined
                    }
                  >
                    {label}
                  </Button>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
};
