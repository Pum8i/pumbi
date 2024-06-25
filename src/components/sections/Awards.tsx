import { Typography } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  awards: string[];
}

export default function Awards({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Awards">
      {resumeData.awards.map((award) => {
        return (
          <Typography variant="body1" align="left" key={award}>
            {award}
          </Typography>
        );
      })}
    </Section>
  );
}
