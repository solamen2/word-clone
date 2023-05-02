import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_SIZE } from '../../constants';
import { range } from '../../utils';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WordInput from '../WordInput/WordInput';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
export const GameStatuses = Object.freeze({
  RUNNING: Symbol('running'),
  WON: Symbol('won'),
  LOST: Symbol('lost'),
});

function Game() {
  const [guessList, setGuessList] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map((index) => ({
      word: ' '.repeat(WORD_SIZE),
      id: index,
    }))
  );
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState(GameStatuses.RUNNING);

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <WordInput
        guessList={guessList}
        setGuessList={setGuessList}
        currentGuessIndex={currentGuessIndex}
        setCurrentGuessIndex={setCurrentGuessIndex}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      <GameOverBanner
        gameStatus={gameStatus}
        numOfGuesses={currentGuessIndex}
        answer={answer}
      />
    </>
  );
}

export default Game;
