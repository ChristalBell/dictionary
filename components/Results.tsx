import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { Result } from "@/types";
import { COLORS } from "@/styles/colors";

interface Props {
  results: Result[];
}

const Results = ({ results }: Props) => {
  const result = results[0];
  console.log(result);

  return (
    <Box>
      <Box className="top">
        <Typography variant="h1" sx={{ color: COLORS.black }}>
          {result.word}
        </Typography>
        <Typography sx={{ color: COLORS.purple }}>
          {result.phonetics[0].text}
        </Typography>
        <Typography sx={{ color: COLORS.lavender }}>
          {result.phonetics[0].audio}
        </Typography>
        <Typography sx={{ color: COLORS.black }}>
          {result.meanings[0].partOfSpeech}{" "}
        </Typography>
      </Box>

      <Box className="middle" sx={{ color: COLORS.black }}>
        <Typography sx={{ color: COLORS.darkGrey }}>Meaning</Typography>

        <ul>
          <li> {result.meanings[0].definitions[0].definition} </li>
          <li> {result.meanings[1].definitions[0].definition} </li>
        </ul>
        <Typography sx={{ color: COLORS.purple }}>
          <span style={{ color: COLORS.darkGrey }}>Synonyms</span>{" "}
          {result.meanings[0].synonyms[0]}
        </Typography>
        <Typography sx={{ color: COLORS.purple }}>
          <span style={{ color: COLORS.darkGrey }}>Antonyms</span> and info{" "}
        </Typography>
      </Box>

      <Box className="footer">
        <Typography sx={{ color: COLORS.black }}>
          <span style={{ color: COLORS.darkGrey }}>Source</span> and link
        </Typography>
      </Box>
    </Box>
  );
};

export default Results;
