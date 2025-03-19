import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { RefreshIcon } from '@storybook/icons';

// Function to clear CSS Props from localStorage
export function clearCssPropsCache() {
  if (localStorage) {
    const cssPropsKeys = Object.keys(localStorage).filter(key => 
      key.startsWith('addon-cssprops')
    );
    
    cssPropsKeys.forEach(key => {
      localStorage.removeItem(key);
    });
  }
  
  // Force page refresh to reload with cleared cache
  window.location.reload();
}

// Custom panel that renders a refresh button
const RefreshPanel = () => {
  return (
    <div style={{ padding: '8px', textAlign: 'right' }}>
      <IconButton 
        title="Refresh CSS Properties"
        onClick={clearCssPropsCache}
      >
        <RefreshIcon />
        <span style={{ marginLeft: '6px' }}>Refresh CSS Properties</span>
      </IconButton>
    </div>
  );
};

// Register the addon
addons.register('refresh-css-props', () => {
  // Add the panel to the CSS custom properties tab
  addons.add('refresh-css-props/panel', {
    type: types.TOOL,
    title: 'Refresh CSS Props',
    match: ({ viewMode, tabId }) => tabId === 'cssprops',
    render: RefreshPanel,
  });
});
