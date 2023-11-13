import type { defaultThemeConfig } from '../../config';

export type TConfig = typeof defaultThemeConfig;

export type ConfigColors = {
  [key in keyof TConfig['colors']]: string;
};

export type ConfigFontSizes = {
  [key in keyof TConfig['fontSize']]: string;
};

export type ConfigSpaces = {
  [key in keyof TConfig['spaces']]: string;
};

export type ConfigBorderRadius = {
  [key in keyof TConfig['radius']]: string;
};

export type ConfigFontFamily = {
  [key in keyof TConfig['fontFamily']]: string;
};

export type ConfigFontWeight = {
  [key in keyof TConfig['fontWeight']]: string;
};
export interface OriginalStyleConfig extends Partial<TConfig> {}
