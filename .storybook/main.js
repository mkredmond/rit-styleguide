

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions", 
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "core": {
    "builder": "@storybook/builder-vite"
  }
};
export default config;