import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = props => {
  // TODO 1): Destructure Board props
  const { board, handleClick } = props;
  return (
    <div className="orange-area">
    {/* 2D array for the board, see gameUtils */}
      {board.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map((tile, index) => {
              return (
                <Tile
                  // TODO 1): Pass props to describe state of the tile
                  letter={tile.letter}
                  columnId={tile.columnId}
                  rowId={tile.row}
                  selected={tile.selected}
                  key={index}
                  // TODO 4): Pass callback function props when user clicks on Tile
                  handleClick={()=>handleClick(tile.rowId, tile.columnId)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
