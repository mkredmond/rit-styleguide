function Q(e,P={},v="",r={}){var x,j,C,p,S,M,T,O,R,z,A,F,U,B,E,I,L,N;const _={...r};let l=["page-row","position-relative"];r.class&&(l=l.concat(r.class.split(" "))),((x=e.field_no_bottom_border)==null?void 0:x.value)===!0?l.push("border-bottom-0"):l.push("border-bottom");const a=(j=e.field_background_color)==null?void 0:j.value;a==="has_white_background"?l.push("bg-white"):a==="has_gray_background"?l.push("bg-light"):a==="has_primary_background"?l.push("bg-primary","text-white"):a==="has_black_background"&&l.push("bg-black","text-white");let o="position-relative content-row--container",b="";((C=e.field_no_container_until_xxl_wid)==null?void 0:C.value)===!0?o+=" container-xxl":o+=" container",((p=e.field_no_top_spacing)==null?void 0:p.value)===!0?o+=" pt-0":o+=" pt-5",((S=e.field_no_bottom_spacing)==null?void 0:S.value)===!0?o+=" pb-0":o+=" pb-md-6 pb-5",(M=e.field_outer_container_class)!=null&&M.value&&l.push(e.field_outer_container_class.value),(T=e.field_inner_container_class)!=null&&T.value&&(b+=" "+e.field_inner_container_class.value);let i=((O=e.field_row_title)==null?void 0:O.value)||"",c=((R=e.field_row_title_sr_only)==null?void 0:R.value)||"",n="",f="";c&&(c=`<span class="sr-only"> ${c}</span>`),!i&&((z=e.field_menu_title)!=null&&z.value)?(i=" ",n+=" mb-0"):n+=" mb-5 mt-3";let w=i;(A=e.field_menu_title)!=null&&A.value&&(e.field_menu_title.value.trim()==="<none>"?n+=" no-menu-title":w=e.field_menu_title.value);let g="row";((F=e.field_no_gutters)==null?void 0:F.value)===!0&&(g+=" no-gutters"),(U=e.field_row_title_icon_class)!=null&&U.value&&(f=`<span class="${e.field_row_title_icon_class.value}"></span>`,l.push("row-header-icon"));const u=(B=e.field_background_image)==null?void 0:B.value;let k=0;u&&e.field_background_image.length>0&&(k=Math.floor(Math.random()*e.field_background_image.length),l.push("has-background-image"),n+=" text-white"),((E=e.field_hide_row_title_except_sr)==null?void 0:E.value)===!0&&(n+=" sr-only sr-only-focusable");const h=t=>(t==null?void 0:t.toString().toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""))||"";let $=h(w);(I=e.row_title_id)!=null&&I.value&&($=h(e.row_title_id.value));let m="";if(u){const t=e.field_background_image[k].entity.fileuri,s=t+"?style=full_width_bg_sm",d=e.field_background_image.alt||"";m=`
       <div class="background-image position-absolute w-100 h-100">
         <picture>
           <source media="(max-width: 767px)" srcset="data:,x" data-srcset="${s}" class="lazy-io">
           <img src="data:," data-src="${t}" class="carousel-image w-100 h-100 lazy-io" alt="${d}">
         </picture>
       </div>
     `}let q=`
    ${i?`<a class="row--title--anchor d-block position-relative invisible" id="${$}" role="button"></a>`:""}
    ${u&&((L=e.field_background_image_always_fu)==null?void 0:L.value)===!0?m:""}
    <div class="${o}">
      ${u&&((N=e.field_background_image_always_fu)==null?void 0:N.value)!==!0?m:""}
      <div class="page-columns ${b}">
        ${i?`
            ${f?`<div class="row-title-icon mb-n2">${f}</div>`:""}
            ${(i.trim().length>0?"<h2":"<div")+` class="row--title position-relative text-center ${n}">${i}${c}</`+(i.trim().length>0?"h2>":"div>")}
          `:""}
        <div class="${g}">
  `,D=`
        </div>
      </div>
    </div>
  `,y="";return y+=H(((t,s)=>{const d={...t};return s.forEach(G=>{delete d[G]}),d})(P,["field_row_title","field_menu_title"])),_.class=l.join(" ").replace(/\s+/g," ").trim(),v&&(_.class+=" "+v),_.class=_.class.replace("paragraph--unpublished",""),`
    <div ${Object.entries(_).map(([t,s])=>`${t}="${s}"`).join(" ")}>
      ${q}
        ${y}
      ${D}
    </div>
  `}const V={field_no_bottom_border:{value:!1},field_background_color:{value:"has_white_background"},field_disable_scroll_reveal:{value:!1},field_no_container_until_xxl_wid:{value:!1},field_no_top_spacing:{value:!1},field_no_bottom_spacing:{value:!1},field_outer_container_class:{value:"custom-outer-class"},field_inner_container_class:{value:"custom-inner-class"},field_row_title:{value:"Sample Row Title"},field_row_title_sr_only:{value:"Screen reader only text"},field_hide_row_title_except_sr:{value:!1},row_title_id:{value:"custom-row-id"},field_menu_title:{value:"Menu Navigation Title"},field_no_gutters:{value:!1},field_row_title_icon_class:{value:""},field_background_image:[{entity:{fileuri:"https://example.com/images/background1.jpg"}},{entity:{fileuri:"https://example.com/images/background2.jpg"}}],field_background_image_always_fu:{value:!1}},W={field_row_title:"<h2>Row Title (will be filtered out)</h2>",field_menu_title:"<div>Menu Title (will be filtered out)</div>",field_content:'<div class="col-md-6"><p>Column 1 content goes here</p></div>'},X=["has_white_background","has_gray_background","has_primary_background","has_black_background"];function H(e){return Object.values(e).join("")}export{Q as a,W as b,V as c,X as r};
