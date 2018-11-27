import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.styles';

function Square({ mark }) {
  return (
    <div className={styles}>
      {mark}
    </div>
  );
}

Square.propTypes = {
  mark: PropTypes.string,
};

Square.defaultProps = {
  mark: '',
};

export default Square;
