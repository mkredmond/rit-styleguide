import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'RIT Style Guide',
  brandUrl: 'https://www.rit.edu',
  brandImage: 'https://www.rit.edu/sites/rit.edu/files/images/rit-lockup-stacked-hor.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#F76902',
  colorSecondary: '#585C6D',

  // UI
  appBg: 'oklch(0.968 0.007 247.896)',
  appContentBg: 'oklch(0.929 0.013 255.508)',
  appPreviewBg: '#fff',
  appBorderColor: '#ddd',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'oklch(0.968 0.007 247.896)',
  inputBorder: 'oklch(0.554 0.046 257.417)',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});