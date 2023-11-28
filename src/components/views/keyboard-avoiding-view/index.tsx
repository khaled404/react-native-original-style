import React from 'react';
import {
  KeyboardAvoidingView as KeyboardAvoidingViewBase,
  type KeyboardAvoidingViewProps,
} from 'react-native';
import { transformProps } from '../../../utils';
import type { ViewCommonProps } from '../../../types';

const KeyboardAvoidingView = ({
  children,
  ...restProps
}: ViewCommonProps & KeyboardAvoidingViewProps) => {
  return (
    <KeyboardAvoidingViewBase {...transformProps(restProps)}>
      {children}
    </KeyboardAvoidingViewBase>
  );
};
export { KeyboardAvoidingView };
