import React from 'react';
import { Text as TextBase, type TextProps } from 'react-native';
import type { OriginalTextStyle, MakeBooleanTypes } from '../../types';
import { transformProps } from '../../utils';
interface ITextProps extends TextProps, MakeBooleanTypes<OriginalTextStyle> {
  children: React.ReactNode;
}

const Text = ({ children, ...restProps }: ITextProps) => {
  const { style, ...rest } = transformProps(restProps);

  return (
    <TextBase style={[style, restProps.style]} {...rest}>
      {children}
    </TextBase>
  );
};

export { Text };
