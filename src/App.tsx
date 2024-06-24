import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { resumeData } from "src/assets/data";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Header from "./components/Header";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { ProfessionalSkills } from "./components/ProfessionalSkills";
import { Summary } from "./components/Summary";
import { TechnicalSkills } from "./components/TechnicalSkills";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "ghostwhite" }}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Paper sx={{ p: 8 }}>
            <Header resumeData={resumeData} />
            <Summary resumeData={resumeData} />
            <TechnicalSkills resumeData={resumeData} />
            <ProfessionalSkills resumeData={resumeData} />
            <ProfessionalExperience resumeData={resumeData} />
            <Education resumeData={resumeData} />
            <Awards resumeData={resumeData} />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default App;
