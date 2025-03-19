import {
  renderRow,
  rowParagraphObject,
  rowAttributes,
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
      renderRow(
        {
          ...rowParagraphObject,
          field_background_color: { value: bg_color },
        },
        rowAttributes,
        rowContent,
      )
    )
    .join("\n");
};

export const RowTitleBorders = ({ rowClasses, ...args }) => {
  
  const imageCard = renderImageCard(imageCardParagraph, imageCardContent);
  const content = { ...rowContent, field_content: `<div class="col-md-6">${imageCard}</div><div class="col-md-6">${imageCard}</div>` };

  return rowBackgrounds
    .map((bg_color) =>
      renderRow(
        {
          ...rowParagraphObject,
          field_background_color: { value: bg_color },
        },
        rowAttributes,
        content,
        rowClasses,
      )
    )
    .join("\n");
};
