export type Meaning = {
  partOfSpeech: string;
  synonyms: [];
  antonyms: [];
  definitions: [
    {
      definition: string;
      example: string;
    }
  ];
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
//     Prototype: [
//       {
//         at: object;
//         concat: object;
//         constructor: object;
//         copyWithin: object;
//         entries: object;
//         every: object;
//         fill: object;
//         filter: object;
//         find: object;
//         findIndex: object;
//         findLast: object;
//         findLastIndex: object;
//         flat: object;
//         flatMap: object;
//         forEach: object;
//         includes: object;
//         indexOf: object;
//         join: object;
//         keys: object;
//         lastIndexOf: { lastIndexOf: object; length: number };
//         map: object;
//         pop: object;
//         push: object;
//         reduce: object;
//         reduceRight: object;
//         reverse: object;
//         shift: object;
//         slice: object;
//         some: object;
//         sort: object;
//         splice: object;
//         toLocaleString: object;
//         toReversed: object;
//         toSorted: object;
//         toSpliced: object;
//         toString: object;
//         unshift: object;
//         values: object;
//         with: object;
//       }
//     ];
//   }
// ];
