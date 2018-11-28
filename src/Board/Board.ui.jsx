import React, { Component } from 'react';
import PropType from 'prop-types';
import styles from './Board.styles';
import Row from '../Row/Row.ui';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      currentPlayer: 'X',
    };

    this.updateBoardAt = this.updateBoardAt.bind(this);
  }

  updateBoardAt(mark, { x, y }) {
    const { board, currentPlayer } = this.state;
    const boardCopy = [...board];
    const rowCopy = [...board[x]];
    rowCopy[y] = mark;
    boardCopy[x] = rowCopy;
    this.setState({
      board: boardCopy,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
    });
  }

  render() {
    const { board, currentPlayer } = this.state;

    return (
      <div className={styles}>
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
