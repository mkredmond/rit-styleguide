import { cssProps } from "../cssProps";

export default {
  title: "Typography/Headings",
  argTypes: {
    content: {
      control: "text",
      defaultValue: "Sample Heading Text",
    }
  },
  parameters: {
    controls: { expanded: true },
    cssprops: cssProps.headings,
  },
};

const HeadingTemplate = ({ content, level, useCssVariables = false, ...args }) => {
  let heading = `<h${level}`;
  
  if (useCssVariables === true) {
    heading += ` style="
      font-size: calc(var(--h${level}-font-size) * 1rem);
      font-weight: var(--h${level}-font-weight);
      line-height: var(--h${level}-line-height);
      margin-bottom: calc(var(--h${level}-margin-bottom) * 1em);
      color: var(--h${level}-color);
    "`;
  } else {
    heading += ` class="do-not-use-css-variables"`;
  }
  
  heading += `>h${level} - ${content}</h${level}>`;

  return heading;
};

export const CurrentHeadings = ({ content, ...args }) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return `
      <div>
        ${HeadingTemplate({ content, level: 1, useCssVariables: false })}
        ${HeadingTemplate({ content, level: 2, useCssVariables: false })}  
        ${HeadingTemplate({ content, level: 3, useCssVariables: false })}
        ${HeadingTemplate({ content, level: 4, useCssVariables: false })}
        ${HeadingTemplate({ content, level: 5, useCssVariables: false })}
        ${HeadingTemplate({ content, level: 6, useCssVariables: false })}
      </div>
    `;
};

export const NewHeadingStyles = ({ content, ...args }) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return `
    <div>
        ${HeadingTemplate({ content, level: 1, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 2, useCssVariables: true })}  
        ${HeadingTemplate({ content, level: 3, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 4, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 5, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 6, useCssVariables: true })}
    </div>
    `;
};

export const NewHeadingStylesWithText = ({ content, ...args }) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return `
    <div class="container">
        ${HeadingTemplate({ content, level: 1, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 2, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${HeadingTemplate({ content, level: 2, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p> 
        ${HeadingTemplate({ content, level: 2, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 3, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${HeadingTemplate({ content, level: 4, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${HeadingTemplate({ content, level: 4, useCssVariables: true })}
        ${HeadingTemplate({ content, level: 5, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${HeadingTemplate({ content, level: 6, useCssVariables: true })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
    </div>
    `;
};