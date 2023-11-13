import type {
  ConfigBorderRadius,
  ConfigColors,
  ConfigSpaces,
} from '../../config';
import type { ConfigProperties, KeyOf } from '../../helpers';

export interface Flex extends ConfigProperties<'flex', KeyOf<ConfigSpaces>> {
  'row': 'direction-row';
  'row-reverse': 'direction-row-reverse';
  'column': 'direction-column';
  'column-reverse': 'direction-column-reverse';
  'items-start': 'align-items-start';
  'items-end': 'align-items-end';
  'items-center': 'align-items-center';
  'items-stretch': 'align-items-stretch';
  'items-baseline': 'align-items-baseline';
  'self-auto': 'align-self-auto';
  'self-start': 'align-self-start';
  'self-end': 'align-self-end';
  'self-center': 'align-self-center';
  'self-stretch': 'align-self-stretch';
  'content-start': 'align-content-start';
  'content-end': 'align-content-end';
  'content-center': 'align-content-center';
  'content-between': 'align-content-between';
  'content-around': 'align-content-around';
  'content-evenly': 'align-content-evenly';
  'nowrap': 'nowrap';
  'wrap': 'wrap';
  'wrap-reverse': 'wrap-reverse';
  'flex': number;
}
export interface Margin {
  m: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;
  mh: number;
  mv: number;
}

export interface Padding {
  p: number;
  pl: number;
  pr: number;
  pt: number;
  pb: number;
  ph: number;
  pv: number;
}

export interface Padding {
  p: number;
  pl: number;
  pr: number;
  pt: number;
  pb: number;
  ph: number;
  pv: number;
}

export interface Border
  extends ConfigProperties<'b-color', KeyOf<ConfigColors>>,
    ConfigProperties<'b-radius', KeyOf<ConfigBorderRadius>>,
    ConfigProperties<'b-width', KeyOf<ConfigSpaces>> {
  'b-width': 'border-width' | number;
  'b-color': 'border-color' | string;
  'b-radius': 'border-radius' | number;
}
export type WidthHeight = {
  w: number;
  h: number;
};
export interface CommonStyle
  extends Flex,
    Margin,
    Padding,
    Border,
    ConfigProperties<KeyOf<Margin>, KeyOf<ConfigSpaces>>,
    ConfigProperties<KeyOf<WidthHeight>, KeyOf<ConfigSpaces>>,
    ConfigProperties<KeyOf<Padding>, KeyOf<ConfigSpaces>>,
    ConfigProperties<KeyOf<Padding>, KeyOf<ConfigSpaces>> {}
