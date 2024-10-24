"use client";
import React from 'react';
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Mengatur tinggi untuk pusat tampilan
        backgroundColor: "#EDEDED",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#629A1A" }}>
        Coming Soon
      </Typography>
    </Box>
  );
};

export default About;
