import * as sty from '../../config/styles';
import type { AnyObject } from '../../types';
import { deepKeyExists } from '../deep-key-exists';
import { configTheme } from '../get-config';
import { getFirstWordInCamelCase } from '../get-first-word-In-camel-case';
import { getStyleKey } from '../get-style-key';
import { getPropertyValueScaleSize } from '../scale-size';

const styleObj = sty as AnyObject;

export const getStyleProperties = (styles: AnyObject) => {
  let style: AnyObject = {};

  for (const key in styles) {
    const element = styles[key];
    const keyValue = getStyleKey(key);

    if (typeof keyValue === 'object') {
      style = {
        ...getProperty(
          keyValue.name,
          typeof element !== 'boolean' ? element : keyValue.value!
        ),
        ...style,
      };
    } else if (typeof keyValue === 'string') {
      style = {
        ...getProperty(keyValue, element),
        ...style,
      };
    }
  }

  return getPropertyFromConfig(style);
};

const getProperty = (name: string, value: string) => {
  return Object.keys(styleObj)
    .filter(
      (key) =>
        typeof styleObj[key] === 'object' && deepKeyExists(styleObj[key], name)
    )
    .reduce((styles, key) => {
      styles[styleObj[key][name]] = isNaN(+value)
        ? value
        : getPropertyValueScaleSize(styleObj[key][name], +value);
      return styles;
    }, {} as AnyObject);
};

const getPropertyFromConfig = (styles: AnyObject) => {
  const styleEntries = Object.entries(styles);

  return styleEntries.reduce(
    (style, [key, value]) => {
      const configKey = getConfigKey(key) as keyof typeof configTheme;
      const configValue = value as keyof (typeof configTheme)[typeof configKey];

      if (configKey in configTheme && configValue in configTheme[configKey]) {
        style[key] = configTheme[configKey][configValue];
      }

      return style;
    },
    { ...styles }
  );
};

const getConfigKey = (key: string): string => {
  const custom: AnyObject = {
    color: 'colors',
    backgroundColor: 'colors',
    padding: 'spaces',
    margin: 'spaces',
    borderRadius: 'radius',
    width: 'spaces',
    height: 'spaces',
  };

  const customKey = key in custom ? key : getFirstWordInCamelCase(key);

  return custom?.[customKey] || key;
};
