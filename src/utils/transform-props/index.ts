import type {
  AnyObject,
  MakeBooleanTypes,
  OriginalTextStyle,
  OriginalViewStyle,
} from '../../types';

import * as styles from '../../config/styles';
// import { configTheme } from '../get-config';
import { removeLastValueKey } from '../remove-last-value-key';
import { deepKeyExists } from '../deep-key-exists';

type TransformProps =
  | MakeBooleanTypes<OriginalViewStyle>
  | MakeBooleanTypes<OriginalTextStyle>;

export const transformProps = (props: TransformProps) => {
  let newProps = filterProps(props);
  console.log(newProps);

  return {
    style: {},
    ...newProps.restProps,
  };
};

const filterProps = (props: AnyObject) => {
  let newProps = { styles: {}, restProps: {} };

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

const getStyleKey = (key: string) => {
  if (deepKeyExists(styles, key)) return key;
  if (deepKeyExists(styles, removeLastValueKey(key).name))
    return removeLastValueKey(key);
  return false;
};
