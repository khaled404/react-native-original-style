import React from 'react';
import { Pressable as PressableBase, type PressableProps } from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

export const Pressable = ({
  children,
  ...restProps
}: ViewCommonProps & PressableProps) => {
  return (
    <PressableBase {...transformProps(restProps)}>{children}</PressableBase>
  );
};
