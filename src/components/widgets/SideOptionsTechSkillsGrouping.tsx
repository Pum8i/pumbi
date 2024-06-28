import {
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTechSkillsContext } from "src/hooks/ContextHooks";

export default function SideOptionsTechSkillsGrouping({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const { skillGrouping, setSkillGrouping } = useTechSkillsContext();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAcc: string
  ) => {
    setSkillGrouping(newAcc);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ alignItems: "center" }}>
      <FormLabel id="tech-skills-toggle-group-label">
        <Typography align="center" fontWeight="bold">
          Technical Skills Grouping
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          List Technical skills as one big list or group them be technology
        </Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        aria-label="Tech skills button group"
        exclusive
        value={skillGrouping}
        onChange={handleChange}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        <ToggleButton value={"none"}>{"None"}</ToggleButton>
        <ToggleButton value={"tech"}>{"Technology"}</ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
}
