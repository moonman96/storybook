import { configure, setAddon } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  require('../src/stories/index.js');

  // You can require as many stories as you need.
}

setDefaults({
  header: false,
  inline: true,
  source: true
});
setAddon(JSXAddon);

configure(loadStories, module);
