import {
  Row,
  rowParagraphObject,
  rowContent,
  rowBackgrounds,
} from "../../templates/Row";

import {
  renderImageCard,
  imageCardContent,
  imageCardParagraph,
} from "../../templates/ImageCard";

export default {
  title: "Paragraphs/Rows",
  argTypes: {
    rowClasses: {
      control: "multi-select",
      options: [
        "vertically-center-cols",
        "mobile-reverse-cols",
        "row--title--large-underline",
        "row--title--large-underline-bottom",
        "row--title--large-underline-bottom blue",
        "row--title--large-underline-bottom green",
        "row--title--large-underline-bottom purple",
        "row--title--large-underline-bottom teal",
        "row--title--large-underline-bottom red",
        "row--title--large-underline-bottom yellow",
      ],
      description: "Class to apply to the <ul> element",
      defaultValue: "row--title--large-underline",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default = () => {
  return rowBackgrounds
    .map((bg_color) =>
      Row({
        title: "Row Title",
        background: bg_color,
        content: rowContent,
      })
     ).join("\n");
};

export const RowTitleBorders = ({ rowClasses, ...args }) => {
  const imageCard = renderImageCard(imageCardParagraph, imageCardContent);
  const content = `<div class="col-md-6">${imageCard}</div><div class="col-md-6">${imageCard}</div>`;

  return rowBackgrounds
    .map((bg_color) =>
      Row({
        title: "Row Title",
        background: bg_color,
        content,
      })
    ).join("\n");
};
