import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    // "@storybook/addon-interactions", 
    "@storybook/addon-a11y",
    "@ljcl/storybook-addon-cssprops",
    '@storybook/addon-viewport',
    // "storybook-addon-themes",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    // './refreshCssPropsAddon.js',
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