import React from 'react';
import {
  SectionList as SectionListBase,
  type SectionListProps,
} from 'react-native';
import { scrollableTransformProps } from '../../../utils/scrollable-transform-props';
import type { ScrollableListProps } from '../../../types';

const SectionList = <T,>(
  props: SectionListProps<T> & Omit<ScrollableListProps, 'children'>
) => {
  return <SectionListBase {...scrollableTransformProps(props)} />;
};

export { SectionList };
