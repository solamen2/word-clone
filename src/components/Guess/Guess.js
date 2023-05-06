import React from 'react';

import { checkGuess } from '../../game-helpers.js';

function Cell({ letter, status, index }) {
  const className = letter === ' ' ? 'cell' : `cell used ${status}`;

  return (
    <span className={className} style={{ '--index': index }}>
      {letter}
    </span>
  );
}

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {checkGuess(guess.word, answer).map(({ letter, status }, index) => (
        <Cell letter={letter} status={status} key={index} index={index} />
      ))}
    </p>
  );
}

export default Guess;
