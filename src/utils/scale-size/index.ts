import { Dimensions } from 'react-native';
import { configTheme } from '../get-config';

const heightKeywords = ['vertical', 'height', 'top', 'bottom'];
const widthKeywords = [
  'width',
  'horizontal',
  'left',
  'right',
  'start',
  'end',
  'size',
];

const { width, height } = Dimensions.get('window');

const [short, long] = width < height ? [width, height] : [height, width];

export const scaleSize = (size: number) =>
  (short / configTheme.guideline.width) * size;
export const verticalScaleSize = (size: number) =>
  (long / configTheme.guideline.height) * size;

export const getPropertyValueScaleSize = (
  propName: string,
  value: number
): number => {
  return heightKeywords.some((name) => propName.toLowerCase().includes(name))
    ? verticalScaleSize(value)
    : widthKeywords.some((name) => propName.toLowerCase().includes(name))
    ? scaleSize(value)
    : value;
};
