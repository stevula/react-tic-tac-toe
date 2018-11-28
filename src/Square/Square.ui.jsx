import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.styles';

function Square({ mark, onClick, colNumber }) {
  return (
    <button
      type="button"
      className={styles}
      onClick={() => !mark && onClick(colNumber)}
    >
      {mark}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  colNumber: PropTypes.number.isRequired,
  mark: PropTypes.string,
};

Square.defaultProps = {
  mark: '',
};

export default Square;
