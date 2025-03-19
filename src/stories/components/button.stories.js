const variations = [
  "primary",
  "secondary",
  "link",
  "tag-link",
  "tag-nolink",
  "light",
  "white",
  "dark",
  "danger",
  "info",
  "warning",
  "danger",
  "success",
  "outline-primary",
  "outline-secondary",
  "outline-light",
  "outline-success",
  "outline-info",
  "outline-warning",
  "outline-danger",
  "outline-dark",
];

export default {
  title: "Components/Button",
  argTypes: {
    variation: {
      control: "select",
      options: variations,
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "string" }
      }
    },
    size: {
      control: "select",
      default: "md",
      options: ["sm", "md", "lg", "block"],
    }
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  }
};

const Template = ({ text, variation, size }) => {
  return `<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-${variation} btn-${size}" href="#">${text}</a></div>
    <div><button class="btn btn-${variation} btn-${size}">${text}</button></div>
    </div>`;
};

export const Default = Template.bind({});
Default.args = {
  variation: "primary",
  text: "Primary Button",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: "secondary",
  text: "Secondary",
  size: "md",
};

export const Link = Template.bind({});
Link.args = {
  variation: "link",
  text: "Link",
  size: "md",
};

export const TagLink = Template.bind({});
TagLink.args = {
  variation: "tag-link",
  text: "Tag Link",
  size: "md",
};

export const TagNolink = Template.bind({});
TagNolink.args = {
  variation: "tag-nolink",
  text: "Tag No Link",
  size: "md",
};

export const CTAButton = Template.bind({});
CTAButton.args = {
  variation: "primary call-to-action",
  text: "Outline Dark",
  size: "md",
};

export const AllVariations = () => {
  const element = document.createElement('div');
  element.classList.add('grid-cols-sm');
  element.style.padding = '1rem';

  const buttons = variations.map(variation => 
    `<div><a class="btn btn-${variation} btn-md" href="#">${variation}</a></div>`
  ).join('');

  element.innerHTML = buttons;
  return element;
};
AllVariations.parameters = {
  layout: 'fullscreen'
};
