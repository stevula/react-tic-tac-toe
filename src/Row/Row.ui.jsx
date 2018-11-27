import React from 'react';
import PropType from 'prop-types';
import styles from './Row.styles';
import Square from '../Square/Square.ui';

function Row({ marks }) {
  return (
    <div className={styles}>
      {marks.map((mark, index) => <Square key={index} mark={mark} />)}
    </div>
  );
}

Row.propTypes = {
  marks: PropType.arrayOf(PropType.string).isRequired,
};

export default Row;
