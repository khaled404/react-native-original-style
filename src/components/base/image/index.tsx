/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FastImage, {
  type ImageStyle,
  type ResizeMode,
  type Source,
} from 'react-native-fast-image';
import type { ImageRequireSource, StyleProp } from 'react-native';
import type { ViewProps } from '../../../types';
import { View } from '../../views';

export interface ImageProps extends Partial<ViewProps> {
  uri?: Source['uri'];
  source?: ImageRequireSource;
  uriPrams?: Omit<Source, 'uri'>;
  resizeMode?: ResizeMode;
  innerStyle?: StyleProp<ImageStyle>;
}
const Image = ({
  uri,
  source,
  resizeMode = 'contain',
  uriPrams = {},
  children,
  innerStyle,
  ...props
}: ImageProps) => {
  return (
    <View {...props}>
      <FastImage
        source={uri ? { uri: uri, ...uriPrams } : source}
        resizeMode={resizeMode}
        style={[{ width: '100%', height: '100%' }, innerStyle]}
      />
      {children}
    </View>
  );
};

const ImageBackground = (props: ImageProps) => (
  <Image
    {...props}
    style={{ position: 'relative' }}
    innerStyle={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
  />
);
export { Image, ImageBackground };
