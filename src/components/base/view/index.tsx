import React from 'react';
import { View as ViewBase } from 'react-native';
import type { ViewProps } from '../../../types';
import { transformProps } from '../../../utils';

const View = ({ children, ...restProps }: ViewProps) => {
  return <ViewBase {...transformProps(restProps)}>{children}</ViewBase>;
};

export { View };
