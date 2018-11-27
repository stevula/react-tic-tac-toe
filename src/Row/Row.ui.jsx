import React from 'react';
import PropType from 'prop-types';
import styles from './Row.styles';
import Square from '../Square/Square.ui';

function Row({ marks, markSquare, rowNumber }) {
  return (
    <div className={styles}>
      {marks.map((mark, index) => (
        <Square
          key={index}
          colNumber={index}
          mark={mark}
          onClick={colNumber => markSquare(rowNumber, colNumber)}
        />
      ))}
    </div>
  );
}

Row.propTypes = {
  marks: PropType.arrayOf(PropType.string).isRequired,
  markSquare: PropType.func.isRequired,
  rowNumber: PropType.number.isRequired,
};

export default Row;
