import React from 'react';
import { WORD_SIZE } from '../../constants';
import { CurrentGameContext } from '../CurrentGameProvider/CurrentGameProvider';
import { isGuessInAllowableWords } from '../../game-helpers';

export const INPUT_CHECK_PATTERN = '^([A-Z]{' + WORD_SIZE + '})$';

function WordInput() {
  const { gameStatus, GameStatuses, handleSubmit, setWordInput, wordInput } =
    React.useContext(CurrentGameContext);

  return (
    <div className="guess-input-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!isGuessInAllowableWords(wordInput)) {
            window.alert(
              'Invalid input. Please submit a word in the valid word list.'
            );
          } else {
            handleSubmit(wordInput);
            setWordInput('');
          }
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
          pattern={INPUT_CHECK_PATTERN}
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
