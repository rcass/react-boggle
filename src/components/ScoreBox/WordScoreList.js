import React from 'react';
import TotalScore from './TotalScore';
const WordScoreList = props => {
  // TODO 2): Destructure WordScoreList props
const {wordScoreList} = props
const words = Object.keys(wordScoreList)
const scores = Object.values(wordScoreList)

const wordList = words.map(function(word, index){
  return (<li key={index}>{word}</li>)
})

const scoreList = scores.map(function(score, index){
  return (<li key={index}>{score}</li>)
})

const totalScore = scores.reduce(function(totalScore, currentScore){
  return totalScore + currentScore
}, 0 );

  return (
    <div>
      <div className="word-list">
        <div className="words">
          <h2>WORD</h2>
          {/* TODO: 2) Render wordList array */}
            {wordList}
        </div>
        <div className="scores">
          <h2>SCORE</h2>
          {/* TODO: 2) Render scoreList array */}
            {scoreList}
        </div>
      </div>
      <TotalScore
        // TODO: 3) Pass TotalScore props
        totalScore = {totalScore}
      />
    </div>
  );
};

export default WordScoreList;
