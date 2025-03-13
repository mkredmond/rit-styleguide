export default {
  title: "Components/Button",
  argTypes: {
    variation: {
      control: "select",
      options: [
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
      ],
    },
    size: {
      control: "select",
      default: "md",
      options: ["sm", "md", "lg", "block"],
    }
  },
};

const Template = ({ label, variation, size }) => {
  return `<a class="btn btn-${variation} btn-${size}" href="#">${label}</a>`;
};

export const Primary = Template.bind({});
Primary.args = {
  variation: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: "secondary",
  label: "Secondary Button",
};

export const White = Template.bind({});
White.args = {
  text: 'White Button',
  variation: 'white',
  size: 'md',
};

export const Dark = Template.bind({});
Dark.args = {
  text: 'Dark Button',
  variation: 'dark',
  size: 'md'
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger Button',
  variation: 'danger',
  size: 'md'
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  text: 'Outline Primary Button',
  variation: 'outline-primary',
  size: 'md',
  hover: false
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  text: 'Outline White Button',
  variation: 'outline-white',
  size: 'md',
  hover: false
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  text: 'Outline Dark Button',
  variation: 'outline-dark',
  size: 'md',
  hover: false
};

export const OutlineDanger = Template.bind({});
OutlineDanger.args = {
  text: 'Outline Danger Button',
  variation: 'outline-danger',
  size: 'md',
  hover: false
};

export const AllVariations = () => {
  const element = document.createElement('div');
  element.style.display = 'grid';
  element.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
  element.style.gap = '1rem';
  element.style.padding = '1rem';

  const variations = [
    'primary',
    'white',
    'dark',
    'danger',
    'outline-primary',
    'outline-white',
    'outline-dark',
    'outline-danger',
    'not-accessible'
  ];

  const buttons = variations.map(variation => 
    `<div><a class="btn btn-${variation} btn-md" href="#">${variation}</a></div>`
  ).join('');

  element.innerHTML = buttons;
  return element;
};
