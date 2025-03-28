// import template from '../templates/row-full-width.template.html?raw'
import { Row, rowParagraphObject, rowBackgrounds, rowContent } from '../../templates/Row';

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
    <ul class="columns-2 narrow mx-auto col-10 col-md-10 col-lg-8 col-xxl-7 list-style-none pr-0"><li class="position-relative"><a class="far fa-check-circle see-more icon-block" href="#key-facts" aria-hidden="true">Key Facts</a></li><li class="position-relative"><a class="far fa-globe see-more icon-block" href="#rits-international-campuses" aria-hidden="true">RIT’s International Campuses</a></li><li class="position-relative"><a class="far fa-street-view see-more icon-block" href="#international-experiences" aria-hidden="true">International Experiences for Students</a></li><li class="position-relative"><a class="far fa-hands-helping see-more icon-block" href="#global-reach" aria-hidden="true">Global Reach</a></li><li class="position-relative"><a class="far fa-globe-americas see-more icon-block" href="#global-impact" aria-hidden="true">RIT’s Global Impact …  From Across Town to Across Borders </a></li><li class="position-relative"><a class="far fa-newspaper see-more icon-block" href="#rit-global-engagement-news" aria-hidden="true">RIT Global Engagement News</a></li><li class="position-relative"><a class="far fa-calendar-alt see-more icon-block" href="#featured-events" aria-hidden="true">Featured Events</a></li><li class="position-relative"><a class="far fa-link see-more icon-block" href="#stay-connected" aria-hidden="true">Stay Connected</a></li></ul>
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
  title: "Icons on Non-Link Elements",
  content: `<ul class="list-style-none columns-2 fit-content mw-100">
  <li>
    <div
      about="/taxonomy/term/4847"
      id="taxonomy-term-4847"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span
          class="fal fa-pencil-paintbrush text-center"
          aria-hidden="true"
        ></span>
        <span
          class="fal fa-ruler-triangle text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/art-design-and-architecture"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Art, Design, and Architecture
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4855"
      id="taxonomy-term-4855"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-briefcase text-center" aria-hidden="true"></span>
        <span
          class="fal fa-chart-pie text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/business-management-and-leadership"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Business, Management, and Leadership
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4859"
      id="taxonomy-term-4859"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-comments text-center" aria-hidden="true"></span>
        <span
          class="fal fa-file-image text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/communications-and-digital-media"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Communications and Digital Media
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4851"
      id="taxonomy-term-4851"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-phone-laptop text-center" aria-hidden="true"></span>
        <span
          class="fal fa-code text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/computing-and-information-sciences"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Computing and Information Sciences
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4871"
      id="taxonomy-term-4871"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-user-robot text-center" aria-hidden="true"></span>
        <span
          class="fal fa-cogs text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/engineering-and-engineering-technology"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Engineering and Engineering Technology
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4887"
      id="taxonomy-term-4887"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-leaf text-center" aria-hidden="true"></span>
        <span
          class="fal fa-wind-turbine text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/environmental-studies-and-sustainability"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Environmental Studies and Sustainability
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/344509"
      id="taxonomy-term-344509"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-gamepad-alt text-center" aria-hidden="true"></span>
        <span
          class="fal fa-laptop-code text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/game-design-development-and-arts"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Game Design, Development, and Arts
          </div>

          <!-- END OUTPUT from 'sites/all/themes/classy/templates/field/field.html.twig' -->
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4879"
      id="taxonomy-term-4879"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-heartbeat text-center" aria-hidden="true"></span>
        <span
          class="fal fa-syringe text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/health-professions-and-medical-sciences"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Health Professions and Medical Sciences
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4863"
      id="taxonomy-term-4863"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-books text-center" aria-hidden="true"></span>
        <span
          class="fal fa-landmark text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/humanities-social-sciences-and-education"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Humanities, Social Sciences, and Education
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4891"
      id="taxonomy-term-4891"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-photo-video text-center" aria-hidden="true"></span>
        <span
          class="fal fa-camera text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/photography-film-and-animation"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Photography, Film, and Animation
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4875"
      id="taxonomy-term-4875"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-vial text-center" aria-hidden="true"></span>
        <span
          class="fal fa-function text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/science-and-math"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Science and Math
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4867"
      id="taxonomy-term-4867"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-search text-center" aria-hidden="true"></span>
        <span
          class="fal fa-map-signs text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/undeclared-and-individualized-study"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Undeclared and Individualized Study
          </div>
        </a>
      </span>
    </div>
  </li>
</ul>
`
};

export const OverrideIconColor = Template.bind({});
OverrideIconColor.args = {
  title: "Override Icon Color",
  content: `<div>
  <a style="--fa-color: pink" class="far fa-video" href="#">Event Video Production</a>
  <br>
  <a style="--fa-color: aliceblue" class="fa-laptop-code far" href="#">Website and Application Development</a>
  <br>
  <a style="--fa-color: brick" class="fa-paragraph far" href="#">Writing and Design</a>
  <br>
  <a style="--fa-color: red" class="fa-paragraph far" href="#">Writing and Design</a>`
};