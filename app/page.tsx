"use client";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import Search from "@/components/Search";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [result, setResult] = useState<any>(null);
  // const [result, setResult] = useState({
  //   word: "",
  //   phonetic: "",
  //   phonetics: [{ text: "", audio: "" }],
  //   origin: "",
  //   meanings: [
  //     {
  //       partOfSpeech: "",
  //       definitions: [
  //         {
  //           definition: "",
  //           example: "",
  //           synonyms: [],
  //           antonyms: [],
  //         },
  //       ],
  //     },
  //   ],
  // });

  // phonetics: [
  //   {
  //     text: "",
  //     audio: "",
  //   },
  //   {
  //     text: "",
  //   },
  //   { length: 0 },
  //   {
  //     Prototype: [
  //       {
  //         at: {},
  //         concat: {},
  //         constructor: {},
  //         copyWithin: {},
  //         entries: {},
  //         every: {},
  //         fill: {},
  //         filter: {},
  //         find: {},
  //         findIndex: {},
  //         findLast: {},
  //         findLastIndex: {},
  //         flat: {},
  //         flatMap: {},
  //         forEach: {},
  //         includes: {},
  //         indexOf: {},
  //         join: {},
  //         keys: {},
  //         lastIndexOf: { lastIndexOf: {}, length: 0 },
  //         map: {},
  //         pop: {},
  //         push: {},
  //         reduce: {},
  //         reduceRight: {},
  //         reverse: {},
  //         shift: {},
  //         slice: {},
  //         some: {},
  //         sort: {},
  //         splice: {},
  //         toLocaleString: {},
  //         toReversed: {},
  //         toSorted: {},
  //         toSpliced: {},
  //         toString: {},
  //         unshift: {},
  //         values: {},
  //         with: {},
  //       },
  //     ],
  //   },
  // ],

  const searchForQuery = (query: string) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`).then(
      (response) => response.json().then((data) => setResult(data))
    );
  };

  console.log(result);
  return (
    <Container maxWidth="md">
      <Nav />
      <Search searchForQuery={searchForQuery} />
      {result === null ? null : <Results results={result} />}
    </Container>
  );
};

export default Home;
