import React from 'react';
import {
  Text as TextBase,
  type TextProps as TextBaseProps,
} from 'react-native';
import type { OriginalTextStyle, MakeBooleanTypes } from '../../types';
import { transformProps } from '../../utils';
interface TextProps extends TextBaseProps, MakeBooleanTypes<OriginalTextStyle> {
  children: React.ReactNode;
}

const Text = ({ children, ...restProps }: TextProps) => {
  return <TextBase {...transformProps(restProps)}>{children}</TextBase>;
};

export { Text };
