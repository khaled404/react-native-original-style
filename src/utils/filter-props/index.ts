import { flags } from '../../config';
import type { AnyObject } from '../../types';
import { getStyleKey } from '../get-style-key';

const flagsStylesObj = Object.fromEntries(
  flags.map((flag) => [`${flag}Styles`, {}])
);

export const filterProps = (props: AnyObject) => {
  const initialProps = {
    styles: {},
    ...flagsStylesObj,
    restProps: {
      style: {},
      contentContainerStyle: {},
      ListHeaderComponentStyle: {},
      ListFooterComponentStyle: {},
    },
  };

  return Object.entries(props).reduce((newProps: AnyObject, [key, value]) => {
    const targetProp = getTargetProp(key);

    newProps[targetProp][key] = value;

    return newProps;
  }, initialProps);
};

const getTargetProp = (key: string) => {
  const flag = flags?.find((flag: string) => key?.startsWith(`${flag}-`));

  return flag ? `${flag}Styles` : getStyleKey(key) ? 'styles' : 'restProps';
};
