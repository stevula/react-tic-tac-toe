import React from 'react';
import PropType from 'prop-types';
import styles from './Board.styles';
import Row from '../Row/Row.ui';

function Board({ board }) {
  return (
    <div className={styles}>
      {board.map((row, index) => <Row key={index} marks={row} />)}
    </div>
  );
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
