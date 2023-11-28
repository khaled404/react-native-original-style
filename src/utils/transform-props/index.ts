import type { AnyObject } from '../../types';
import { filterProps } from '../filter-props';
import { getStyleProperties } from '../get-property';

export const transformProps = <T>(props: T): T => {
  const {
    styles,
    restProps: { style, ...rest },
  } = filterProps(props as AnyObject);

  const styleObj = getStyleProperties(styles);

  return { style: [style, styleObj], ...rest } as T;
};
