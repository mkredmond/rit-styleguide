import template from './templates/row-full-width.template.html?raw'

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
      table : {
        disable: true
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

const parseTemplate = (template, vars) => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] || '');
};

const Template = ({ outer_container_classes, listClass, content, ...args }) => {
  const classes = Array.isArray(listClass) ? Array.from(listClass).join(' ') : listClass;
  const dynamicList = `<ul class="${classes}">
    ${content}
  </ul>`;
  return `<div>
    ${outer_container_classes.map(outer_container_classes => 
      parseTemplate(template, { outer_container_classes, content: dynamicList, ...args })
    ).join('\n')}
  </div>`;
};

export const Default = Template.bind({});
Default.args = {
  outer_container_classes: ['', 'bg-black', 'bg-light', 'bg-primary text-white'],
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
  outer_container_classes: ['', 'bg-black', 'bg-light', 'bg-primary text-white'],
  listClass: 'columns-3',
  content: `
          <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-bullhorn fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#advertising-and-brand-management">Advertising and Brand Management</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-trophy-alt fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#athletics-communications">Athletics Communications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-camera-movie fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#video-production">Video Production</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-paragraph fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#writing-and-design">Writing and Design</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-user-headset fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#event-support">Event Support</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-video far text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#event-video-production">Event Video Production</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-comments-alt fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#strategic-communications">Strategic Communications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-brain fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#marketing-intelligence">Marketing Intelligence</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-newspaper fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#news-and-media-relations">News and Media Relations</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-camera fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#photography">Photography</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-book fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#key-university-publications">Key University Publications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-hashtag fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#social-media">Social Media</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-hockey-sticks fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#sportszone">SportsZone</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-laptop-code fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#website-and-application-development">Website and Application Development</a></li>
  `
};
