import { defaultThemeConfig } from '../../config';
import { mergeObjects } from '../merge-objects';

export const getConfig = (): typeof defaultThemeConfig => {
  try {
    const themeConfig = require('original.config.js');
    if (themeConfig) return mergeObjects(defaultThemeConfig, themeConfig);
    return defaultThemeConfig;
  } catch (error) {
    return defaultThemeConfig;
  }
};
