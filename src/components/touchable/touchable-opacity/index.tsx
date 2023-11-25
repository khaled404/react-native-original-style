import React from 'react';
import { TouchableOpacity as TouchableOpacityBase } from 'react-native';
import type { TouchableProps } from '../../../types';
import { transformProps } from '../../../utils';

export const TouchableOpacity = ({
  children,
  ...restProps
}: TouchableProps) => {
  return (
    <TouchableOpacityBase {...transformProps(restProps)}>
      {children}
    </TouchableOpacityBase>
  );
};
