import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_SIZE } from '../../constants';
import { GameStatuses } from '../Game';

function WordInput({
  guessList,
  setGuessList,
  currentGuessIndex,
  setCurrentGuessIndex,
  answer,
  gameStatus,
  setGameStatus,
}) {
  const [wordInput, setWordInput] = React.useState('');
  const inputCheckPattern = '[A-Z]{' + WORD_SIZE + '}';

  return (
    <div className="guess-input-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (wordInput === answer) {
            setGameStatus(GameStatuses.WON);
          } else if (currentGuessIndex + 1 >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus(GameStatuses.LOST);
          }

          const newGuess = { word: wordInput, id: crypto.randomUUID() };
          const newGuessList = [...guessList];
          newGuessList[currentGuessIndex] = newGuess;
          setGuessList(newGuessList);
          setCurrentGuessIndex(currentGuessIndex + 1);
          setWordInput('');
        }}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          value={wordInput}
          type="text"
          id="word-input"
          name="word-input"
          disabled={gameStatus !== GameStatuses.RUNNING}
          pattern={inputCheckPattern}
          onChange={(event) => {
            setWordInput(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default WordInput;
