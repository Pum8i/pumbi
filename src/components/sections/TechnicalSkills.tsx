import { Stack, Typography } from "@mui/material";
import { useTechSkillsContext } from "src/hooks/ContextHooks";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import Section from "../widgets/Section";

interface IData {
  techSkills: {
    grouping: string;
    label: string;
    skills: { name: string; companies: string[] }[];
  }[];
}

export function TechnicalSkills({ resumeData }: { resumeData: IData }) {
  const { isSmallScreen } = useDeviceSize();
  const { skillGrouping } = useTechSkillsContext();
  const skills = resumeData.techSkills.flatMap((s) =>
    s.skills.map((s) => s.name)
  );
  const isSkillGroupingNone = skillGrouping === "none";

  return (
    <Section sectionTitle="Technical Skills" pb={isSkillGroupingNone ? 0 : 1}>
      {isSkillGroupingNone ? (
        <Typography variant="body1" paragraph align="center">
          {skills.join(" | ")}
        </Typography>
      ) : (
        resumeData.techSkills.map((ts) => {
          return (
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ md: 2 }}
              alignItems={isSmallScreen ? "flex-start" : "center"}
              pb={1}
              key={ts.grouping}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
              >{`${ts.label}:`}</Typography>
              <Typography variant="body1">
                {ts.skills.map((s) => s.name).join(" | ")}
              </Typography>
            </Stack>
          );
        })
      )}
    </Section>
  );
}
