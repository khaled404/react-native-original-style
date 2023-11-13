import React from 'react';
import { Text as TextBase, type TextProps } from 'react-native';
import type { OriginalTextStyle, MakeBooleanTypes } from '../../types';
interface ITextProps extends TextProps, MakeBooleanTypes<OriginalTextStyle> {
  children: React.ReactNode;
}

const Text = ({ children, ...restProps }: ITextProps) => {
  console.log(restProps);

  return <TextBase {...restProps}>{children}</TextBase>;
};

export { Text };
