import { Box, Divider, Typography } from "@mui/material";
import React from "react";

interface IData {
  sectionTitle: string;
  children: React.ReactNode;
  pb?: number;
}

export default function Section({ sectionTitle, children, pb }: IData) {
  return (
    <Box pb={pb}>
      <Typography variant="h3" textAlign={"left"}>
        {sectionTitle}
      </Typography>
      <Divider variant="fullWidth" sx={{ mb: 1, bgcolor: "black" }} />
      {children}
    </Box>
  );
}
