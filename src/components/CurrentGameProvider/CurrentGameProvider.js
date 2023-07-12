import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import {
  TIME_TO_FINISH_FLIPS,
  NUM_OF_GUESSES_ALLOWED,
  WORD_SIZE,
} from '../../constants';

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

  // TODO: Check that functions are not recreated on each component render
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

  function handleSubmit(event, wordInput) {
    // TODO: Prevent words not in wordlist from being submitted, and give visual feedback

    event.preventDefault();

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

  return (
    <CurrentGameContext.Provider
      value={{
        answer,
        currentGuessIndex,
        gameStatus,
        GameStatuses,
        guessList,
        handleSubmit,
        resetGame,
        setWordInput,
        wordInput,
      }}
    >
      {children}
    </CurrentGameContext.Provider>
  );
}

export default CurrentGameProvider;
