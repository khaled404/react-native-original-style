//? typescript Object.valueof
export type ValueOf<T> = T[keyof T];

export type KeyOf<T> = keyof T;

export type AnyObject = Record<string, any>;

export type MakeBooleanTypes<T> = {
  [k in keyof T]?: T[k] | boolean;
};

export type ConfigProperties<Name extends string, T extends string> = {
  [k in `${Name}-${T}`]?: boolean;
};
