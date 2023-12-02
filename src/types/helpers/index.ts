export type ValueOf<T> = T[keyof T];

export type KeyOf<T> = keyof T;

export type AnyObject = Record<string, any>;

export type MakeBooleanTypes<T> = {
  [k in keyof T]?: T[k] | boolean;
};

export type UnionToObj<U extends string, Value = undefined> = {
  [K in U]: Value | K;
};

export type FilterObjectByValueType<T, ValueType> = {
  [K in keyof T]: T[K] extends ValueType ? T[K] : never;
};

export type ConfigProperties<Name extends string, T extends string> = {
  [k in `${Name}-${T}`]?: boolean;
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type UnionObjectsToObj<U> = UnionToIntersection<
  U extends any ? U : never
>;

export type ChangeValue<T, Value = undefined> = {
  [k in keyof T]?: Value | T[k];
};
