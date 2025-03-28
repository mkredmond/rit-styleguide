import template from "./news-latest.html?raw";
import directoryNews from "./news-directory.html?raw";
import noImageNews from "./news-no-image.html?raw";
import {
  Row
} from "../../templates/Row";

export default {
  title: "Views/News",
};

const Template = ({ content, title, ...args }) => {
  return Row({
    title, 
    content
  })
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

export const NewWithNoImage = Template.bind({});
NewWithNoImage.args = {
  title: "No Image",
  content: noImageNews,
};