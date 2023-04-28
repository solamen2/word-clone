import React from 'react';

function PreviousGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.word}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
