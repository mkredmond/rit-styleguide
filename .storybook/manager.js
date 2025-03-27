import { addons } from '@storybook/manager-api';
import ritThemeLight from './rit-theme-light';

addons.setConfig({
  theme: ritThemeLight,
});