import React from 'react';

const SurveySectionScore = ({score}) => {
  let scoreClass = '';

  if(score === 3) {
    scoreClass = 'red-score'
  } else if (score === 7) {
    scoreClass = 'amber-score'
  } else if (score === 10) {
    scoreClass = 'green-score'
  }

  return (
    <div>
      <p>Available Score: 10</p>
      <p>Current Score: <b className={scoreClass}>{score}</b></p>
    </div>
  );
};

export default SurveySectionScore;