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
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Label = ({
  accentColor,
  label,
  isSmallScreen,
}: {
  accentColor: string;
  label: string;
  isSmallScreen: boolean;
}) => {
  return (
    <FormControlLabel
      value={accentColor}
      control={
        <Radio
          sx={{ color: accentColor }}
          checkedIcon={<RadioButtonCheckedIcon sx={{ color: accentColor }} />}
        />
      }
      componentsProps={{ typography: { color: accentColor } }}
      label={label}
      labelPlacement={isSmallScreen ? "end" : "bottom"}
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
        <Label accentColor={blue} label="Blue" isSmallScreen={isSmallScreen} />
        <Label
          accentColor={brown}
          label="Brown"
          isSmallScreen={isSmallScreen}
        />
        <Label
          accentColor={burgundy}
          label="Burgundy"
          isSmallScreen={isSmallScreen}
        />
        <Label
          accentColor={green}
          label="Green"
          isSmallScreen={isSmallScreen}
        />
        <Label
          accentColor={orange}
          label="Orange"
          isSmallScreen={isSmallScreen}
        />
        <Label
          accentColor={purple}
          label="Purple"
          isSmallScreen={isSmallScreen}
        />
      </RadioGroup>
    </FormControl>
  );
}
