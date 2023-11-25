import React from 'react';
import {
  Text as TextBase,
  type TextProps as TextBaseProps,
} from 'react-native';
import { transformProps } from '../../../utils';
import type { MakeBooleanTypes, OriginalTextStyle } from '../../../types';
interface TextProps extends TextBaseProps, MakeBooleanTypes<OriginalTextStyle> {
  children: React.ReactNode;
}

const Text = ({ children, ...restProps }: TextProps) => {
  return <TextBase {...transformProps(restProps)}>{children}</TextBase>;
};

export { Text };
