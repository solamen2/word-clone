import React from 'react';

function WordInput({ guessList, setGuessList }) {
  const [wordInput, setWordInput] = React.useState('');

  return (
    <div className="guess-input-wrapper">
      <form
        action="/submit-word"
        onSubmit={(event) => {
          event.preventDefault();
          const newGuess = { word: wordInput, id: crypto.randomUUID() };
          const newGuessList = [...guessList, newGuess];
          setGuessList(newGuessList);
          setWordInput('');
        }}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          value={wordInput}
          type="text"
          id="word-input"
          name="word-input"
          pattern="[A-Z]{5}"
          onChange={(event) => {
            setWordInput(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default WordInput;
