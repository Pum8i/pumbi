import { Typography } from "@mui/material";
import Section from "./Section";

interface IData {
  summary: string;
  summary2: string;
}

export function Summary({ resumeData }: { resumeData: IData }) {
  return (
    <>
      <Section sectionTitle="Professional Summary">
        <Typography variant="body1" paragraph align="justify">
          {resumeData.summary}
        </Typography>
        <Typography variant="body1" paragraph align="justify">
          {resumeData.summary2}
        </Typography>
      </Section>
    </>
  );
}
