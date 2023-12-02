import * as flex from '../../../config/styles/flex';
import * as sizing from '../../../config/styles/sizing';

import type {
  ConfigBorderRadius,
  ConfigColors,
  ConfigSpaces,
  GetStylesType,
} from '../../config';
import type { ConfigProperties, KeyOf } from '../../helpers';

export type Flex = GetStylesType<typeof flex, string, number> &
  GetStylesType<typeof flex, object>;

export type Sizing = GetStylesType<typeof sizing, object, number>;

export interface Border
  extends ConfigProperties<'b-color', KeyOf<ConfigColors>>,
    ConfigProperties<'b-radius', KeyOf<ConfigBorderRadius>>,
    ConfigProperties<'b-width', KeyOf<ConfigSpaces>> {
  'b-width': 'border-width' | number;
  'b-color': 'border-color' | string;
  'b-radius': 'border-radius' | number;
}

export interface CommonStyle
  extends Flex,
    Sizing,
    Border,
    ConfigProperties<KeyOf<Sizing>, KeyOf<ConfigSpaces>> {}
