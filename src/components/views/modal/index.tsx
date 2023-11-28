import React from 'react';
import { Modal as ModalBase, type ModalBaseProps } from 'react-native';
import type { ViewCommonProps } from '../../../types';
import { transformProps } from '../../../utils';

const Modal = ({
  children,
  ...restProps
}: ViewCommonProps & ModalBaseProps) => {
  return <ModalBase {...transformProps(restProps)}>{children}</ModalBase>;
};

export { Modal };
