import template from "../html-templates/facilities.html?raw";
import {
  renderRow,
  rowParagraphObject,
  rowBackgrounds,
  rowContent,
} from "../../templates/Row";

export default {
  title: "Views/Facilities",
};

const Template = ({ content, title, ...args }) => {
  return renderRow(
        {
          ...rowParagraphObject,
          field_row_title: { value: title },
        },
        {
          ...rowContent,
          field_content: content,
        }
      );
};

export const Default = Template.bind({});
Default.args = {
  title: "Facilities",
  content: template,
};