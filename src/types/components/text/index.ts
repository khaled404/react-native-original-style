import type {
  ConfigColors,
  ConfigFontSizes,
  ConfigFontFamily,
  ConfigFontWeight,
  ConfigSpaces,
  ConfigBorderRadius,
} from '../../config';
import type { ConfigProperties, KeyOf } from '../../helpers';
import type { CommonStyle } from '../common';

export type Colors = ConfigProperties<'color', KeyOf<ConfigColors>>;

export type Sizes = ConfigProperties<'size', KeyOf<ConfigFontSizes>>;

export type FontFamily = ConfigProperties<'font', KeyOf<ConfigFontFamily>>;
export type FontWeight = ConfigProperties<'weight', KeyOf<ConfigFontWeight>>;

export type TextAlign = {
  'text-center': 'text-align-center';
  'text-auto': 'text-align-auto';
  'text-justify': 'text-align-justify';
  'text-left': 'text-align-left';
  'text-right': 'text-align-right';
  'text-vertical-auto': 'text-align-vertical-auto';
  'text-vertical-top': 'text-align-vertical-top';
  'text-vertical-bottom': 'text-align-vertical-bottom';
  'text-vertical-center': 'text-align-vertical-center';
};
export type TextDecorationLine = {
  'dl-none': 'text-decoration-none';
  'dl-underline': 'text-decoration-underline';
  'dl-line-through': 'text-decoration-line-through';
};

export type TextShadow = {
  'shadow-offset-w': number;
  'shadow-offset-h': number;
  'shadow-color': string;
  'shadow-radius': number;
} & ConfigProperties<'shadow-color', KeyOf<ConfigColors>> &
  ConfigProperties<'shadow-radius', KeyOf<ConfigBorderRadius>> &
  ConfigProperties<'shadow-offset-h', KeyOf<ConfigSpaces>> &
  ConfigProperties<'shadow-offset-w', KeyOf<ConfigSpaces>>;

export type TextTransform = {
  'text-transform-none': 'text-transform-none';
  'uppercase': 'text-transform-uppercase';
  'lowercase': 'text-transform-lowercase';
  'capitalize': 'text-transform-capitalize';
};
export type FontStyles = {
  'style-normal': 'font-style-normal';
  'italic': 'font-style-italic';
};
export type WritingDirection = {
  'd-auto': 'writing-direction-auto';
  'd-ltr': 'writing-direction-ltr';
  'd-rtl': 'writing-direction-rtl';
};
export type TextDecoration = {
  'd-solid': 'text-decoration-solid';
  'd-double': 'text-decoration-double';
  'd-dotted': 'text-decoration-dotted';
  'd-dashed': 'text-decoration-dashed';
  'decoration-color': string;
} & ConfigProperties<'decoration-color', KeyOf<ConfigColors>>;

export type TextStyle = ConfigProperties<'line-h', KeyOf<ConfigSpaces>> &
  ConfigProperties<'letter-spacing', KeyOf<ConfigSpaces>>;

export interface OriginalTextStyle
  extends CommonStyle,
    Colors,
    Sizes,
    FontFamily,
    FontWeight,
    TextAlign,
    Text,
    TextDecorationLine,
    TextShadow,
    TextTransform,
    FontStyles,
    WritingDirection,
    TextDecoration {
  size: number;
  color: string;
  font: string;
  weight: string;
}
