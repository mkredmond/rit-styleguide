import {
  renderImageCard,
  imageCardContent,
  imageCardParagraph,
} from "../../templates/ImageCard";

import {
  renderRow,
  rowParagraphObject,
  rowAttributes,
  rowContent,
  rowBackgrounds,
} from "../../templates/Row";

export default {
  title: "Paragraphs/Image Cards",
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

const Template = ({imageCardParagraph, imageCardContent}) => {
  console.log(imageCardParagraph);
  
  const renderedCard = renderImageCard(imageCardParagraph, imageCardContent);

  return rowBackgrounds
    .map((bg_color) =>
      renderRow(
        { ...rowParagraphObject, field_background_color: { value: bg_color } },
        rowAttributes,
        { ...rowContent, field_content: renderedCard }
      )
    )
    .join("\n");
};

// Example with left placement
export const leftPlacementHTML = Template.bind({});
leftPlacementHTML.args = {
  imageCardParagraph: { ...imageCardParagraph, field_image_placement: { value: "left" } },
  imageCardContent
};

// Example with right placement
export const rightPlacementHTML = Template.bind({});
rightPlacementHTML.args = {
  imageCardParagraph: { ...imageCardParagraph, field_image_placement: { value: "right" } },
  imageCardContent
};

// Example with right placement
export const abovePlacementHTML = Template.bind({});
abovePlacementHTML.args = {
  imageCardParagraph: { ...imageCardParagraph, field_image_placement: { value: "above" } },
  imageCardContent
};


// Example with video link (YouTube)
export const videoExample = Template.bind({});
videoExample.args = {
  imageCardParagraph:  {
      ...imageCardParagraph,
      field_link: [
        {
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          value: true,
        },
      ],
    },
    imageCardContent
};