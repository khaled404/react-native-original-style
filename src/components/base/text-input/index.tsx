import React from 'react';
import { TextInput as TextInputBase, type TextInputProps } from 'react-native';
import { transformProps } from '../../../utils';
import type { MakeBooleanTypes, OriginalTextStyle } from '../../../types';

const TextInput = ({
  ...restProps
}: MakeBooleanTypes<OriginalTextStyle> & TextInputProps) => {
  return <TextInputBase {...transformProps(restProps)} />;
};

export { TextInput };
