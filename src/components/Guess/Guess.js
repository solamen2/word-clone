import React from 'react';

import { checkGuess } from '../../game-helpers.js';

function Cell({ letter, status }) {
  const className = letter === ' ' ? 'cell' : `cell ${status}`;

  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {checkGuess(guess.word, answer).map(({ letter, status }, index) => (
        <Cell letter={letter} status={status} key={index} />
      ))}
    </p>
  );
}

export default Guess;
