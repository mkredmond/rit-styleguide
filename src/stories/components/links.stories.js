// import template from '../templates/row-full-width.template.html?raw'
import { renderRow, rowParagraphObject, rowBackgrounds, rowContent } from '../../templates/Row';

export default {
  title: "Components/Links",
  argTypes: {
    outer_container_classes: {
      control: "object",
      description: "Array of row classes to generate",
      table: {
        disable: true,
      },
    },
    content: { control: "text" },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({content,  ...args }) => {

  return rowBackgrounds
    .map((bg_color) => 
      renderRow({
        ...rowParagraphObject,
        field_background_color: { value: bg_color },
      }, 
      {
        ...rowContent, 
        field_content: content ,
      })
    )
    .join("\n");
};

export const Default = Template.bind({});
Default.args = {
  outer_container_classes: [
    "",
    "bg-black",
    "bg-light",
    "bg-primary text-white",
  ],
  content:
    '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
};
Default.storyName = "Inline Links";

export const CallToActions = Template.bind({});
CallToActions.args = {
  outer_container_classes: [
    "",
    "bg-black",
    "bg-light",
    "bg-primary text-white",
  ],
  content: `<p>Lorem ipsum dolor sit amet, <a href=\"#\">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p><a href="#" class="call-to-action">Please do something</a></p>`,
};

export const IconLinks = Template.bind({});
IconLinks.args = {
  outer_container_classes: [
    "",
    "bg-black",
    "bg-light",
    "bg-primary text-white",
  ],
  content: `
    <ul class="list-style-none">
        <li class="position-relative align-items-baseline d-flex icon-link-wrapper">
          <span class="fa-video far text-align-center pl-0" aria-hidden="true"></span>
          <a href="#">Event Video Production</a>
        </li>
        <li class="position-relative align-items-baseline d-flex icon-link-wrapper">
          <span class="fa-laptop-code far text-align-center pl-0" aria-hidden="true"></span>
          <a href="#">Website and Application Development</a>
        </li>
        <li class="position-relative align-items-baseline d-flex icon-link-wrapper">
          <span class="fa-paragraph far text-align-center pl-0" aria-hidden="true"></span>
          <a href="#">Writing and Design</a>
        </li>
    </ul>
  `,
};
