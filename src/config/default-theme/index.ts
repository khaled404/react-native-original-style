import { fontWeight, from1to100 } from '../values';

export const defaultThemeConfig = {
  colors: {
    default: '#fff0',
    primary: '#000',
    secondary: '#333',
    error: '#bb2124',
    success: '#22bb33',
    info: '#5bc0de',
    gray: '#aaaaaa',
    text: '#000',
  },
  fontFamily: {
    default: '',
    bold: '',
    extraBold: '',
    semiBold: '',
    normal: '',
    light: '',
    extraLight: '',
    medium: '',
    thin: '',
  },
  fontSize: {
    default: 10,
    xs: 9,
    sm: 14,
    md: 20,
    lg: 25,
    xl: 30,
    xxl: 35,
    ...from1to100,
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    ...fontWeight,
  },
  radius: {
    ...from1to100,
  },
  spaces: {
    horizontal: 20,
    vertical: 20,
    ...from1to100,
  },
  combinations: {
    rowCenter: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    center: { alignItems: 'center', justifyContent: 'center' },
  },
};
