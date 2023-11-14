import type { AnyObject } from '../../types';

export const deepKeyExists = (obj: AnyObject, keyToCheck: string): boolean => {
  return Object.keys(obj).some(
    (key) =>
      key === keyToCheck ||
      (typeof obj[key] === 'object' && deepKeyExists(obj[key], keyToCheck))
  );
};
