import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_LEFT, getDefaultStyle } from './util';

const SkipButton = ({ buttonStyles, skipLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginLeft: MARGIN_LEFT }}
    textStyle={{...getDefaultStyle(isLight), ...buttonStyles}}
    {...rest}
  >
    {skipLabel}
  </TextButton>
);

export default SkipButton;
