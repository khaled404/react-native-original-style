import type { ConfigColors, ConfigSpaces } from '../../config';
import type { ConfigProperties, KeyOf } from '../../helpers';
import type { CommonStyle } from '../common';

export type BackfaceVisibility = {
  'backface-visible': 'backface-visibility-visible';
  'backface-hidden': 'backface-visibility-hidden';
};

export type BackgroundColor = ConfigProperties<'bg-color', KeyOf<ConfigColors>>;

export interface OriginalViewStyle
  extends CommonStyle,
    BackfaceVisibility,
    BackgroundColor,
    ConfigProperties<'opacity', KeyOf<ConfigSpaces>> {}
