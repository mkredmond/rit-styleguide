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

// CSS Props refresh decorator
const cssPropsRefreshDecorator = (Story, context) => {
  // Clear storage cache related to cssprops if it exists
  if (localStorage) {
    const cssPropsKeys = Object.keys(localStorage).filter(key => 
      key.startsWith('addon-cssprops')
    );
    
    cssPropsKeys.forEach(key => {
      localStorage.removeItem(key);
    });
  }
  
  return Story();
};

// JS reload decorator
const jsReloadDecorator = (Story, context) => {
  // Force JavaScript reload by re-importing the script
  const ritScript = document.querySelector('script[src*="rit.js"]');
  console.log(ritScript);
  
  if (ritScript) {
    // Remove the existing script
    ritScript.remove();
    
    // Create and append a new script with the same src
    const newScript = document.createElement('script');
    newScript.src = 'https://www-staging.rit.edu/marketing/utilities/assets/static/storybook/rit.js';
    document.head.appendChild(newScript);
  }
  
  return Story();
};

export const decorators = [
  cssPropsRefreshDecorator,
  // jsReloadDecorator
];

export default preview;

