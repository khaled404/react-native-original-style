import React from 'react';
import {
  ActivityIndicator as ActivityIndicatorBase,
  type ActivityIndicatorProps,
} from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

const ActivityIndicator = ({
  children,
  ...restProps
}: ViewCommonProps & ActivityIndicatorProps) => {
  return (
    <ActivityIndicatorBase {...transformProps(restProps)}>
      {children}
    </ActivityIndicatorBase>
  );
};

export { ActivityIndicator };
