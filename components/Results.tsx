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
  // const opposite = [
  //   result.meanings[0].antonyms[0],
  //   result.meanings[0].antonyms[1],
  // ];
  // const similar = [
  //   result.meanings[0].synonyms[0],
  //   result.meanings[0].synonyms[1],
  // ];
  // const answer = [
  //   {
  //     defined: result.meanings[0].definitions[0].definition,
  //     sentence: result.meanings[0].definitions[0].example,
  //   },
  //   {
  //     defined: result.meanings[1].definitions[0].definition,
  //     sentence: result.meanings[0].definitions[0].example,
  //   },
  // ];

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
      </Box>

      {/* per full definition  */}
      <Box>
        <Typography sx={{ color: COLORS.black }}>
          {result.meanings[0].partOfSpeech}
        </Typography>
        <Box>
          <Typography>Meaning </Typography>
          <Box>
            {result.meanings[0].definitions.map((answer) => {
              return (
                <ul key={result.word}>
                  <li>
                    <div key={result.word}>
                      <Typography>{answer.definition}</Typography>

                      <Typography>{answer.example}</Typography>
                    </div>
                  </li>
                </ul>
              );
            })}
          </Box>
        </Box>

        <Typography>Synonym </Typography>
        <Typography>Antonym</Typography>
      </Box>
    </Box>

    // <Box>

    //   <Box className="middle" sx={{ color: COLORS.black }}>
    //     <Typography sx={{ color: COLORS.darkGrey }}>Meaning</Typography>
    //     {answer.map((meaning) => {
    //       return (
    //         <ul key={result.word}>
    //           <li>
    //             <Box>
    //               <Typography>{meaning.defined}</Typography>
    //               <Typography
    //                 sx={{ marginLeft: "2rem", color: COLORS.darkGrey }}
    //               >
    //                 {meaning.sentence}
    //               </Typography>
    //             </Box>{" "}
    //           </li>
    //         </ul>
    //       );
    //     })}

    //     <Typography style={{ color: COLORS.darkGrey }}>Synonyms</Typography>
    //     {similar.map((synonym) => {
    //       return (
    //         <Typography key={result.word} sx={{ color: COLORS.purple }}>
    //           {synonym}
    //         </Typography>
    //       );
    //     })}

    //     <Typography sx={{ color: COLORS.darkGrey }}>antonyms</Typography>
    //     {opposite.map((antonym) => {
    //       return (
    //         <Typography key={result.word} sx={{ color: COLORS.purple }}>
    //           {antonym}
    //         </Typography>
    //       );
    //     })}
    //   </Box>

    //   <Box className="footer">
    //     <Typography sx={{ color: COLORS.black }}>
    //       <span style={{ color: COLORS.darkGrey }}>Source</span> and link
    //     </Typography>
    //   </Box>
    // </Box>
  );
};

export default Results;
