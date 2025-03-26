function Q(e,c,l={},i={},f=!1){var h,$,w,b,y,k,A,T,C,I,S,j,L,H,M,P;const O=((h=e.id)==null?void 0:h.value)||"";l.class=l.class||[],l.class=Array.isArray(l.class)?l.class:[l.class],l.class=[...l.class,"card","image-card",`image-card-${O}`];const V=z(l),q=!!(($=e.field_enable_lightbox)!=null&&$.value),B=!!((w=e.field_overlapping_title)!=null&&w.value);let o="",a="",s="",d="",g="";switch(((b=e.field_image_placement)==null?void 0:b.value)||""){case"above":o="flex-column",s="mt-4",d="px-3";break;case"below":o="flex-column flex-column-reverse",a="mt-4",s="",d="px-3";break;case"left":o="flex-row left",a="col-12 col-xl-7",s="col-12 col-xl-5 mt-4 mt-xl-0",d="px-0",f||(a="col-12 col-md-6",s="col-12 col-md-6 mt-4 mt-md-0");break;case"right":o="flex-row flex-row-reverse right",a="col-12 col-xl-7",s="col-12 col-xl-5 mt-4 mt-xl-0",d="px-0",f||(a="col-12 col-md-6",s="col-12 col-md-6 mt-4 mt-md-0");break;case"full":o="text-overlay",a="col-12",s="container-md py-4 py-md-5",g="col-md-5 col-lg-4",d="px-md-0";break}const D=((y=e.field_image)==null?void 0:y.width)||1,E=(((k=e.field_image)==null?void 0:k.height)||1)/D*100,t=((A=e.field_link)==null?void 0:A.url)||"",_=((T=e.field_image)==null?void 0:T.alt)||"",p=((C=e.field_title)==null?void 0:C.value)||"",u=c.field_title||"",F=c.field_description||"";let v=!1,x=!1;if((I=e.field_link)!=null&&I.value){const m=t.toString();(m.includes("youtube.com/embed")||m.includes("youtube.com/watch")||m.includes("youtu.be/"))&&(v=!0),m.includes("vimeo.com/")&&(x=!0)}const r=v||x,n=((S=e.field_lightbox_caption)==null?void 0:S.value)||"";!!((j=e.field_add_image_frame)!=null&&j.value)&&(a+=" person-frame-2"),i.class=i.class||[],i.class=Array.isArray(i.class)?i.class:[i.class],i.class=[...i.class,"h5","card-title","mb-2"];const G=z(i);return`
      <div ${V}>      
        <div class="card-body ${d} d-flex row ${o} ${B?"overlapping-title":""}">
          <div class="image-card--image ${a} d-inline-flex w-100">
            <div class="position-relative card-img-con img-responsive w-100 allow-native-height ${r?"playable":""}" style="padding-bottom: ${E}%">
              <div class="position-relative">
                ${t?`<a href="${t}" class="d-block card-link position-relative card-img-con w-100" ${r?'data-toggle="lightbox" data-width="1000"':""} ${n?`data-footer="${n}"`:""}>`:""}
                <img class="card-img-top lazy-io" src="${((H=(L=e.field_image)==null?void 0:L.entity)==null?void 0:H.fileuri)||"https://picsum.photos/600/400"}" alt="${_}" />
                ${t?`${r?`<span aria-label="Play Video${p?": "+u:""}" class="fa fa-play position-absolute text-white" aria-hidden="true"></span>`:""}
                  </a>`:""}
                ${q?`<a class="lightbox-expand" aria-label="magnifying glass icon to expand the image of ${_}" href="${((P=(M=e.field_image)==null?void 0:M.entity)==null?void 0:P.fileuri)||""}" data-toggle="lightbox" ${n?`data-footer="${n}"`:""}>
                    <span class="fal fa-search-plus" aria-hidden="true"></span>
                  </a>`:""}
              </div>
            </div>
          </div>
          <div class="image-card--text ${s}">
          ${p?`<p ${G}>
            ${t?`<a href="${t}" class="fa fa-angle-right icon-after">`:""}${u}${t?"</a>":""}
            </p>`:""}
            <div class="card-text ${g}">
              ${F}
            </div>
          </div>
        </div>
      </div>
    `}const R={id:{value:"123"},field_image:{width:1200,height:630,alt:"Sample image description",entity:{fileuri:"https://www-staging.rit.edu/sites/rit.edu/files/images/paragraph/image-card/graduate-p-social.jpg"}},field_image_placement:{value:"left"},field_title:{value:"Sample Image Card Title"},field_description:{value:"<p>This is a sample description for the image card. It can contain HTML markup.</p>"},field_link:{url:"https://www.example.com",value:!0},field_enable_lightbox:{value:!0},field_overlapping_title:{value:!1},field_lightbox_caption:{value:"This is a lightbox caption"},field_add_image_frame:{value:!1}},U={field_title:["Sample Image Card Title"],field_description:["<p>This is a sample description for the image card. It can contain HTML markup.</p>"]};function z(e){return Object.entries(e).map(([c,l])=>c==="class"&&Array.isArray(l)?`${c}="${l.join(" ")}"`:`${c}="${l}"`).join(" ")}export{R as a,U as i,Q as r};
