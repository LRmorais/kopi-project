import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {theme} from '../../utils/style';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing(2),
    borderRadius: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    // fontFamily: theme.typography.fontFamily.bold,
  },
  default: {
    backgroundColor: theme.palette.secondary.main,
  },
  outlined: {
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
  },
  textDefault: {
    color: theme.palette.primary.main,
  },
  textOutlined: {
    color: theme.palette.secondary.main,
  },
  textBlack: {
    color: theme.palette.companies.primary.main,
  },
  disabled: {
    opacity: 0.5,
  },
});

export const RoundedButton = ({styled, disabled, variant, action, title}) => {
  const [buttonStyle, setButtonStyles] = useState({});

  const getButtonStyle = useCallback(() => {
    let buttonStylePreConfig = {};

    if (variant === 'custom') {
      const newStyle = {
        textStyle: {color: styled.color},
        backgroundStyle: {backgroundColor: styled.backgroundColor},
      };
      setButtonStyles(newStyle);
      return;
    }

    if (variant === 'outlined') {
      const newStyle = {
        textStyle: styles.textOutlined,
        backgroundStyle: styles.outlined,
      };
      setButtonStyles(newStyle);
      return;
    }

    setButtonStyles({
      textStyle: styles.textDefault,
      backgroundStyle: styles.default,
    });
    return;
  }, [styled, variant]);

  useEffect(() => {
    getButtonStyle();
  }, [getButtonStyle]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        buttonStyle.backgroundStyle,
        styles.container,
        disabled && styles.disabled,
      ]}
      onPress={action}>
      <Text style={[buttonStyle.textStyle, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
