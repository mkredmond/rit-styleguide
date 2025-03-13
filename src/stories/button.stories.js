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
  return `<div style="display: flex; gap: 1rem">
    <a class="btn btn-${variation} btn-${size}" href="#">${text}</a>
    <button class="btn btn-${variation} btn-${size}">${text}</button>
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

export const Light = Template.bind({});
Light.args = {
  variation: "light",
  text: "Light",
  size: "md",
};

export const White = Template.bind({});
White.args = {
  variation: "white",
  text: "White",
  size: "md",
};

export const Dark = Template.bind({});
Dark.args = {
  variation: "dark",
  text: "Dark",
  size: "md",
};

export const Danger = Template.bind({});
Danger.args = {
  variation: "danger",
  text: "Danger",
  size: "md",
};

export const Info = Template.bind({});
Info.args = {
  variation: "info",
  text: "Info",
  size: "md",
};

export const Warning = Template.bind({});
Warning.args = {
  variation: "warning",
  text: "Warning",
  size: "md",
};

export const Success = Template.bind({});
Success.args = {
  variation: "success",
  text: "Success",
  size: "md",
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variation: "outline-primary",
  text: "Outline Primary",
  size: "md",
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  variation: "outline-secondary",
  text: "Outline Secondary",
  size: "md",
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  variation: "outline-light",
  text: "Outline Light",
  size: "md",
};

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  variation: "outline-success",
  text: "Outline Success",
  size: "md",
};

export const OutlineInfo = Template.bind({});
OutlineInfo.args = {
  variation: "outline-info",
  text: "Outline Info",
  size: "md",
};

export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
  variation: "outline-warning",
  text: "Outline Warning",
  size: "md",
};

export const OutlineDanger = Template.bind({});
OutlineDanger.args = {
  variation: "outline-danger",
  text: "Outline Danger",
  size: "md",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  variation: "outline-dark",
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
