import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    headingBlue: Palette["primary"];
  }

  interface PaletteOptions {
    headingBlue?: PaletteOptions["primary"];
  }
}

let theme = createTheme({
  palette: {
    headingBlue: {
      main: "#1f3864",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: theme.palette.headingBlue.main,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      fontStyle: "italic",
      color: theme.palette.headingBlue.main,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: theme.palette.headingBlue.main,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  },
});

export { theme };
