import React from 'react';

function WordInput() {
  const [wordInput, setWordInput] = React.useState('');

  return (
    <div className="guess-input-wrapper">
      <form
        action="/submit-word"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('guess: ' + wordInput);
          setWordInput('');
        }}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          value={wordInput}
          type="text"
          id="word-input"
          name="wond-input"
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
