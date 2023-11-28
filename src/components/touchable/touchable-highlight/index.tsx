import React from 'react';
import {
  TouchableHighlight as TouchableHighlightBase,
  type TouchableHighlightProps,
} from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

export const TouchableHighlight = ({
  children,
  ...restProps
}: ViewCommonProps & TouchableHighlightProps) => {
  return (
    <TouchableHighlightBase {...transformProps(restProps)}>
      {children}
    </TouchableHighlightBase>
  );
};
