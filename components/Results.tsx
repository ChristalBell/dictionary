import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { Result } from "@/types";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Sound from "./Sound";

interface Props {
  results: Result[];
}
const Results = ({ results }: Props) => {
  const result = results[0];
  console.log(result);
  return (
    <Box>
      <Box
        className="top"
        sx={{
          marginTop: "2.175rem",
          marginBottom: "2rem ",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h1" sx={{ color: COLORS.black }}>
            {result.word}
          </Typography>
          <Typography sx={{ color: COLORS.purple }}>
            {result.phonetics[0].text}
          </Typography>
        </div>
        <Sound result={result} />
      </Box>

      {/* per full definition  */}
      <Box sx={{ color: COLORS.black }} key={result.word}>
        <Typography
          sx={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          {result.meanings[0].partOfSpeech}
        </Typography>

        <Box>
          <Typography sx={{ color: COLORS.darkGrey, fontSize: "1.25rem" }}>
            Meaning{" "}
          </Typography>
          <Box>
            {result.meanings[0].definitions.map((answer) => {
              return (
                <ul key={result.word}>
                  <li>
                    <div key={result.word}>
                      <Typography>{answer.definition}</Typography>
                      <Typography
                        sx={{ color: COLORS.darkGrey, marginLeft: "2rem" }}
                      >
                        {answer.example}
                      </Typography>
                    </div>
                  </li>
                </ul>
              );
            })}
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "2.5rem",
              }}
            >
              <Typography sx={{ color: COLORS.darkGrey }}>Synonym </Typography>
              {result.meanings[0].synonyms.map((synonym) => {
                return (
                  <ul
                    key={result.word}
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    <li
                      style={{
                        color: COLORS.purple,
                        fontWeight: "bold",
                      }}
                    >
                      {synonym}
                    </li>
                  </ul>
                );
              })}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: COLORS.darkGrey }}>Antonym</Typography>
              {result.meanings[0].antonyms.map((antonym) => {
                return (
                  <ul
                    key={result.word}
                    style={{
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    <li
                      style={{
                        color: COLORS.purple,
                        fontWeight: "bold",
                        marginRight: "10px",
                      }}
                    >
                      {antonym}
                    </li>
                  </ul>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Results;
