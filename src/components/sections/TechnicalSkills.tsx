import { Stack, Typography } from "@mui/material";
import { useTechSkillsContext } from "src/hooks/ContextHooks";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import Section from "../widgets/Section";

interface IData {
  techSkills: { grouping: string; label: string; values: string[] }[];
}

export function TechnicalSkills({ resumeData }: { resumeData: IData }) {
  const { isSmallScreen } = useDeviceSize();
  const { skillGrouping } = useTechSkillsContext();
  const skills = resumeData.techSkills.flatMap((skill) => skill.values);
  const isSkillGroupingNone = skillGrouping === "none";

  return (
    <Section sectionTitle="Technical Skills" pb={isSkillGroupingNone ? 0 : 1}>
      {isSkillGroupingNone ? (
        <Typography variant="body1" paragraph align="center">
          {skills.join(" | ")}
        </Typography>
      ) : (
        resumeData.techSkills.map((skills) => {
          return (
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ md: 2 }}
              alignItems={isSmallScreen ? "flex-start" : "center"}
              pb={1}
              key={skills.grouping}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
              >{`${skills.label}:`}</Typography>
              <Typography variant="body1">
                {skills.values.join(" | ")}
              </Typography>
            </Stack>
          );
        })
      )}
    </Section>
  );
}
