"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "black",
      light: "white",
      dark: "#a547e8",
      contrastText: "#a547e8",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
    },
  },
});

export default theme;
