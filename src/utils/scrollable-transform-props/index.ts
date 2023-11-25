import type { AnyObject } from '../../types';
import { filterProps } from '../filter-props';
import { getStyleProperties } from '../get-property';

import { removeFlags } from '../remove-flags';

export const scrollableTransformProps = <T>(props: T): T => {
  const {
    styles,
    outerStyles,
    footerStyles,
    headerStyles,
    restProps: {
      style,
      contentContainerStyle,
      ListHeaderComponentStyle,
      ListFooterComponentStyle,
      ...rest
    },
  } = filterProps(props as AnyObject);

  const styleObj = getStyleProperties(styles);
  const outerStyleObj = getStyleProperties(removeFlags(outerStyles));
  const headerStyleObj = getStyleProperties(removeFlags(headerStyles));
  const footerStyleObj = getStyleProperties(removeFlags(footerStyles));

  return {
    contentContainerStyle: [styleObj, contentContainerStyle],
    ListHeaderComponentStyle: [headerStyleObj, ListHeaderComponentStyle],
    ListFooterComponentStyle: [footerStyleObj, ListFooterComponentStyle],
    style: [outerStyleObj, style],
    ...rest,
  } as T;
};
