import{r as c,a as g,b as m,c as u}from"./Row-BKnN5jBN.js";import{r as b,i as C,a as _}from"./ImageCard-DoKBpjQY.js";const j={title:"Paragraphs/Rows",argTypes:{rowClasses:{control:"multi-select",options:["vertically-center-cols","mobile-reverse-cols","row--title--large-underline","row--title--large-underline-bottom","row--title--large-underline-bottom blue","row--title--large-underline-bottom green","row--title--large-underline-bottom purple","row--title--large-underline-bottom teal","row--title--large-underline-bottom red","row--title--large-underline-bottom yellow"],description:"Class to apply to the <ul> element",defaultValue:"row--title--large-underline"}},parameters:{controls:{expanded:!0}}},r=()=>c.map(o=>g({...u,field_background_color:{value:o}},m)).join(`
`),e=({rowClasses:o,...v})=>{const a=b(_,C),p={...m,field_content:`<div class="col-md-6">${a}</div><div class="col-md-6">${a}</div>`};return c.map(w=>g({...u,field_background_color:{value:w}},p,o)).join(`
`)};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, rowContent)).join("\\n");
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  rowClasses,
  ...args
}) => {
  const imageCard = renderImageCard(imageCardParagraph, imageCardContent);
  const content = {
    ...rowContent,
    field_content: \`<div class="col-md-6">\${imageCard}</div><div class="col-md-6">\${imageCard}</div>\`
  };
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, content, rowClasses)).join("\\n");
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const k=["Default","RowTitleBorders"];export{r as Default,e as RowTitleBorders,k as __namedExportsOrder,j as default};
