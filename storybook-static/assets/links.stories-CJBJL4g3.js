import{r as T,a as B,b as M,c as W}from"./Row-BKnN5jBN.js";const q={title:"Components/Links",argTypes:{content:{control:"text"}},parameters:{controls:{expanded:!0}}},e=({content:N,title:A,...G})=>T.map(D=>B({...W,field_background_color:{value:D},field_row_title:{value:A}},{...M,field_content:N})).join(`
`),a=e.bind({});a.args={title:"Inline Links",content:'<p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'};a.storyName="Inline Links";const n=e.bind({});n.args={title:"Call to Actions",content:`<div>
  <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p><a href="#" class="call-to-action">Please do something</a></p>
  </div>`};const t=e.bind({});t.args={title:"Icon Links",content:`
    <div class="col-md-6">
      <h6>Font Awesome classes only</h6>
      <ul class="list-style-none">
          <li>
            <a class="far fa-video" href="#">Event Video Production</a>
          </li>
          <li>
            <a class="fa-laptop-code far" href="#">Website and Application Development</a>
          </li>
          <li>
            <a class="fa-paragraph far" href="#">Writing and Design</a>
          </li>
      </ul>
    </div>
    <div class="col-md-6">
      <h6>With <code>.see-more</code> class</h6>
      <ul class="list-style-none">
          <li>
            <a class="far fa-video see-more" href="#">Event Video Production</a>
          </li>
          <li>
            <a class="fa-laptop-code far see-more" href="#">Website and Application Development</a>
          </li>
          <li>
            <a class="fa-paragraph far see-more" href="#">Writing and Design</a>
          </li>
      </ul>
    </div>
  `};const r=e.bind({});r.args={title:"Inline Nav List",content:`
    <ul class="columns-2 narrow mx-auto col-10 col-md-10 col-lg-8 col-xxl-7 list-style-none pr-0"><li class="position-relative"><a class="far fa-check-circle see-more icon-block" href="#key-facts" aria-hidden="true">Key Facts</a></li><li class="position-relative"><a class="far fa-globe see-more icon-block" href="#rits-international-campuses" aria-hidden="true">RIT’s International Campuses</a></li><li class="position-relative"><a class="far fa-street-view see-more icon-block" href="#international-experiences" aria-hidden="true">International Experiences for Students</a></li><li class="position-relative"><a class="far fa-hands-helping see-more icon-block" href="#global-reach" aria-hidden="true">Global Reach</a></li><li class="position-relative"><a class="far fa-globe-americas see-more icon-block" href="#global-impact" aria-hidden="true">RIT’s Global Impact …  From Across Town to Across Borders </a></li><li class="position-relative"><a class="far fa-newspaper see-more icon-block" href="#rit-global-engagement-news" aria-hidden="true">RIT Global Engagement News</a></li><li class="position-relative"><a class="far fa-calendar-alt see-more icon-block" href="#featured-events" aria-hidden="true">Featured Events</a></li><li class="position-relative"><a class="far fa-link see-more icon-block" href="#stay-connected" aria-hidden="true">Stay Connected</a></li></ul>
  `};const i=e.bind({});i.args={title:"See More Links",content:`
  <div class="more-link see-more-link font-weight-bold mt-4 mt-md-0 text-left">
    <a class="far fa-arrow-right icon-after" href="https://www-staging.rit.edu/program-directory/7035248" aria-hidden="true">All Program Faculty</a>
  </div>
  `};const s=e.bind({});s.args={title:"Links with Custom Icons",content:`
    <div class="col-md-6">
      <h6>Default</h6>
      <p><a class="far fa-handshake icon-before" href="#" aria-hidden="true">New Project Request</a>
      <br>
      <a class="far fa-envelope icon-before" href="#" aria-hidden="true">Email@emailProvider.com</a>
      <br>
      <a class="far fa-cogs icon-before" href="#" aria-hidden="true">Settings</a>
      <br>
      <a class="far fa-globe icon-before" href="#" aria-hidden="true">International</a></p>
    </div>

    <div class="col-md-6">
      <h6>With <code>.icon-after</code> class</h6>
      <p><a class="far fa-handshake icon-after" href="#" aria-hidden="true">New Project Request</a>
      <br>
      <a class="far fa-envelope icon-after" href="#" aria-hidden="true">Email@emailProvider.com</a>
      <br>
      <a class="far fa-cogs icon-after" href="#" aria-hidden="true">Settings</a>
      <br>
      <a class="far fa-globe icon-after" href="#" aria-hidden="true">International</a></p>
    </div>
  `};const o=e.bind({});o.args={title:"Icons on Non-Link Elements",content:`
  <div class="col-md-6">
      <h6>Default</h6>
      <p><span class="icon-el far fa-handshake icon-before" href="#" aria-hidden="true">New Project Request</span>
      <br>
      <span class="icon-el far fa-envelope icon-before" href="#" aria-hidden="true">Email@emailProvider.com</span>
      <br>
      <span class="icon-el far fa-cogs icon-before" href="#" aria-hidden="true">Settings</span>
      <br>
      <span class="icon-el far fa-globe icon-before" href="#" aria-hidden="true">International</span></p>
    </div>

    <div class="col-md-6">
      <h6>With <code>.icon-after</code> class</h6>
      <p><span class="icon-el far fa-handshake icon-after" href="#" aria-hidden="true">New Project Request</span>
      <br>
      <span class="icon-el far fa-envelope icon-after" href="#" aria-hidden="true">Email@emailProvider.com</span>
      <br>
      <span class="icon-el far fa-cogs icon-after" href="#" aria-hidden="true">Settings</span>
      <br>
      <span class="icon-el far fa-globe icon-after" href="#" aria-hidden="true">International</span></p>
    </div>
  `};const l=e.bind({});l.args={title:"Icons on Non-Link Elements",content:`<ul class="list-style-none columns-2 fit-content mw-100">
  <li>
    <div
      about="/taxonomy/term/4847"
      id="taxonomy-term-4847"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span
          class="fal fa-pencil-paintbrush text-center"
          aria-hidden="true"
        ></span>
        <span
          class="fal fa-ruler-triangle text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/art-design-and-architecture"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Art, Design, and Architecture
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4855"
      id="taxonomy-term-4855"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-briefcase text-center" aria-hidden="true"></span>
        <span
          class="fal fa-chart-pie text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/business-management-and-leadership"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Business, Management, and Leadership
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4859"
      id="taxonomy-term-4859"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-comments text-center" aria-hidden="true"></span>
        <span
          class="fal fa-file-image text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/communications-and-digital-media"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Communications and Digital Media
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4851"
      id="taxonomy-term-4851"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-phone-laptop text-center" aria-hidden="true"></span>
        <span
          class="fal fa-code text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/computing-and-information-sciences"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Computing and Information Sciences
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4871"
      id="taxonomy-term-4871"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-user-robot text-center" aria-hidden="true"></span>
        <span
          class="fal fa-cogs text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/engineering-and-engineering-technology"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Engineering and Engineering Technology
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4887"
      id="taxonomy-term-4887"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-leaf text-center" aria-hidden="true"></span>
        <span
          class="fal fa-wind-turbine text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/environmental-studies-and-sustainability"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Environmental Studies and Sustainability
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/344509"
      id="taxonomy-term-344509"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-gamepad-alt text-center" aria-hidden="true"></span>
        <span
          class="fal fa-laptop-code text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/game-design-development-and-arts"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Game Design, Development, and Arts
          </div>

          <!-- END OUTPUT from 'sites/all/themes/classy/templates/field/field.html.twig' -->
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4879"
      id="taxonomy-term-4879"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-heartbeat text-center" aria-hidden="true"></span>
        <span
          class="fal fa-syringe text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/health-professions-and-medical-sciences"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Health Professions and Medical Sciences
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4863"
      id="taxonomy-term-4863"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-books text-center" aria-hidden="true"></span>
        <span
          class="fal fa-landmark text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/humanities-social-sciences-and-education"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Humanities, Social Sciences, and Education
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4891"
      id="taxonomy-term-4891"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-photo-video text-center" aria-hidden="true"></span>
        <span
          class="fal fa-camera text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/photography-film-and-animation"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Photography, Film, and Animation
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4875"
      id="taxonomy-term-4875"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-vial text-center" aria-hidden="true"></span>
        <span
          class="fal fa-function text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/science-and-math"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Science and Math
          </div>
        </a>
      </span>
    </div>
  </li>
  <li>
    <div
      about="/taxonomy/term/4867"
      id="taxonomy-term-4867"
      class="card areas-of-study taxonomy-term vocabulary-areas-of-study"
    >
      <span
        class="position-relative align-items-baseline d-flex icon-link-wrapper"
      >
        <span class="fal fa-search text-center" aria-hidden="true"></span>
        <span
          class="fal fa-map-signs text-center mr-2 mr-md-1"
          aria-hidden="true"
        ></span>
        <a
          href="https://www.rit.edu/study/undeclared-and-individualized-study"
          class="see-more mb-2"
        >
          <div
            class="field field--name-name field--type-string field--label-hidden field__item"
          >
            Undeclared and Individualized Study
          </div>
        </a>
      </span>
    </div>
  </li>
</ul>
`};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,p,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var _,x,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var I,S,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var j,L,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var E,R,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`({
  content,
  title,
  ...args
}) => {
  return rowBackgrounds.map(bg_color => renderRow({
    ...rowParagraphObject,
    field_background_color: {
      value: bg_color
    },
    field_row_title: {
      value: title
    }
  }, {
    ...rowContent,
    field_content: content
  })).join("\\n");
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const F=["Default","CallToActions","IconLinks","InlineNavList","SeeMoreLinks","LinksWithCustomIcons","IconsOnNonLinkElements","MultipleIcons"],U=Object.freeze(Object.defineProperty({__proto__:null,CallToActions:n,Default:a,IconLinks:t,IconsOnNonLinkElements:o,InlineNavList:r,LinksWithCustomIcons:s,MultipleIcons:l,SeeMoreLinks:i,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{U as L};
