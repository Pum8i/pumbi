import { Typography } from "@mui/material";
import Section from "./Section";

interface IData {
  techSkills: string[];
}

export function TechnicalSkills({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Technical Skills">
      <Typography variant="body1" paragraph align="center">
        {resumeData.techSkills.join(" | ")}
      </Typography>
    </Section>
  );
}
