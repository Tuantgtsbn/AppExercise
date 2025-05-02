import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { typography } from '@/theme/typography';

interface TextProps extends RNTextProps {
  variant?: 'regular' | 'medium' | 'semiBold' | 'bold';
}

export const Text = ({ style, variant = 'regular', ...props }: TextProps) => {
  const fontStyle = {
    regular: typography.defaultText,
    medium: typography.medium,
    semiBold: typography.semiBold,
    bold: typography.bold
  }[variant];

  return <RNText style={[fontStyle, style]} {...props} />;
};
