import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Square from './Square.ui';

storiesOf('Square', module)
  .add('with no mark', () => <Square />);
