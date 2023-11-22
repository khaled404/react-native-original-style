import { deepKeyExists } from '../deep-key-exists';
import { removeLastValueKey } from '../remove-last-value-key';
import * as styles from '../../config/styles';

export const getStyleKey = (key: string) => {
  if (deepKeyExists(styles, key)) return key;
  if (deepKeyExists(styles, removeLastValueKey(key).name))
    return removeLastValueKey(key);
  return false;
};
