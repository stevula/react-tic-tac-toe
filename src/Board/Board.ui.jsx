import React, { Component } from 'react';
import PropType from 'prop-types';
import styles from './Board.styles';
import Row from '../Row/Row.ui';

// Returns true if every non-falsy element is the same.
const isEveryElementSame = array => array.slice(1).every(element => (
  element && element === array[0]
));

// Reverses an array, returns a new array without mutating the original.
const reverse = array => array.slice().reverse();

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      currentPlayer: 'X',
    };

    this.updateBoardAt = this.updateBoardAt.bind(this);
  }

  // 1. announce winner
  // 2. detect stalemate

  isWinner() {
    const { board } = this.state;

    for (let rowNumber = 0; rowNumber < board.length; rowNumber += 1) {
      const row = board[rowNumber];
      if (isEveryElementSame(row)) return true;
    }

    for (let colNumber = 0; colNumber < board.length; colNumber += 1) {
      const column = board.map((_, index) => board[index][colNumber]);
      if (isEveryElementSame(column)) return true;
    }

    // check if any diagonal streak (top left to bottom right)
    const diagonalA = board.map((_, index) => board[index][index]);
    if (isEveryElementSame(diagonalA)) return true;

    // check if any diagonal streak (bottom left to top right)
    const diagonalB = reverse(board).map((_, index) => reverse(board[index])[index]);
    if (isEveryElementSame(diagonalB)) return true;

    return false;
  }

  nextTurn() {
    const { currentPlayer } = this.state;
    this.setState({ currentPlayer: currentPlayer === 'X' ? 'O' : 'X' });
  }

  updateBoardAt(mark, { x, y }) {
    const { board } = this.state;
    const boardCopy = [...board];
    const rowCopy = [...board[x]];
    rowCopy[y] = mark;
    boardCopy[x] = rowCopy;
    this.setState({
      board: boardCopy,
    }, () => console.log(this.isWinner()));
  }

  render() {
    const { board, currentPlayer } = this.state;
    const message = `${currentPlayer}'s Turn`;

    return (
      <div className={styles}>
        <p>{message}</p>

        {board.map((row, index) => (
          <Row
            key={index}
            rowNumber={index}
            marks={row}
            markSquare={(x, y) => this.updateBoardAt(currentPlayer, { x, y })}
          />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  board: PropType.arrayOf(
    PropType.arrayOf(PropType.string),
  ),
};

Board.defaultProps = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

export default Board;
