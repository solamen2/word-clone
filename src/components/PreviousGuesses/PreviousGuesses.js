import React from 'react';

import Guess from '../Guess/Guess';

function PreviousGuesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <Guess guess={guess} answer={answer} key={guess.id} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
