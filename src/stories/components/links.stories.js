// import template from '../templates/row-full-width.template.html?raw'
import MultipleIconsContent from '../html-templates/links-multiple-icons.html?raw';
import { Row, rowBackgrounds } from '../../templates/Row';

export default {
  title: "Components/Links",
  argTypes: {
    content: { control: "text" },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({content, title, ...args }) => {

    return rowBackgrounds.map((bg_color) =>
        Row({
          title,
          background: bg_color,
          innerContainerClass: `max-width-800-mx-auto lead-full-width`,
          content,
        })
      ).join("\n");
};

export const Default = Template.bind({});
Default.args = {
  title: "Inline Links",
  content:
    '<p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
};
Default.storyName = "Inline Links";

export const CallToActions = Template.bind({});
CallToActions.args = {
  title: "Call to Actions",
  content: `<div>
  <p>Lorem ipsum dolor sit amet, <a href=\"#\">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p><a href="#" class="call-to-action">Please do something</a></p>
  </div>`,
};

export const IconLinks = Template.bind({});
IconLinks.args = {
  title: "Icon Links",
  content: `
    <div class="col-md-6">
      <h6>Font Awesome classes only</h6>
      <ul class="list-style-none">
          <li>
            <a class="far fa-video" href="#">Event Video Production</a>
          </li>
          <li>
            <a class="fa-laptop-code far" href="#">Website and Application Development</a>
          </li>
          <li>
            <a class="fa-paragraph far" href="#">Writing and Design</a>
          </li>
      </ul>
    </div>
    <div class="col-md-6">
      <h6>With <code>.see-more</code> class</h6>
      <ul class="list-style-none">
          <li>
            <a class="far fa-video see-more" href="#">Event Video Production</a>
          </li>
          <li>
            <a class="fa-laptop-code far see-more" href="#">Website and Application Development</a>
          </li>
          <li>
            <a class="fa-paragraph far see-more" href="#">Writing and Design</a>
          </li>
      </ul>
    </div>
  `,
};


export const InlineNavList = Template.bind({});
InlineNavList.args = {
  title: "Inline Nav List",
  content: `
    <ul class="columns-2 mx-auto max-width-800-mx-auto list-style-none pr-0"><li class="position-relative"><a class="far fa-check-circle see-more icon-block" href="#key-facts" aria-hidden="true">Key Facts</a></li><li class="position-relative"><a class="far fa-globe see-more icon-block" href="#rits-international-campuses" aria-hidden="true">RIT’s International Campuses</a></li><li class="position-relative"><a class="far fa-street-view see-more icon-block" href="#international-experiences" aria-hidden="true">International Experiences for Students</a></li><li class="position-relative"><a class="far fa-hands-helping see-more icon-block" href="#global-reach" aria-hidden="true">Global Reach</a></li><li class="position-relative"><a class="far fa-globe-americas see-more icon-block" href="#global-impact" aria-hidden="true">RIT’s Global Impact …  From Across Town to Across Borders </a></li><li class="position-relative"><a class="far fa-newspaper see-more icon-block" href="#rit-global-engagement-news" aria-hidden="true">RIT Global Engagement News</a></li><li class="position-relative"><a class="far fa-calendar-alt see-more icon-block" href="#featured-events" aria-hidden="true">Featured Events</a></li><li class="position-relative"><a class="far fa-link see-more icon-block" href="#stay-connected" aria-hidden="true">Stay Connected</a></li></ul>
  `
};


export const SeeMoreLinks = Template.bind({});
SeeMoreLinks.args = {
  title: "See More Links",
  content: `
  <div class="more-link see-more-link font-weight-bold mt-4 mt-md-0 text-left">
    <a class="far fa-arrow-right icon-after" href="https://www-staging.rit.edu/program-directory/7035248" aria-hidden="true">All Program Faculty</a>
  </div>
  `
};

export const LinksWithCustomIcons = Template.bind({});
LinksWithCustomIcons.args = {
  title: "Links with Custom Icons",
  content: `
    <div class="col-md-6">
      <h6>Default</h6>
      <p><a class="far fa-handshake icon-before" href="#" aria-hidden="true">New Project Request</a>
      <br>
      <a class="far fa-envelope icon-before" href="#" aria-hidden="true">Email@emailProvider.com</a>
      <br>
      <a class="far fa-cogs icon-before" href="#" aria-hidden="true">Settings</a>
      <br>
      <a class="far fa-globe icon-before" href="#" aria-hidden="true">International</a></p>
    </div>

    <div class="col-md-6">
      <h6>With <code>.icon-after</code> class</h6>
      <p><a class="far fa-handshake icon-after" href="#" aria-hidden="true">New Project Request</a>
      <br>
      <a class="far fa-envelope icon-after" href="#" aria-hidden="true">Email@emailProvider.com</a>
      <br>
      <a class="far fa-cogs icon-after" href="#" aria-hidden="true">Settings</a>
      <br>
      <a class="far fa-globe icon-after" href="#" aria-hidden="true">International</a></p>
    </div>
  `
};

export const IconsOnNonLinkElements = Template.bind({});
IconsOnNonLinkElements.args = {
  title: "Icons on Non-Link Elements",
  content: `
  <div class="col-md-6">
      <h6>Default</h6>
      <p><span class="icon-el far fa-handshake icon-before" href="#" aria-hidden="true">New Project Request</span>
      <br>
      <span class="icon-el far fa-envelope icon-before" href="#" aria-hidden="true">Email@emailProvider.com</span>
      <br>
      <span class="icon-el far fa-cogs icon-before" href="#" aria-hidden="true">Settings</span>
      <br>
      <span class="icon-el far fa-globe icon-before" href="#" aria-hidden="true">International</span></p>
    </div>

    <div class="col-md-6">
      <h6>With <code>.icon-after</code> class</h6>
      <p><span class="icon-el far fa-handshake icon-after" href="#" aria-hidden="true">New Project Request</span>
      <br>
      <span class="icon-el far fa-envelope icon-after" href="#" aria-hidden="true">Email@emailProvider.com</span>
      <br>
      <span class="icon-el far fa-cogs icon-after" href="#" aria-hidden="true">Settings</span>
      <br>
      <span class="icon-el far fa-globe icon-after" href="#" aria-hidden="true">International</span></p>
    </div>
  `
};

export const MultipleIcons = Template.bind({});
MultipleIcons.args = {
  title: "Multiple Icons",
  content: MultipleIconsContent,
};

export const StandAloneIcons = Template.bind({});
StandAloneIcons.args = {
  title: "Stand Alone Icons",
  content: `<a class="far fa-search" href="#key-facts" aria-hidden="true"><span class="sr-only">Button</span></a>`,
};