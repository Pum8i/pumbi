import { Experience } from "./Experience";
import Section from "./Section";

interface IData {
  professionalExperience: {
    company: string;
    period: string;
    title: string;
    duties: string[];
  }[];
}

export function ProfessionalExperience({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Professional Experience">
      {resumeData.professionalExperience.map((exp) => {
        return <Experience experience={exp} />;
      })}
    </Section>
  );
}
