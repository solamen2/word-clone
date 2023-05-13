import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_SIZE } from '../../constants';
import { range } from '../../utils';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WordInput from '../WordInput/WordInput';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import PreviousKeys from '../PreviousKeys/PreviousKeys';

export const GameStatuses = Object.freeze({
  RUNNING: Symbol('running'),
  WON: Symbol('won'),
  LOST: Symbol('lost'),
});

function Game() {
  function getNewGuessList() {
    return range(NUM_OF_GUESSES_ALLOWED).map((index) => ({
      word: ' '.repeat(WORD_SIZE),
      id: index,
      isWinningGuess: false,
    }));
  }
  const [guessList, setGuessList] = React.useState(getNewGuessList());
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState(GameStatuses.RUNNING);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function resetGame() {
    setGuessList(getNewGuessList());
    setCurrentGuessIndex(0);
    setGameStatus(GameStatuses.RUNNING);
    setAnswer(sample(WORDS));
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
  }

  function handleSubmit(event, wordInput) {
    event.preventDefault();

    const newCurrentGuessIndex = currentGuessIndex + 1;
    let newIsWinningGuess = false;
    if (wordInput === answer) {
      setGameStatus(GameStatuses.WON);
      newIsWinningGuess = true;
    } else if (newCurrentGuessIndex >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GameStatuses.LOST);
    }

    const newGuess = {
      word: wordInput,
      id: currentGuessIndex,
      isWinningGuess: newIsWinningGuess,
    };
    const newGuessList = [...guessList];
    newGuessList[currentGuessIndex] = newGuess;
    setGuessList(newGuessList);
    setCurrentGuessIndex(newCurrentGuessIndex);
  }

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <WordInput gameStatus={gameStatus} handleSubmit={handleSubmit} />
      <GameOverBanner
        gameStatus={gameStatus}
        resetGame={resetGame}
        numOfGuesses={currentGuessIndex}
        answer={answer}
      />
      <PreviousKeys guessList={guessList} answer={answer} />
    </>
  );
}

export default Game;
