import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from './Row.ui';

storiesOf('Row', module)
  .add('with defaults', () => <Row />);
