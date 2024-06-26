import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useAccentContext } from "src/hooks/ContextHooks";

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
      labelPlacement="bottom"
    />
  );
};

export default function SideOptionsAccentColors({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const theme = useTheme();
  const { accentColor, setAccentColor } = useAccentContext();

  const { blue, brown, burgundy, green, orange, purple } =
    theme.palette.accents;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccentColor((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ alignItems: "center" }}>
      <FormLabel id="accent-color-radio-buttons-group-label">
        Accent Color
      </FormLabel>
      <RadioGroup
        aria-labelledby="accent-color-radio-buttons-group-label"
        defaultValue={blue}
        name="accent-color-radio-buttons-group"
        value={accentColor}
        onChange={handleChange}
        row={isSmallScreen ? false : true}
      >
        <Label accentColor={blue} label="Blue" />
        <Label accentColor={brown} label="Brown" />
        <Label accentColor={burgundy} label="Burgundy" />
        <Label accentColor={green} label="Green" />
        <Label accentColor={orange} label="Orange" />
        <Label accentColor={purple} label="Purple" />
      </RadioGroup>
    </FormControl>
  );
}
