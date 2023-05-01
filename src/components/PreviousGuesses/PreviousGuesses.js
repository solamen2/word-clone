import React from 'react';

import { checkGuess } from '../../game-helpers.js';

function PreviousGuesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={guess.id}>
          {checkGuess(guess.word, answer).map(({ letter, status }, index) => (
            <span
              className={'cell ' + (letter === ' ' ? '' : status)}
              key={index}
            >
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
