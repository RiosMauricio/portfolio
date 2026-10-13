import { Dialog, Box, Flex, Text } from "@chakra-ui/react"
import { CalendarDemo } from "./CalendarDemo"
import { StatsDemo } from "./StatsDemo"
import { MapDemo } from "./MapDemo"
import { FormDemo } from "./FormDemo"
import { TerminalDemo } from "./TerminalDemo"
import { DemoErrorBoundary } from "./DemoErrorBoundary"
import { useLanguage } from "@/i18n/languageContext"

export const ShowedDemo = ({ mode, open, setOpen }: { mode: string; open: boolean; setOpen: (open: boolean) => void }) => {
  const { t } = useLanguage();

  const getDemoContent = () => {
    switch (mode) {
      case 'stats':
        return <StatsDemo />;
      case 'calendar':
        return <CalendarDemo />;
      case 'map':
        return <MapDemo />;
      case 'form':
        return <FormDemo />;
      case 'terminal':
        return <TerminalDemo />;
      default:
        return <StatsDemo />;
    }
  };

  const getDialogTitle = () => {
    const titles = t.demos.dialogTitles;
    switch (mode) {
      case 'stats': return titles.stats;
      case 'calendar': return titles.calendar;
      case 'map': return titles.map;
      case 'form': return titles.form;
      case 'terminal': return titles.terminal;
      default: return titles.stats;
    }
  };

  return (
    <Dialog.Root
      scrollBehavior={'inside'}
      open={open}
      size={'xl'}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Dialog.Backdrop bg="rgba(8, 10, 14, 0.6)" backdropFilter="blur(3px)" />
      <Dialog.Positioner>
        <Dialog.Content
          borderRadius="12px"
          bg="#16191f"
          border="1px solid #2d3748"
          overflow="hidden"
          boxShadow="0 30px 80px rgba(0, 0, 0, 0.7)"
          transformOrigin="bottom center"
          css={{
            "&[data-state='open']": {
              animation: "demo-window-in 0.28s cubic-bezier(0.22, 1.2, 0.36, 1) both",
            },
          }}
        >
          {/* Barra de ventana estilo macOS — el dot rojo cierra */}
          <Flex
            h="36px"
            bg="rgba(15, 17, 21, 0.85)"
            borderBottom="1px solid #2d3748"
            alignItems="center"
            px={3}
            gap={2}
            position="relative"
            flexShrink={0}
          >
            <Dialog.CloseTrigger asChild>
              <Box
                as="button"
                w="12px"
                h="12px"
                borderRadius="full"
                bg="#f56565"
                cursor="pointer"
                _hover={{ bg: "#f05252" }}
                aria-label="Close"
              />
            </Dialog.CloseTrigger>
            <Box w="12px" h="12px" borderRadius="full" bg="#ecc94b" opacity={0.85} />
            <Box w="12px" h="12px" borderRadius="full" bg="#48bb78" opacity={0.85} />
            <Text
              position="absolute"
              left="50%"
              transform="translateX(-50%)"
              fontSize="xs"
              color="gray.300"
              fontFamily="monospace"
              letterSpacing="wide"
            >
              {getDialogTitle().toLowerCase()} — demos
            </Text>
          </Flex>

          <Box overflowY="auto" maxH="72vh" p={4}>
            {/* key remonta el boundary en cada apertura/modo para resetear hasError */}
            <DemoErrorBoundary key={`${mode}-${open}`}>
              {getDemoContent()}
            </DemoErrorBoundary>
          </Box>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
