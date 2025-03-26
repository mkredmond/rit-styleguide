import template from "./latest-news.html?raw";
import directoryNews from "./directory-news.html?raw";
import {
  renderRow,
  rowParagraphObject,
  rowBackgrounds,
  rowContent,
} from "../../templates/Row";

export default {
  title: "Views/News",
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
  title: "News",
  content: template,
};

export const DirectoryNews = Template.bind({});
DirectoryNews.args = {
  title: "Directory News",
  content: directoryNews,
};