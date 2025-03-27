import {
  ImageCard
} from "../../templates/ImageCard";

import {
  Row,
  rowBackgrounds,
} from "../../templates/Row";

export default {
  title: "Paragraphs/Image Cards",
  argTypes: {
    outerContainerClass: {
      control: "multi-select",
      options: [
        "row--title--large-underline",
        "row--title--large-underline-bottom",
        "row--title--large-underline-bottom blue",
        "row--title--large-underline-bottom green",
        "row--title--large-underline-bottom purple",
        "row--title--large-underline-bottom teal",
        "row--title--large-underline-bottom red",
        "row--title--large-underline-bottom yellow",
      ],
      table: {
        category: 'Layout',
        defaultValue: { summary: "left" },
        type: { summary: "string" }
      }
    },
    innerContainerClass: {
      control: "multi-select",
      options: [
        "vertically-center-cols",
        "mobile-reverse-cols",
        "extra-middle-padding",
        "image-card--bottom-border",
        "image-card-halves",
        "image-card-logos",
        "image-card-thirds",
        "overlap-title-full-offset",
      ],
      table: {
        category: 'Layout'
      }
    },
    placement: {
      control: "select",
      options: ["left", "right", "above"],
      defaultValue: "left",
      table: {
        category: 'Image',
        defaultValue: { summary: "left" },
        type: { summary: "string" }
      }
    },
    imageUrl: {
      control: "text",
      table: {
        category: 'Image'
      }
    },
    imageAlt: {
      control: "text",
      table: {
        category: 'Image'
      }
    },
    title: {
      control: "text",
      table: {
        category: 'Content'
      }
    },
    description: {
      control: "text",
      table: {
        category: 'Content'
      }
    },
    linkUrl: {
      control: "text",
      table: {
        category: 'Content'
      }
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = ({ 
  outerContainerClass = "",
  innerContainerClass = "", 
  placement = "left", 
  imageUrl = "", 
  imageAlt = "placeholder", 
  title = "", 
  description, 
  linkUrl = "", 
}) => {

  const renderedCard = ImageCard({ placement, imageUrl, imageAlt, title, description, linkUrl });

  return rowBackgrounds.map((bg_color) =>
    Row({
      background: bg_color,
      outerContainerClass,
      innerContainerClass: `max-width-800-mx-auto lead-full-width ${innerContainerClass}`,
      content: renderedCard,
    })
  ).join("\n");
};

// Example with left placement
export const leftPlacementHTML = Template.bind({});
leftPlacementHTML.args = {
  placement: "left",
  imageUrl: "https://www.rit.edu/sites/rit.edu/files/images/placeholders/purple-16x9.png",
  imageAlt: "Placeholder image",
  description: `<p>this is a description of the image card.</p>`,
};

// Example with right placement
export const rightPlacementHTML = Template.bind({});
rightPlacementHTML.args = {
  placement: "right",
  imageUrl: "https://www.rit.edu/sites/rit.edu/files/images/placeholders/purple-16x9.png",
  imageAlt: "Placeholder image",
  description: `<p>this is a description of the image card.</p>`,
};

// Example with right placement
export const abovePlacementHTML = Template.bind({});
abovePlacementHTML.args = {
  placement: "above",
  imageUrl: "https://www.rit.edu/sites/rit.edu/files/images/placeholders/purple-16x9.png",
  imageAlt: "Placeholder image",
  description: `<p>this is a description of the image card.</p>`,
};

// Example with video link (YouTube)
export const videoExample = Template.bind({});
videoExample.args = {
  placement: "left",
  imageUrl: "https://www.rit.edu/sites/rit.edu/files/images/placeholders/green-16x9.png",
  imageAlt: "Placeholder image",
  linkUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  description: `<p>this is a description of the image card.</p>`,
};
