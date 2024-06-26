import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface IData {
  company: string;
  period: string;
  title: string;
  duties: string[];
}

export function Experience({ experience }: { experience: IData }) {
  const { company, period, title, duties } = experience;
  return (
    <>
      <Typography variant="h4" sx={{ backgroundColor: "#efefef" }}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid>{company}</Grid>
          <Grid pr={1}>{period}</Grid>
        </Grid>
      </Typography>
      <Typography variant="h5" align="left">
        {title}
      </Typography>
      <ul>
        {duties.map((duty) => {
          return (
            <li
              key={duty}
              style={{
                textAlign: "justify",
              }}
            >
              {duty}
            </li>
          );
        })}
      </ul>
    </>
  );
}
