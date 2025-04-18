import { Row, rowBackgrounds } from '../../templates/Row';
import LinksWithCustomIconsContent from '../html-templates/ListsWithCustomIcons.html?raw';
import ProgramsOfStudyListingContent from '../html-templates/ProgramsOfStudyListing.html?raw';

export default {
  title: "Components/Lists",
  argTypes: {
    outer_container_classes: {
      control: "object",
      description: "Array of row classes to generate",
      table: {
        disable: true
      }
    },
    listClass: {
      control: "multi-select",
      options: [
        "list-style-none",
        "columns-2",
        "columns-3",
        "columns-4",
        "columns-4",
        "links-list-with-arrows",
        "links-list",
        "arrows-left",
      ],
      description: "Class to apply to the <ul> element",
      defaultValue: "list-style-none"
    },
    content: {
      control: "text",
      table: {
        disable: true
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};


const Template = ({ listClass, content, backgrounds = rowBackgrounds }) => {
  const classes = Array.isArray(listClass) ? Array.from(listClass).join(' ') : listClass;
  const dynamicList = `<ul class="${classes}">
    ${content}
  </ul>`;

  return backgrounds.map((bg) =>
    Row({
      background: bg,
      // innerContainerClass: `max-width-800-mx-auto lead-full-width`,
      content: dynamicList,
    })
  ).join("\n");
};

export const Default = Template.bind({});
Default.args = {
  listClass: '',
  content: `
    <li>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
  `
};

export const ListsWithCustomIcons = Template.bind({});
ListsWithCustomIcons.args = {
  listClass: 'columns-3 list-style-none',
  content: LinksWithCustomIconsContent,
};

export const ProgramsOfStudyListing = Template.bind({});
ProgramsOfStudyListing.args = {
  listClass: 'mb-5 links-list list-style-none columns-3',
  content: ProgramsOfStudyListingContent,
  backgrounds: ['white'] // This is only ever used on a white background
};