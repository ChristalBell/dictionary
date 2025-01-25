import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "800", textTransform: "capitalize" }}>
        dictionary
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Font Switcher v </Typography> <Switch /> Dark Mode
      </Box>
    </Box>
  );
};

export default Nav;
