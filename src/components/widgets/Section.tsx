import { Box, Divider, Typography } from "@mui/material";
import React from "react";

interface IData {
  sectionTitle: string;
  children: React.ReactNode;
  pt?: number;
}

export default function Section({ sectionTitle, children, pt }: IData) {
  return (
    <Box pt={pt}>
      <Typography variant="h3" textAlign={"left"}>
        {sectionTitle}
      </Typography>
      <Divider variant="fullWidth" sx={{ mb: 1, bgcolor: "black" }} />
      {children}
    </Box>
  );
}
