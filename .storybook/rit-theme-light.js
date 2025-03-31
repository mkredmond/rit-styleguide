import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: 'Arial, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'RIT Style Guide',
  brandUrl: 'https://www.rit.edu',
  brandImage: 'https://www.rit.edu/sites/rit.edu/files/images/rit-lockup-stacked-hor.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#F76902',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#F7F7F7',
  appContentBg: '#EFEFEF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#DDDDDD',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#F7F7F7',
  inputBorder: '#7A7A7A',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});