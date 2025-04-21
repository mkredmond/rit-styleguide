import EditorialGuidelinesContent from '../html-templates/editorial-guildelines.html?raw';
import ChemistryBSContent from '../html-templates/chemistry-bs.html?raw';

export default {
  title: "Typography/Headings",
  argTypes: {
    content: {
      control: "text",
      defaultValue: "Sample Heading Text",
    },
    bg: {
      control: "select",
      options: ["bg-white", "bg-light", "bg-black", "bg-primary"],
      defaultValue: "bg-white",
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

const HeadingTemplate = ({ content, level, bg, ...args }) => {
  let heading = `<h${level}>h${level} - ${content}</h${level}>`;
  return heading;
};

export const CurrentHeadings = ({ content, ...args }) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return `
      <div>
        ${HeadingTemplate({ content, level: 1 })}
        ${HeadingTemplate({ content, level: 2 })}  
        ${HeadingTemplate({ content, level: 3 })}
        ${HeadingTemplate({ content, level: 4 })}
        ${HeadingTemplate({ content, level: 5 })}
        ${HeadingTemplate({ content, level: 6 })}
      </div>
    `;
};

export const NewHeadingStyles = ({ content, bg,...args }) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return `
    <div class="p-4 ${bg}">
        ${HeadingTemplate({ content, level: 1 })}
        ${HeadingTemplate({ content, level: 2 })}  
        ${HeadingTemplate({ content, level: 3 })}
        ${HeadingTemplate({ content, level: 4 })}
        ${HeadingTemplate({ content, level: 5 })}
        ${HeadingTemplate({ content, level: 6 })}
    </div>
    `;
};

export const EditorialGuidelines = () => {
  return EditorialGuidelinesContent;
}
export const ChemistryBS = () => {
  return ChemistryBSContent;
}