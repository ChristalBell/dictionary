"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { COLORS } from "@/styles/colors";
import { useState } from "react";
import { useColorScheme } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const Nav = () => {
  // const [checked, setChecked] = useState(false);
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
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
        {/* <Switch /> Dark Mode */}
        <Box>
          <FormControl>
            <FormLabel id="demo-theme-toggle">Theme</FormLabel>
            <RadioGroup
              aria-labelledby="demo-theme-toggle"
              name="theme-toggle"
              row
              value={mode}
              onChange={(event) =>
                setMode(event.target.value as "light" | "dark")
              }
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
