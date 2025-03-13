import template from './templates/row-full-width.template.html?raw'

export default {
  title: "Components/Links",
  argTypes: {
    variations: {
      control: "object",
      description: "Array of row classes to generate",
    },
    content: { control: "text" }
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

const parseTemplate = (template, vars) => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] || '');
};

const Template = ({ variations, ...args }) => {
  return `<div class="grid-cols">
    ${variations.map(row_class => parseTemplate(template, { row_class, ...args })).join('\n')}
  </div>`;
};

export const Default = Template.bind({});
Default.args = {
  variations: ['', 'bg-black', 'bg-light', 'bg-primary text-white'],
  content: "<p>Lorem ipsum dolor sit amet, <a href=\"#\">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
};

export const CallToActions = Template.bind({});
CallToActions.args = {
    variations: ['', 'bg-black', 'bg-light', 'bg-primary text-white'],
  content: `<p>Lorem ipsum dolor sit amet, <a href=\"#\">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p><a href="#" class="call-to-action">Please do something</a></p>`
};
