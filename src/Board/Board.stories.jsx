import React from 'react';
import { storiesOf } from '@storybook/react';
import Board from './Board.ui';

storiesOf('Board', module)
  .add('with defaults', () => <Board />);
