import { flags } from '../../config';
import type { AnyObject } from '../../types';

export const removeFlags = (stylesObject: AnyObject) => {
  return Object.fromEntries(
    Object.entries(stylesObject).map(([key, value]) => [
      flags.reduce(
        (updatedKey, flag) => updatedKey.replace(new RegExp(`^${flag}-`), ''),
        key
      ),
      value,
    ])
  );
};
