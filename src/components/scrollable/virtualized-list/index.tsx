import React from 'react';
import {
  VirtualizedList as VirtualizedListBase,
  type VirtualizedListProps,
} from 'react-native';
import type { ScrollableListProps } from '../../../types';
import { scrollableTransformProps } from '../../../utils/scrollable-transform-props';

const VirtualizedList = <T,>(
  props: VirtualizedListProps<T> & Omit<ScrollableListProps, 'children'>
) => {
  return <VirtualizedListBase {...scrollableTransformProps(props)} />;
};

export { VirtualizedList };
