"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { COLORS } from "@/styles/colors";

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "2.5rem 0",
      }}
    >
      <Typography sx={{ fontWeight: "800", textTransform: "capitalize" }}>
        dictionary
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>
          Font Switcher <span style={{ color: COLORS.purple }}>v</span>{" "}
        </Typography>{" "}
        <Switch /> Dark Mode
      </Box>
    </Box>
  );
};

export default Nav;
