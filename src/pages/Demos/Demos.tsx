import { Box } from "@chakra-ui/react";
import '@/styles/Dock.css';

export const Demos = () => {
  return (
    <>
      <Box>
        <div className="Dock">
          <div data-name="Home" className="Icon material-icons">face</div>
          <div data-name="Time" className="Icon material-icons">watch_later</div>
          <div data-name="Search" className="Icon material-icons">zoom_in</div>
        </div>
      </Box>
    </>
  );
};