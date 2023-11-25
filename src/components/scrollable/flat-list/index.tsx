import React from 'react';
import { FlatList as FlatListBase, type FlatListProps } from 'react-native';
import { scrollableTransformProps } from '../../../utils/scrollable-transform-props';
import type { ScrollableListProps } from '../../../types';

const FlatList = <T,>(
  props: FlatListProps<T> & Omit<ScrollableListProps, 'children'>
) => {
  return <FlatListBase {...scrollableTransformProps(props)} />;
};

export { FlatList };
