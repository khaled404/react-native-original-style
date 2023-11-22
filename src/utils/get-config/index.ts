import { mergeObjects } from '../merge-objects';

export const getConfig = () => {
  try {
    const defaultThemeConfig = require('../../config').defaultThemeConfig;

    const themeConfig = require('../../../../../original.config.js');

    if (themeConfig) return mergeObjects(defaultThemeConfig, themeConfig);

    return defaultThemeConfig;
  } catch (error) {
    return require('../../config')?.defaultThemeConfig;
  }
};

export const configTheme = getConfig();
