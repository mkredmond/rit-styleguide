import '../src/variables.css';
import '../src/storybook.css';
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'light',
          value: '#eee',
        },
        {
          name: 'dark',
          value: '#000',
        },
        {
          name: 'brand',
          value: '#f76902',
        }
      ],
    },
  },
};

export default preview;