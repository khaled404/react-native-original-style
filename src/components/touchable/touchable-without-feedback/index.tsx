import React from 'react';
import { TouchableWithoutFeedback as TouchableWithoutFeedbackBase } from 'react-native';
import type { TouchableProps } from '../../../types';
import { transformProps } from '../../../utils';

export const TouchableWithoutFeedback = ({
  children,
  ...restProps
}: TouchableProps) => {
  return (
    <TouchableWithoutFeedbackBase {...transformProps(restProps)}>
      {children}
    </TouchableWithoutFeedbackBase>
  );
};
