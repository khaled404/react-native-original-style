# react-native-original-style 🎉

Introducing 'Original Style,' a powerful React Native UI library designed to bring simplicity and flexibility to your mobile app development. Inspired by the elegance of Tailwind CSS, 'Original Style' offers a unique approach to styling React Native components, providing a seamless and efficient way to build beautiful user interfaces

<p align="left">
  <a href="https://npmjs.com/package/react-native-original-style">
    <img src="https://img.shields.io/npm/v/react-native-original-style.svg" alt="react-native-original-style on npm" />
    <a href="https://npmjs.com/package/react-native-original-style"><img src="https://img.shields.io/npm/dm/react-native-original-style.svg"/></a>
    <a href="https://npmjs.com/package/react-native-original-style"><img src="https://img.shields.io/npm/l/react-native-original-style.svg?color=blue"/></a>
  </a>
</p>

## Installation

**Note: You must be using React Native 0.60.0 or higher.**

```sh
npm install react-native-original-style react-native-fast-image
```

```sh
cd ios && pod install && cd ..
```

## Configuration

Create a configuration file named original.config.js in the root of your React Native app. Here's an example of the configuration:

```js
module.exports = {
  guideline: {
    //default
    width: 350,
    height: 680,
  },
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
    default: 'roboto',
    bold: '',
    extraBold: '',
    semiBold: '',
    normal: '',
    light: '',
    extraLight: '',
    medium: '',
    thin: '',
    //..etc
  },
  fontSize: {
    default: 10,
    xs: 9,
    sm: 14,
    md: 20,
    lg: 25,
    xl: 30,
    xxl: 35,
    //..etc
  },
  spaces: {
    horizontal: 20,
    vertical: 20,
    divide: 10,
    stander: 5,
    //..etc
  },
  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    //..etc
  },
  radius: {
    horizontal: 20,
    vertical: 20,
    //..etc
  },

  combinations: {
    rowCenter: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    center: { alignItems: 'center', justifyContent: 'center' },
    //..etc
  },
};
```

## Usage

```js
import { View, Text } from 'react-native-original-style';

// ...

<View center mt-10 pv-20 ph-10 w-full h-full bg-secondary>
  <Text color-primary size-xl>
    Test
  </Text>
</View>;
```

The library extends the styling capabilities by providing utility classes like center, mt-10, pv-20, etc. These classes are based on the configuration in the original.config.js file.

## Configuration Customization

Feel free to customize the original.config.js file according to your project's needs. Adjust colors, fonts, sizes, and other styling parameters to match your design system.

## Note

Make sure the original.config.js file is in the root of your React Native project for the library to pick it up automatically.

Now you're all set to enjoy simplified and enhanced styling in your React Native app with React Native Original Style!

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
