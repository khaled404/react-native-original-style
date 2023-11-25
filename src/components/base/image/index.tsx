/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FastImage, {
  type ResizeMode,
  type Source,
} from 'react-native-fast-image';
import { View } from '../view';
import type { ImageRequireSource } from 'react-native';
import type { ViewProps } from '../../../types';

export interface ImageProps extends Omit<ViewProps, 'children'> {
  uri?: Source['uri'];
  source?: ImageRequireSource;
  uriPrams?: Omit<Source, 'uri'>;
  resizeMode?: ResizeMode;
}
const Image = ({
  uri,
  source,
  resizeMode = 'contain',
  uriPrams = {},
  ...props
}: ImageProps) => {
  return (
    <View {...props}>
      <FastImage
        source={uri ? { uri: uri, ...uriPrams } : source}
        resizeMode={resizeMode}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export { Image };
