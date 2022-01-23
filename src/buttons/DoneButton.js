import { Animated } from 'react-native';
import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';

class DoneButton extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 250);
  }

  render() {
    const { buttonStyles, doneLabel, isLight, ...rest } = this.props;
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <TextButton
          size={BUTTON_SIZE}
          style={{ marginRight: MARGIN_RIGHT }}
          textStyle={{...getDefaultStyle(isLight), ...buttonStyles}}
          {...rest}
        >
          {doneLabel}
        </TextButton>
      </Animated.View>
    );
  }
}

export default DoneButton;
