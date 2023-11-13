import type { AnyObject } from '../../types';

const isObject = (item: unknown): boolean => {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
};

export const mergeObjects = <T>(obj1: AnyObject, obj2: AnyObject): T => {
  return Object.fromEntries(
    Object.entries({ ...obj1, ...obj2 }).map(([key, value]) => [
      key,
      isObject(value)
        ? mergeObjects(obj1[key] || {}, obj2[key] || {})
        : Array.isArray(value)
        ? [...(obj1[key] || []), ...(obj2[key] || [])]
        : value,
    ])
  ) as T;
};
