import React from 'react';
import { WORD_SIZE } from '../../constants';
import { GameStatuses } from '../Game';

function WordInput({ gameStatus, handleSubmit }) {
  const [wordInput, setWordInput] = React.useState('');
  const inputCheckPattern = '[A-Z]{' + WORD_SIZE + '}';

  return (
    <div className="guess-input-wrapper">
      <form
        onSubmit={(event) => {
          handleSubmit(event, wordInput);
          setWordInput('');
        }}
      >
        <label htmlFor="word-input">Enter guess:</label>
        <input
          value={wordInput}
          type="text"
          id="word-input"
          className="word-input"
          name="word-input"
          disabled={gameStatus !== GameStatuses.RUNNING}
          pattern={inputCheckPattern}
          title={WORD_SIZE + ' letter word'}
          onChange={(event) => {
            setWordInput(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default WordInput;
