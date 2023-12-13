import type { TouchableWithoutFeedbackProps } from 'react-native';
import type { ConfigColors, ConfigOpacity } from '../../config';
import type { ConfigProperties, KeyOf, MakeBooleanTypes } from '../../helpers';
import type { CommonStyle } from '../common';
import type { ViewProps as ViewBaseProps } from 'react-native';
export type BackfaceVisibility = {
  'backface-visible': 'backface-visibility-visible';
  'backface-hidden': 'backface-visibility-hidden';
};

export type BackgroundColor = ConfigProperties<'bg-color', KeyOf<ConfigColors>>;

//ConfigProperties<KeyOf<unclassifiedView>, KeyOf<ConfigSpaces>>

export interface OriginalViewStyle
  extends CommonStyle,
    BackfaceVisibility,
    BackgroundColor,
    ConfigProperties<'opacity', KeyOf<ConfigOpacity>> {
  opacity?: number;
}

export interface ViewCommonProps extends MakeBooleanTypes<OriginalViewStyle> {
  children: React.ReactNode;
}
export type ViewProps = ViewBaseProps & ViewCommonProps;

export type TouchableProps = ViewCommonProps & TouchableWithoutFeedbackProps;

export type ScrollableProps = ViewCommonProps &
  ConfigProperties<'outer', KeyOf<MakeBooleanTypes<OriginalViewStyle>>>;

export type ScrollableListProps = ScrollableProps &
  ConfigProperties<'footer', KeyOf<MakeBooleanTypes<OriginalViewStyle>>> &
  ConfigProperties<'header', KeyOf<MakeBooleanTypes<OriginalViewStyle>>>;
