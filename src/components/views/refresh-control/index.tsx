import React from 'react';
import {
  RefreshControl as RefreshControlBase,
  type RefreshControlProps,
} from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

const RefreshControl = ({
  children,
  ...restProps
}: ViewCommonProps & RefreshControlProps) => {
  return (
    <RefreshControlBase {...transformProps(restProps)}>
      {children}
    </RefreshControlBase>
  );
};

export { RefreshControl };
