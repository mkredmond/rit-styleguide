import { IconCard } from "../../templates/IconCard";

import { Row, rowBackgrounds } from "../../templates/Row";

export default {
  title: "Paragraphs/Icon Cards",
  argTypes: {

  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({ 
  outerContainerClass = "",
  innerContainerClass = "", 
  content, 
  link, 
  icons,
  backgrounds = rowBackgrounds,
}) => {

  const renderedCard = IconCard(content, link, icons);

  return backgrounds.map((bg) =>
    Row({
      background: bg,
      outerContainerClass,
      innerContainerClass: `${innerContainerClass}`,
      content: renderedCard,
    })
  ).join("\n");

 
};

export const Default = Template.bind({});
Default.args = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: ["fa fa-users"],
};

export const MultipleIcons = Template.bind({});
MultipleIcons.args = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: [ "fal fa-heart", "fa fa-star"],
};

export const WithLink = Template.bind({});
WithLink.args = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "https://rit.edu",
  icons: ["fa fa-users"],
};

export const IconCardButtons = Template.bind({});
IconCardButtons.args = {
  outerContainerClass: "icon-card-buttons",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: ["fa fa-laptop"],
};

export const AlternateIconCard = Template.bind({});
AlternateIconCard.args = {
  innerContainerClass: "icon-card--alternate",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: ["fal fa-leaf"],
};

export const NoBorderIconCard = Template.bind({});
NoBorderIconCard.args = {
  innerContainerClass: "icon-card--no-border",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: ["fal fa-leaf"],
};

export const CenteredIconCard = Template.bind({});
CenteredIconCard.args = {
  innerContainerClass: "icon-card--centered",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  link: "#",
  icons: ["fal fa-leaf"],
};

export const OrangeDividerIconCard = Template.bind({});
OrangeDividerIconCard.args = {
  innerContainerClass: "icon-orange-divider",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icons: ["fal fa-leaf"],
};

export const BulletIconCard = Template.bind({});
BulletIconCard.args = {
  innerContainerClass: "icon-card--bullet",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icons: ["fal fa-leaf"],
};