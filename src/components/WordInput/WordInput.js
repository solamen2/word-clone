import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_SIZE } from '../../constants';

function WordInput({ guessList, setGuessList }) {
  const [wordInput, setWordInput] = React.useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);
  const inputCheckPattern = '[A-Z]{' + WORD_SIZE + '}';

  return (
    <div className="guess-input-wrapper">
      <form
        action="/submit-word"
        onSubmit={(event) => {
          event.preventDefault();
          if (currentGuessIndex < NUM_OF_GUESSES_ALLOWED) {
            const newGuess = { word: wordInput, id: crypto.randomUUID() };
            const newGuessList = [...guessList];
            newGuessList[currentGuessIndex] = newGuess;
            setGuessList(newGuessList);
            setCurrentGuessIndex(currentGuessIndex + 1);
          } else {
            window.alert('No more guesses allowed!');
          }
          setWordInput('');
        }}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          value={wordInput}
          type="text"
          id="word-input"
          name="word-input"
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
