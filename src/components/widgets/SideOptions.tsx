import { Global } from "@emotion/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import { useAccentContext } from "src/hooks/ContextHooks";
import * as React from "react";

const drawerBleeding = 48;

const Label = ({
  accentColor,
  label,
}: {
  accentColor: string;
  label: string;
}) => {
  return (
    <FormControlLabel
      value={accentColor}
      control={<Radio sx={{ color: accentColor }} />}
      componentsProps={{ typography: { color: accentColor } }}
      label={label}
    />
  );
};

export default function SideOptions() {
  const theme = useTheme();
  const { accentColor, setAccentColor } = useAccentContext();
  const [open, setOpen] = React.useState(false);

  const { blue, brown, burgundy, green, orange, purple } =
    theme.palette.accents;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccentColor((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            width: `calc(50% - ${drawerBleeding}px)`,
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
            pb: 2,
            height: "100%",
            overflow: "auto",
            backgroundColor: "lightgray",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Accent Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={blue}
              name="radio-buttons-group"
              value={accentColor}
              onChange={handleChange}
            >
              <Label accentColor={blue} label="Blue" />
              <Label accentColor={brown} label="Brown" />
              <Label accentColor={burgundy} label="Burgundy" />
              <Label accentColor={green} label="Green" />
              <Label accentColor={orange} label="Orange" />
              <Label accentColor={purple} label="Purple" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Drawer>
    </div>
  );
}
