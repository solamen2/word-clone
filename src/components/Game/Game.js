import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_SIZE } from '../../constants';
import { range } from '../../utils';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WordInput from '../WordInput/WordInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map((index) => ({
      word: ' '.repeat(WORD_SIZE),
      id: index,
    }))
  );

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <WordInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
