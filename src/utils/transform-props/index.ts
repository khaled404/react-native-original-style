import type {
  AnyObject,
  MakeBooleanTypes,
  OriginalTextStyle,
  OriginalViewStyle,
} from '../../types';
import { filterProps } from '../filter-props';
import { getStyleProperties } from '../get-property';

type TransformProps =
  | MakeBooleanTypes<OriginalViewStyle>
  | MakeBooleanTypes<OriginalTextStyle>;

export const transformProps = (props: TransformProps): AnyObject => {
  const {
    styles,
    restProps: { style, ...rest },
  } = filterProps(props);

  const styleObj = getStyleProperties(styles);

  return { style: [style, styleObj], ...rest };
};
