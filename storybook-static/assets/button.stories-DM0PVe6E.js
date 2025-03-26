const O=["primary","secondary","link","tag-link","tag-nolink","light","white","dark","danger","info","warning","danger","success","outline-primary","outline-secondary","outline-light","outline-success","outline-info","outline-warning","outline-danger","outline-dark"],w={title:"Components/Button",argTypes:{variation:{control:"select",options:O,table:{defaultValue:{summary:"primary"},type:{summary:"string"}}},size:{control:"select",default:"md",options:["sm","md","lg","block"]}},parameters:{layout:"centered",controls:{expanded:!0}}},d=({text:t,variation:l,size:c})=>`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-${l} btn-${c}" href="#">${t}</a></div>
    <div><button class="btn btn-${l} btn-${c}">${t}</button></div>
    </div>`,n=d.bind({});n.args={variation:"primary",text:"Primary Button",size:"md"};const e=d.bind({});e.args={variation:"secondary",text:"Secondary",size:"md"};const a=d.bind({});a.args={variation:"link",text:"Link",size:"md"};const i=d.bind({});i.args={variation:"tag-link",text:"Tag Link",size:"md"};const r=d.bind({});r.args={variation:"tag-nolink",text:"Tag No Link",size:"md"};const s=d.bind({});s.args={variation:"primary call-to-action",text:"Outline Dark",size:"md"};const o=()=>{const t=document.createElement("div");t.classList.add("grid-cols-sm"),t.style.padding="1rem";const l=O.map(c=>`<div><a class="btn btn-${c} btn-md" href="#">${c}</a></div>`).join("");return t.innerHTML=l,t};o.parameters={layout:"fullscreen"};var u,m,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,p,g;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var $,y,x;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var z,f,k;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,T,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var L,_,B;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`({
  text,
  variation,
  size
}) => {
  return \`<div style="display: grid; gap: 1rem">
    <div><a class="btn btn-\${variation} btn-\${size}" href="#">\${text}</a></div>
    <div><button class="btn btn-\${variation} btn-\${size}">\${text}</button></div>
    </div>\`;
}`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var j,A,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const element = document.createElement('div');
  element.classList.add('grid-cols-sm');
  element.style.padding = '1rem';
  const buttons = variations.map(variation => \`<div><a class="btn btn-\${variation} btn-md" href="#">\${variation}</a></div>\`).join('');
  element.innerHTML = buttons;
  return element;
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const C=["Default","Secondary","Link","TagLink","TagNolink","CTAButton","AllVariations"],E=Object.freeze(Object.defineProperty({__proto__:null,AllVariations:o,CTAButton:s,Default:n,Link:a,Secondary:e,TagLink:i,TagNolink:r,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{E as B,n as D};
