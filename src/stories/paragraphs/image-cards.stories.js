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
    // Add a background control for selecting row background
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
        // Category removed
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
        // Category removed
      }
    },
    placement: {
      control: "select",
      options: ["left", "right", "above"],
      defaultValue: "left",
      table: {
        defaultValue: { summary: "left" },
        // Category removed
      }
    },
    imageUrl: {
      control: "text",
      table: {
        // Category removed
      }
    },
    imageAlt: {
      control: "text",
      table: {
        // Category removed
      }
    },
    title: {
      control: "text",
      table: {
        // Category removed
      }
    },
    description: {
      control: "text",
      table: {
        // Category removed
      }
    },
    linkUrl: {
      control: "text",
      table: {
        // Category removed
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
  backgrounds = rowBackgrounds,
}) => {

  const renderedCard = ImageCard({ placement, imageUrl, imageAlt, title, description, linkUrl });

  return backgrounds.map((bg) =>
    Row({
      background: bg,
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
