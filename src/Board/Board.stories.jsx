import React from 'react';
import { storiesOf } from '@storybook/react';
import Board from './Board.ui';

storiesOf('Board', module)
  .add('with defaults', () => <Board />)
  .add('with some values', () => (
    <Board
      board={[
        ['X', 'X', 'O'],
        ['', 'X', 'O'],
        ['O', '', ''],
      ]}
    />
  ))
  .add('with 4x4 board', () => (
    <Board
      board={[
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
      ]}
    />
  ));
