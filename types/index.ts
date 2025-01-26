export type Meaning = {
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
  definitions: [{ definition: string; example: string }];
};

export type Result = {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
    },
    {
      text: string;
    }
  ];
  origin: string;
  meanings: Meaning[];
  // phonetics: Phonetics[];
};

// export type Phonetics = [
//   {
//     text: string;
//     audio: string;
//   },
//   {
//     text: string;
//   },
//   { length: number },
//   {
//    ]
