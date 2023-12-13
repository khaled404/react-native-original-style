import * as flex from '../../../config/styles/flex';
import * as sizing from '../../../config/styles/sizing';
import { unclassifiedCommon } from '../../../config/styles/unclassified';

import type {
  ConfigBorderRadius,
  ConfigColors,
  ConfigSpaces,
  GetStylesType,
} from '../../config';
import type { ChangeValue, ConfigProperties, KeyOf } from '../../helpers';

export type Flex = GetStylesType<typeof flex>;

export type Sizing = GetStylesType<typeof sizing, number>;

export type UnclassifiedCommon = ChangeValue<typeof unclassifiedCommon, number>;

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
    UnclassifiedCommon,
    ConfigProperties<KeyOf<Sizing>, KeyOf<ConfigSpaces>> {}
