import { Global } from "@emotion/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import * as React from "react";
import SideOptionsAccentColors from "./SideOptionsAccentColors";
import SideOptionsTechSkillsGrouping from "./SideOptionsTechSkillsGrouping";

interface IData {
  sideOptions: {
    description: string;
  };
}

const drawerBleeding = 48;

export default function SideOptions({ resumeData }: { resumeData: IData }) {
  const theme = useTheme();
  const { isSmallScreen } = useDeviceSize();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            maxWidth: `calc(${
              isSmallScreen ? "75%" : "50%"
            } - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            textAlign: "right",
            position: "absolute",
            top: "50%",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            visibility: "visible",
            right: -drawerBleeding,
            left: 0,
            backgroundColor: "lightgray",
          }}
        >
          <IconButton
            onClick={toggleDrawer(!open)}
            sx={{
              px: 1,
              my: 2,
              mr: 0.5,
              transform: !open ? "rotate(0deg)" : "rotate(180deg)",
              transition: theme.transitions.create("transform", {
                duration: 500,
              }),
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 2,
            py: 2,
            height: "100%",
            overflow: "auto",
            backgroundColor: "lightgray",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} p={1}>
            <InfoIcon />
            <Typography variant="body1">
              {resumeData.sideOptions.description}
            </Typography>
          </Stack>

          <SideOptionsAccentColors isSmallScreen={isSmallScreen} />
          <SideOptionsTechSkillsGrouping isSmallScreen={isSmallScreen} />
        </Box>
      </Drawer>
    </div>
  );
}
