"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Props {
  searchForQuery: (query: string) => void;
}

const Search = ({ searchForQuery }: Props) => {
  const [query, setQuery] = useState("");
  return (
    <Box component="form" sx={{ display: "flex" }}>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          backgroundColor: COLORS.grey,
          width: "100%",
          borderRadius: "1rem",
        }}
      >
        Search
      </TextField>
      <Button
        sx={{ position: "relative", left: -100 }}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          searchForQuery(query);
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
