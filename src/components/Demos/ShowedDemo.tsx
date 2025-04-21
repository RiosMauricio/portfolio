import {
  Box,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react"
import { CalendarDemo } from "./CalendarDemo"
import { MapDemo } from "./MapDemo";
import { FormDemo } from "./FormDemo";
import { StatsDemo } from "./StatsDemo";

// Tipar las props del componente
interface ShowedDemoProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;  // Función que actualiza el estado de open
  mode: string;
}

export const ShowedDemo = ({ open, setOpen, mode }: ShowedDemoProps) => {
  const dialogTitles: Record<string, string> = {
    stats: "Estadísticas",
    calendar: "CALENDARIO",
    map: "Mapa",
    form: "Formulario",
  };

  function dialogHeader(mode: string): string {
    return dialogTitles[mode] || "Modo desconocido";
  }
  return (
    <>
      <Dialog.Root
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement={'center'}
        motionPreset={'scale'}
        size={mode === 'form' ? 'lg' : 'xl'}
      >
        <Portal>
          <Dialog.Backdrop
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="72%"
            h={"70%"}
            mt={7}
            backgroundColor={open ? "rgba(0, 0, 0, 0.43)" : 'transparent'}
            borderRadius="5px"
            padding="20px"
          />
          <Dialog.Positioner w={'100%'} h={'100%'}>
            <Dialog.Content
              backgroundColor="#222280a8"
              boxShadow="none"
              w={'100%'}
            >
              <Dialog.Header>
                <Dialog.Title>{dialogHeader(mode)}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Box
                  maxH="330px" /* Altura máxima de la caja */
                  overflowY="auto" /* Activa el scroll vertical cuando el contenido excede la altura */
                  padding="10px" /* Opcional: agrega padding interno para mejor separación visual */
                  borderRadius="5px" /* Bordes redondeados */
                >
                  {mode === 'stats' && <StatsDemo />}
                  {mode === 'calendar' && <CalendarDemo />}
                  {mode === 'map' && <MapDemo />}
                  {mode === 'form' && <FormDemo />}
                </Box>
              </Dialog.Body>

              {/* <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Save</Button>
              </Dialog.Footer> */}

              <Dialog.CloseTrigger asChild bg={'#692020'} _hover={{ backgroundColor: 'red' }}>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
