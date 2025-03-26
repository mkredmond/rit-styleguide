const q={headings:{"h1-font-size":{value:"4.25",control:"text"},"h1-font-weight":{value:"bold",control:"text"},"h1-line-height":{value:"calc(4.5 / 4.25)",control:"text"},"h1-margin-bottom":{value:".5",control:"text"},"h1-color":{value:"#000",control:"color"},"h2-font-size":{value:"3.125",control:"text"},"h2-font-weight":{value:"400",control:"text"},"h2-font-weight":{value:"400",control:"text"},"h2-line-height":{value:"calc(2.5 / 2.25)",control:"text"},"h2-margin-bottom":{value:"0.25",control:"text"},"h2-color":{value:"#f76902",control:"color"},"h3-font-size":{value:"2",control:"text"},"h3-font-weight":{value:"bold",control:"text"},"h3-font-weight":{value:"bold",control:"text"},"h3-line-height":{value:"calc(2.25 / 2)",control:"text"},"h3-margin-bottom":{value:"0.25",control:"text"},"h3-color":{value:"#757575",control:"color"},"h4-font-size":{value:"1.5",control:"text"},"h4-font-weight":{value:"normal",control:"text"},"h4-font-weight":{value:"normal",control:"text"},"h4-line-height":{value:"calc(2 / 1.75)",control:"text"},"h4-margin-bottom":{value:".25",control:"text"},"h4-color":{value:"#000",control:"color"},"h5-font-size":{value:"1.25",control:"text"},"h5-font-weight":{value:"bold",control:"text"},"h5-line-height":{value:"calc(1.75 / 1.5)",control:"text"},"h5-margin-bottom":{value:".25",control:"text"},"h5-color":{value:"#f76902",control:"color"},"h6-font-size":{value:"1.15",control:"text"},"h6-font-weight":{value:"bold",control:"text"},"h6-line-height":{value:"calc(1.5 / 1.25)",control:"text"},"h6-margin-bottom":{value:".25",control:"text"},"h6-color":{value:"#000",control:"color"}}},h={title:"Typography/Headings",argTypes:{content:{control:"text",defaultValue:"Sample Heading Text"}},parameters:{controls:{expanded:!0},cssprops:q.headings}},i=({content:e,level:a,useCssVariables:v=!1,...f})=>{let t=`<h${a}`;return v===!0?t+=` style="
      font-size: calc(var(--h${a}-font-size) * 1rem);
      font-weight: var(--h${a}-font-weight);
      line-height: var(--h${a}-line-height);
      margin-bottom: calc(var(--h${a}-margin-bottom) * 1em);
      color: var(--h${a}-color);
    "`:t+=' class="do-not-use-css-variables"',t+=`>h${a} - ${e}</h${a}>`,t},l=({content:e,...a})=>(e=e||"Quo usque tandem abutere, Catilina, patientia nostra?",`
      <div>
        ${i({content:e,level:1,useCssVariables:!1})}
        ${i({content:e,level:2,useCssVariables:!1})}  
        ${i({content:e,level:3,useCssVariables:!1})}
        ${i({content:e,level:4,useCssVariables:!1})}
        ${i({content:e,level:5,useCssVariables:!1})}
        ${i({content:e,level:6,useCssVariables:!1})}
      </div>
    `),u=({content:e,...a})=>(e=e||"Quo usque tandem abutere, Catilina, patientia nostra?",`
    <div>
        ${i({content:e,level:1,useCssVariables:!0})}
        ${i({content:e,level:2,useCssVariables:!0})}  
        ${i({content:e,level:3,useCssVariables:!0})}
        ${i({content:e,level:4,useCssVariables:!0})}
        ${i({content:e,level:5,useCssVariables:!0})}
        ${i({content:e,level:6,useCssVariables:!0})}
    </div>
    `),s=({content:e,...a})=>(e=e||"Quo usque tandem abutere, Catilina, patientia nostra?",`
    <div class="container">
        ${i({content:e,level:1,useCssVariables:!0})}
        ${i({content:e,level:2,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${i({content:e,level:2,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p> 
        ${i({content:e,level:2,useCssVariables:!0})}
        ${i({content:e,level:3,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${i({content:e,level:4,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${i({content:e,level:4,useCssVariables:!0})}
        ${i({content:e,level:5,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        ${i({content:e,level:6,useCssVariables:!0})}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
    </div>
    `);var r,n,o;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`({
  content,
  ...args
}) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return \`
      <div>
        \${HeadingTemplate({
    content,
    level: 1,
    useCssVariables: false
  })}
        \${HeadingTemplate({
    content,
    level: 2,
    useCssVariables: false
  })}  
        \${HeadingTemplate({
    content,
    level: 3,
    useCssVariables: false
  })}
        \${HeadingTemplate({
    content,
    level: 4,
    useCssVariables: false
  })}
        \${HeadingTemplate({
    content,
    level: 5,
    useCssVariables: false
  })}
        \${HeadingTemplate({
    content,
    level: 6,
    useCssVariables: false
  })}
      </div>
    \`;
}`,...(o=(n=l.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,m;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`({
  content,
  ...args
}) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return \`
    <div>
        \${HeadingTemplate({
    content,
    level: 1,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 2,
    useCssVariables: true
  })}  
        \${HeadingTemplate({
    content,
    level: 3,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 4,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 5,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 6,
    useCssVariables: true
  })}
    </div>
    \`;
}`,...(m=(d=u.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  content,
  ...args
}) => {
  content = content || "Quo usque tandem abutere, Catilina, patientia nostra?";
  return \`
    <div class="container">
        \${HeadingTemplate({
    content,
    level: 1,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 2,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        \${HeadingTemplate({
    content,
    level: 2,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p> 
        \${HeadingTemplate({
    content,
    level: 2,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 3,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        \${HeadingTemplate({
    content,
    level: 4,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        \${HeadingTemplate({
    content,
    level: 4,
    useCssVariables: true
  })}
        \${HeadingTemplate({
    content,
    level: 5,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        \${HeadingTemplate({
    content,
    level: 6,
    useCssVariables: true
  })}
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
        <p>Non equidem invideo, miror magis posuere velit aliquet. Quisque placerat facilisis egestas cillum dolore. Curabitur blandit tempus ardua ridiculus sed magna. Contra legem facit qui id facit quod lex prohibet. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
    </div>
    \`;
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const C=["CurrentHeadings","NewHeadingStyles","NewHeadingStylesWithText"];export{l as CurrentHeadings,u as NewHeadingStyles,s as NewHeadingStylesWithText,C as __namedExportsOrder,h as default};
