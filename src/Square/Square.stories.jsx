import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Square from './Square.ui';

const props = {
  onClick: () => action('click-square'),
};

storiesOf('Square', module)
  .add('with default', () => <Square {...props} />)
  .add('with "X"', () => <Square {...props} mark="X" />)
  .add('with "O"', () => <Square {...props} mark="O" />);
