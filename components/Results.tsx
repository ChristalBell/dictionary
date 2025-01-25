import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { Result } from "@/types";

interface Props {
  results: Result[];
}

const Results = ({ results }: Props) => {
  return (
    <Box>
      <Typography>Results</Typography>
    </Box>
  );
};

export default Results;
