import { COLORS } from "@/styles/colors";
import { Result } from "@/types";
import React from "react";
import Link from "@mui/material/Link";

const Sound = (result: any) => {
  console.log(result);
  return (
    <Link
      href={result.result.phonetics[0].audio}
      target="_blank"
      underline="none"
      sx={{
        backgroundColor: COLORS.lavender,
        color: COLORS.purple,
        borderRadius: "50%",
        height: "4rem",
        width: "4rem",
        border: `2px solid ${COLORS.purple}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
          backgroundColor: COLORS.purple,
          color: COLORS.lavender,
          border: `2px solid ${COLORS.white}`,
        },
      }}
    >
      Play
    </Link>
  );
};

export default Sound;
