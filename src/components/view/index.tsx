import React from 'react';
import { View as ViewBase, type ViewProps } from 'react-native';
import type { MakeBooleanTypes, OriginalViewStyle } from '../../types';
import { transformProps } from '../../utils';

interface IViewProps extends ViewProps, MakeBooleanTypes<OriginalViewStyle> {
  children: React.ReactNode;
}

const View = ({ children, ...restProps }: IViewProps) => {
  const { style, ...rest } = transformProps(restProps);

  return (
    <ViewBase style={[style, restProps.style]} {...rest}>
      {children}
    </ViewBase>
  );
};

export { View };
