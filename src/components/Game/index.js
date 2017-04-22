import React, { Component } from 'react';
import {
  shuffleBoard,
  copyBoard,
  isTileEqual,
  isAdjacent,
  calculateScore
} from '../../util/gameUtil';
import Board from '../Board';
import ScoreBox from '../ScoreBox';
import CurrentWord from '../CurrentWord';
import Button from '../Button';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.initBoard = shuffleBoard();
    // TODO 1): Set data props
    // TODO 4): Change data props to states
    this.state = {
      board: this.initBoard,
      currentWord: '',
      wordScoreList: {}
    };
  }

  // Tile Clicked
  handleClick(rowId, columnId) {
    // TODO 4): Handle tile click to select / unselect tile.
    //alert(rowId + '' + columnId)
    const letter = this.state.board[rowId][columnId].letter
    //alert(letter)

    const newBoard = copyBoard(this.state.board)
    const selected = newBoard[rowId][columnId].selected
    
    newBoard[rowId][columnId].selected = !selected;

    let newWord;
    if(!selected){
      newWord = this.state.currentWord.concat(letter)
    }else {
      newWord = this.state.currentWord.slice(0, -1)
    }
    
    this.setState({currentWord: newWord, board: newBoard})
  }

  // Adds Current Word to the Word List
  handleSubmit(word) {
    // TODO 4): Check if Current Word is valid

  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board
            board={this.state.board}
            // TODO 4): Pass Board onClick callback as props
            handleClick={(rowId, columnId)=>this.handleClick(rowId, columnId)}
          />
          <CurrentWord
            // TODO 1): Pass CurrentWord props
            currentWord={this.state.currentWord}
            label={'current Word'} 
          />
          <Button
            // TODO 1): Pass Button Prop
            label={'submit word'}
            handleSubmit={()=>this.handleSubmit(this.state.currentWord)}

            // TODO 4): Pass Button Callback
    
          />
        </div>

        <ScoreBox
          // TODO 2): Pass ScoreBox Props
          wordScoreList={{'hello': 3, 'react': 3, 'vancouver': 6, 'giraffe': 6}}

          // TODO 3): Calculate Score using reduce
        />
        
        {/* Makes Board and ScoreBox be side by side */}
        <div className="clear" />

      </div>
    );
  }
}
