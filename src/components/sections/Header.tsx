import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CornerIcon from "src/assets/CornerIcon";

interface IData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
}

function Header({ resumeData }: { resumeData: IData }) {
  const { name, title, email, phone, location, linkedIn } = resumeData;
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid>
        <Typography variant="h1" align="left">
          {name}
        </Typography>
        <Typography variant="h2" align="left">
          {title}
        </Typography>
        <Typography variant="body1" align="left">
          <Link href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </Link>
          {" | " + phone + " | " + location}
        </Typography>

        <Typography variant="body1" align="left" gutterBottom>
          <Link href={linkedIn} target="_blank" rel="noreferrer">
            {linkedIn}
          </Link>
        </Typography>
      </Grid>
      <Grid>
        <CornerIcon />
      </Grid>
    </Grid>
  );
}

export default Header;
