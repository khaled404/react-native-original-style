import type {
  AnyObject,
  MakeBooleanTypes,
  OriginalTextStyle,
  OriginalViewStyle,
} from '../../types';
import { getStyleProperties } from '../get-property';

import { getStyleKey } from '../get-style-key';

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

const filterProps = (props: AnyObject) => {
  let newProps = {
    styles: {},
    restProps: {
      style: {},
    },
  };

  for (const key in props) {
    const element = props[key];
    const targetProp = getStyleKey(key) ? 'styles' : 'restProps';
    newProps = {
      ...newProps,
      [targetProp]: {
        ...newProps[targetProp],
        [key]: element,
      },
    };
  }

  return newProps;
};
