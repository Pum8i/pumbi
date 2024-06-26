import { Breakpoints, useMediaQuery } from "@mui/material";

export const useDeviceSize = () => {
  const isSmallScreen = useMediaQuery((theme: { breakpoints: Breakpoints }) =>
    theme.breakpoints.down("sm")
  );
  return { isSmallScreen };
};
