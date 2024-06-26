import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import * as React from "react";
import { useTechSkillsContext } from "src/hooks/ContextHooks";

const Label = ({
  isSmallScreen,
  label,
  skillGrouping,
}: {
  isSmallScreen: boolean;
  label: string;
  skillGrouping: string;
}) => {
  return (
    <FormControlLabel
      value={skillGrouping}
      control={<Radio />}
      label={label}
      labelPlacement={isSmallScreen ? "end" : "bottom"}
    />
  );
};

export default function SideOptionsTechSkillsGrouping({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const { skillGrouping, setSkillGrouping } = useTechSkillsContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkillGrouping((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ alignItems: "center" }}>
      <FormLabel id="accent-color-radio-buttons-group-label">
        Technical Skills Grouping
      </FormLabel>
      <RadioGroup
        aria-labelledby="accent-color-radio-buttons-group-label"
        name="accent-color-radio-buttons-group"
        value={skillGrouping}
        onChange={handleChange}
        row={isSmallScreen ? false : true}
      >
        <Label
          skillGrouping={"none"}
          label="None"
          isSmallScreen={isSmallScreen}
        />
        <Label
          skillGrouping={"tech"}
          label="Technology"
          isSmallScreen={isSmallScreen}
        />
      </RadioGroup>
    </FormControl>
  );
}
