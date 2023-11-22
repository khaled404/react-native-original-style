import React from 'react';
import { View as ViewBase, type ViewProps } from 'react-native';
import type { MakeBooleanTypes, OriginalViewStyle } from '../../types';
import { transformProps } from '../../utils';

interface IViewProps extends ViewProps, MakeBooleanTypes<OriginalViewStyle> {
  children: React.ReactNode;
}

const View = ({ children, ...restProps }: IViewProps) => {
  return <ViewBase {...transformProps(restProps)}>{children}</ViewBase>;
};

export { View };
