import React from 'react';
import PropTypes from 'prop-types';

function Square({ mark }) {
  return (
    <div>
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
