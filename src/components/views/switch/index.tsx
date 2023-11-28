import React from 'react';
import { Switch as SwitchBase, type SwitchProps } from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

const RefreshControl = ({
  children,
  ...restProps
}: ViewCommonProps & SwitchProps) => {
  return <SwitchBase {...transformProps(restProps)}>{children}</SwitchBase>;
};

export { RefreshControl };
