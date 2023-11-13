import React from 'react';
import { View as ViewBase, type ViewProps } from 'react-native';
import type { MakeBooleanTypes, OriginalViewStyle } from '../../types';

interface IViewProps extends ViewProps, MakeBooleanTypes<OriginalViewStyle> {
  children: React.ReactNode;
}

const View = ({ children, ...restProps }: IViewProps) => {
  console.log(restProps);

  return <ViewBase {...restProps}>{children}</ViewBase>;
};

export { View };
