import React from 'react';
import {
  View as ViewBase,
  type ViewProps as ViewBaseProps,
} from 'react-native';
import type { MakeBooleanTypes, OriginalViewStyle } from '../../types';
import { transformProps } from '../../utils';

export interface ViewProps
  extends ViewBaseProps,
    MakeBooleanTypes<OriginalViewStyle> {
  children: React.ReactNode;
}

const View = ({ children, ...restProps }: ViewProps) => {
  return <ViewBase {...transformProps(restProps)}>{children}</ViewBase>;
};

export { View };
