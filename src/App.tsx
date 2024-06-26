import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { resumeData } from "src/assets/data";
import Awards from "./components/sections/Awards";
import Education from "./components/sections/Education";
import Header from "./components/sections/Header";
import Links from "./components/sections/Links";
import { ProfessionalExperience } from "./components/sections/ProfessionalExperience";
import { ProfessionalSkills } from "./components/sections/ProfessionalSkills";
import { Summary } from "./components/sections/Summary";
import { TechnicalSkills } from "./components/sections/TechnicalSkills";
import SideOptions from "./components/widgets/SideOptions";
import { useDeviceSize } from "./hooks/DeviceSizeHooks";

function App() {
  const { isSmallScreen } = useDeviceSize();
  return (
    <>
      <CssBaseline />
      <SideOptions resumeData={resumeData} />
      <Box sx={{ backgroundColor: "ghostwhite" }}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Paper sx={{ p: isSmallScreen ? 4 : 8 }}>
            <Header resumeData={resumeData} />
            <Summary resumeData={resumeData} />
            <TechnicalSkills resumeData={resumeData} />
            <ProfessionalSkills resumeData={resumeData} />
            <ProfessionalExperience resumeData={resumeData} />
            <Education resumeData={resumeData} />
            <Awards resumeData={resumeData} />
            <Links resumeData={resumeData} />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default App;
