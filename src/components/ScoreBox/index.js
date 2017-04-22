import React from 'react';
import WordScoreList from './WordScoreList';
import './ScoreBox.css';

const ScoreBox = props => {
  // TODO 2): Destructure ScoreBox props
  const {wordScoreList} = props

  return (
    <div className="score-box">
      <WordScoreList
        // TODO 2): Pass all WordScoreList props
        wordScoreList={wordScoreList}
      />
    </div>
  );
};

export default ScoreBox;
