import{r as k,i as o,a as d}from"./ImageCard-DoKBpjQY.js";import{r as j,a as T,b as H,c as I}from"./Row-BKnN5jBN.js";const O={title:"Paragraphs/Image Cards",parameters:{controls:{expanded:!0}}},t=({imageCardParagraph:P,imageCardContent:h})=>{const f=k(P,h);return j.map(v=>T({...I,field_background_color:{value:v}},{...H,field_content:f})).join(`
`)},r=t.bind({});r.args={imageCardParagraph:{...d,field_image_placement:{value:"left"}},imageCardContent:o};const a=t.bind({});a.args={imageCardParagraph:{...d,field_image_placement:{value:"right"}},imageCardContent:o};const e=t.bind({});e.args={imageCardParagraph:{...d,field_image_placement:{value:"above"}},imageCardContent:o};const n=t.bind({});n.args={imageCardParagraph:{...d,field_link:{url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",value:!0}},imageCardContent:o};var c,g,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
  imageCardParagraph,
  imageCardContent
}) => {
  const renderedCard = renderImageCard(imageCardParagraph, imageCardContent);
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, {
    ...rowContent,
    field_content: renderedCard
  })).join("\\n");
}`,...(s=(g=r.parameters)==null?void 0:g.docs)==null?void 0:s.source}}};var m,i,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  imageCardParagraph,
  imageCardContent
}) => {
  const renderedCard = renderImageCard(imageCardParagraph, imageCardContent);
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, {
    ...rowContent,
    field_content: renderedCard
  })).join("\\n");
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,C,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  imageCardParagraph,
  imageCardContent
}) => {
  const renderedCard = renderImageCard(imageCardParagraph, imageCardContent);
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, {
    ...rowContent,
    field_content: renderedCard
  })).join("\\n");
}`,...(u=(C=e.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var _,b,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`({
  imageCardParagraph,
  imageCardContent
}) => {
  const renderedCard = renderImageCard(imageCardParagraph, imageCardContent);
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    }
  }, {
    ...rowContent,
    field_content: renderedCard
  })).join("\\n");
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const x=["leftPlacementHTML","rightPlacementHTML","abovePlacementHTML","videoExample"];export{x as __namedExportsOrder,e as abovePlacementHTML,O as default,r as leftPlacementHTML,a as rightPlacementHTML,n as videoExample};
