import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WordInput from '../WordInput/WordInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <PreviousGuesses guessList={guessList} />
      <WordInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
