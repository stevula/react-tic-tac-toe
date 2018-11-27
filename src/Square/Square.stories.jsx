import React from 'react';
import { storiesOf } from '@storybook/react';
import Square from './Square.ui';

storiesOf('Square', module)
  .add('with no mark', () => <Square />)
  .add('with "X"', () => <Square mark="X" />)
  .add('with "O"', () => <Square mark="O" />);
