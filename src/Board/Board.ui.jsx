import React, { Component } from 'react';
import PropType from 'prop-types';
import styles from './Board.styles';
import Row from '../Row/Row.ui';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
    };

    this.updateBoardAt = this.updateBoardAt.bind(this);
  }

  updateBoardAt(mark, { x, y }) {
    console.log({ mark, x, y})
    const { board } = this.state;
    console.log('1')
    const boardCopy = [...board];
    console.log('2')
    const rowCopy = [...board[x]];
    console.log('3')
    rowCopy[y] = mark;
    boardCopy[x] = rowCopy;
    this.setState({ board: boardCopy });
  }

  render() {
    const { board } = this.state;

    return (
      <div className={styles}>
        {board.map((row, index) => (
          <Row
            key={index}
            rowNumber={index}
            marks={row}
            markSquare={(x, y) => this.updateBoardAt('X', { x, y })}
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
