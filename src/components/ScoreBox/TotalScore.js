import React from 'react';
const TotalScore = props => {
  // TODO: 2) Destructure TotalScore props
  const {totalScore} = props

  return (
    <div className="total-score">
      {/* TODO: 2) Render label */}
      <h2>{'TOTAL SCORE'}</h2>
      {/* TODO: 3) Render totalScore */}
      <span>{totalScore}</span>
    </div>
  );
};

export default TotalScore;
