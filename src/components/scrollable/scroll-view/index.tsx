import React from 'react';
import {
  ScrollView as ScrollViewBase,
  type ScrollViewProps,
} from 'react-native';
import { scrollableTransformProps } from '../../../utils/scrollable-transform-props';
import type { ScrollableProps } from '../../../types';

const ScrollView = ({
  children,
  ...props
}: ScrollViewProps & ScrollableProps) => {
  return (
    <ScrollViewBase {...scrollableTransformProps(props)}>
      {children}
    </ScrollViewBase>
  );
};

export { ScrollView };
