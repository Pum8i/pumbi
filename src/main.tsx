import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { defaultTheme } from "src/themes/theme";
import App from "./App.tsx";
import { AccentContextProvider } from "./contexts/AccentContext.tsx";
import { useAccentContext } from "./hooks/ContextHooks.ts";
import { TechSkillsContextProvider } from "./contexts/TechSkillsContext.tsx";

// Inner component - allows us to get the accent color to update the theme colors
export const Theme = () => {
  const { accentColor } = useAccentContext();
  const theme = defaultTheme(accentColor);
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccentContextProvider>
      <TechSkillsContextProvider>
        <Theme />
      </TechSkillsContextProvider>
    </AccentContextProvider>
  </React.StrictMode>
);
