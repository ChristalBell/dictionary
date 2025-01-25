"use client";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import Search from "@/components/Search";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [result, setResult] = useState({
    word: "",
    phonetic: "",
    phonetics: [{ text: "", audio: "" }],
    origin: "",
    meanings: [
      {
        partOfSpeech: "",
        definitions: [
          {
            definition: "",
            example: "",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
  });

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
      <Results results={result} />
    </Container>
  );
};

export default Home;
