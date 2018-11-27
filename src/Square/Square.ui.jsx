import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.styles';

function Square({ mark, onClick }) {
  return (
    <button type="button" className={styles} onClick={onClick}>
      {mark}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  mark: PropTypes.string,
};

Square.defaultProps = {
  mark: '',
};

export default Square;
