import React from 'react';

import {
  TIME_TO_FINISH_FLIPS,
  NUM_OF_GUESSES_ALLOWED,
  WORD_SIZE,
} from '../../constants';
import { WORDS } from '../../data';
import { sample, range } from '../../utils';

export const CurrentGameContext = React.createContext();

function CurrentGameProvider({ children }) {
  const GameStatuses = React.useMemo(
    () =>
      Object.freeze({
        RUNNING: Symbol('running'),
        WON: Symbol('won'),
        LOST: Symbol('lost'),
      }),
    []
  );

  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);
  const [guessList, setGuessList] = React.useState(getNewGuessList());
  const [gameStatus, setGameStatus] = React.useState(GameStatuses.RUNNING);
  const [wordInput, setWordInput] = React.useState('');

  function getNewGuessList() {
    return range(NUM_OF_GUESSES_ALLOWED).map((index) => ({
      word: ' '.repeat(WORD_SIZE),
      id: index,
      isWinningGuess: false,
    }));
  }

  function handleSubmit(wordInput) {
    const newCurrentGuessIndex = currentGuessIndex + 1;
    let newIsWinningGuess = false;
    if (wordInput === answer) {
      setTimeout(() => setGameStatus(GameStatuses.WON), TIME_TO_FINISH_FLIPS);
      newIsWinningGuess = true;
    } else if (newCurrentGuessIndex >= NUM_OF_GUESSES_ALLOWED) {
      setTimeout(() => setGameStatus(GameStatuses.LOST), TIME_TO_FINISH_FLIPS);
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

  function resetGame() {
    setGuessList(getNewGuessList());
    setCurrentGuessIndex(0);
    setGameStatus(GameStatuses.RUNNING);
    setAnswer(sample(WORDS));
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
  }

  const value = {
    answer,
    currentGuessIndex,
    gameStatus,
    GameStatuses,
    guessList,
    handleSubmit,
    resetGame,
    setWordInput,
    wordInput,
  };

  return (
    <CurrentGameContext.Provider value={value}>
      {children}
    </CurrentGameContext.Provider>
  );
}

export default CurrentGameProvider;
