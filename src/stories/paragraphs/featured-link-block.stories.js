import { FeaturedLinkBlock } from "../../templates/FeaturedLinkBlock";

import { Row, rowBackgrounds } from "../../templates/Row";

export default {
  title: "Paragraphs/Featured Link Block",
  argTypes: {

  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({ 
  outerContainerClass = "",
  innerContainerClass = "", 
  title, 
  description,
  links,
  callToAction,
  backgrounds = rowBackgrounds,
}) => {

  const renderedBlock = FeaturedLinkBlock(title, description, links, callToAction);

  return backgrounds.map((bg) =>
    Row({
      background: bg,
      outerContainerClass,
      innerContainerClass: `${innerContainerClass}`,
      content: renderedBlock,
    })
  ).join("\n");

 
};

export const Default = Template.bind({});
Default.args = {
  title: "Featured Link Block",
  description: "This is a description for the featured link block.",
  links: [
    { title: "Link 1", url: "#" },
    { title: "Link 2", url: "#" },
    { title: "Link 3", url: "#" },
  ],
  callToAction: [
    { title: "Read More", url: "#" },
  ],
};

export const Outlined = Template.bind({});
Outlined.args = {
  innerContainerClass: "featured-links-block--outlined",
  title: "Featured Link Block",
  description: "This is a description for the featured link block.",
  links: [
    { title: "Link 1", url: "#" },
    { title: "Link 2", url: "#" },
    { title: "Link 3", url: "#" },
  ],
  callToAction: [
    { title: "Read More", url: "#" },
  ],
};

export const SmallerHeader = Template.bind({});
SmallerHeader.args = {
  innerContainerClass: "featured-links-block--small-header",
  title: "Featured Link Block",
  description: "This is a description for the featured link block.",
  links: [
    { title: "Link 1", url: "#" },
    { title: "Link 2", url: "#" },
    { title: "Link 3", url: "#" },
  ],
  callToAction: [
    { title: "Read More", url: "#" },
  ],
};