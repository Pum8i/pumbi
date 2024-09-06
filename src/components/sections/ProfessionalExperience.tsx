import { Experience } from "./Experience";
import Section from "../widgets/Section";
import { useTechSkillsContext } from "src/hooks/ContextHooks";

interface IData {
  techSkills: {
    grouping: string;
    label: string;
    skills: { name: string; companies: string[] }[];
  }[];
  professionalExperience: {
    id: string;
    company: string;
    period: string;
    title: string;
    duties: string[];
  }[];
}

export function ProfessionalExperience({ resumeData }: { resumeData: IData }) {
  const { showCompanySkills } = useTechSkillsContext();
  // Create a lookup table for skills by company ID
  const skillsByCompany: { [companyId: string]: string[] } = {};
  if (showCompanySkills) {
    resumeData.techSkills.forEach((ts) => {
      ts.skills.forEach((skill) => {
        skill.companies.forEach((companyId) => {
          if (!skillsByCompany[companyId]) {
            skillsByCompany[companyId] = [];
          }
          skillsByCompany[companyId].push(skill.name);
        });
      });
    });
  }

  return (
    <Section sectionTitle="Professional Experience">
      {resumeData.professionalExperience.map((exp) => {
        return (
          <Experience
            experience={exp}
            techSkills={skillsByCompany[exp.id]}
            key={exp.company}
          />
        );
      })}
    </Section>
  );
}
