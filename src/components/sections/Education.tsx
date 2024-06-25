import { Stack, Typography } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  education: {
    course: string;
    school: string;
  }[];
}

export default function Education({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Education and Certification" pb={1}>
      {resumeData.education.map((e) => {
        return (
          <Stack direction="row" key={e.school}>
            <Typography variant="body1" pr={0.5} sx={{ fontWeight: "bold" }}>
              {`${e.course}, `}{" "}
            </Typography>
            <Typography variant="body1">{e.school}</Typography>
          </Stack>
        );
      })}
    </Section>
  );
}
