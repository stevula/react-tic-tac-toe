import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from './Row.ui';

storiesOf('Row', module)
  .add('with defaults', () => <Row marks={['', '', '']} />)
  .add('with mixed values', () => <Row marks={['X', '', 'O']} />)
  .add('with 4 columns', () => <Row marks={['', '', '', '']} />);
