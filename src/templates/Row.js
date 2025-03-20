/**
 * Renders a content row similar to the content-row.html.twig template
 * @param {Object} params - Parameters for rendering the content row
 * @returns {string} HTML markup for the content row
 */

export function renderRow(
  paragraph,
  content = {},
  classes = "",
  attributes = {},
  is_restricted = false,
  parent_is_paragraph = false,
  has_sidebar_progress_nav = false,
  has_none_left_aligned_progress_nav = false
) {
  // Clone attributes to avoid mutation of the original
  const finalAttributes = { ...attributes };

  // Add default classes
  let attributeClasses = ["page-row", "position-relative"];
  if (attributes.class) {
    attributeClasses = attributeClasses.concat(attributes.class.split(" "));
  }

  // Process restrictions
  const restricted = is_restricted;

  // Bottom border logic
  if (paragraph.field_no_bottom_border?.value === true) {
    attributeClasses.push("border-bottom-0");
  } else {
    attributeClasses.push("border-bottom");
  }

  // Background color logic
  const bgColor = paragraph.field_background_color?.value;
  if (bgColor === "has_white_background") {
    attributeClasses.push("bg-white");
  } else if (bgColor === "has_gray_background") {
    attributeClasses.push("bg-light");
  } else if (bgColor === "has_primary_background") {
    attributeClasses.push("bg-primary", "text-white");
  } else if (bgColor === "has_black_background") {
    attributeClasses.push("bg-black", "text-white");
  }

  // Container classes
  let container_classes = "position-relative content-row--container";

  if (
    paragraph.field_disable_scroll_reveal?.value === false &&
    !parent_is_paragraph
  ) {
    container_classes += " scrollreveal-item";
  }

  let outer_container_classes = "";
  let inner_container_classes = "";

  // Container sizing logic
  if (!has_sidebar_progress_nav) {
    if (paragraph.field_no_container_until_xxl_wid?.value === true) {
      container_classes += " container-xxl";
    } else {
      container_classes += " container";
    }
  }

  // Top spacing logic
  if (paragraph.field_no_top_spacing?.value === true) {
    container_classes += " pt-0";
  } else {
    if (has_sidebar_progress_nav) {
      container_classes += " content-row--mt";
    } else {
      container_classes += " pt-5";
    }
  }

  // Bottom spacing logic
  if (paragraph.field_no_bottom_spacing?.value === true) {
    container_classes += " pb-0";
  } else {
    if (has_sidebar_progress_nav) {
      container_classes += " content-row--mb";
    } else {
      container_classes += " pb-md-6 pb-5";
    }
  }

  // Custom container classes
  if (paragraph.field_outer_container_class?.value) {
    attributeClasses.push(paragraph.field_outer_container_class.value);
  }

  if (paragraph.field_inner_container_class?.value) {
    inner_container_classes +=
      " " + paragraph.field_inner_container_class.value;
  }

  // Row title configuration
  let row_title = paragraph.field_row_title?.value || "";
  let row_title_sr_only = paragraph.field_row_title_sr_only?.value || "";
  let row_title_classes = "";
  let row_title_icon = "";

  if (row_title_sr_only) {
    row_title_sr_only = `<span class="sr-only"> ${row_title_sr_only}</span>`;
  }

  if (!row_title && paragraph.field_menu_title?.value) {
    row_title = " ";
    row_title_classes += " mb-0";
  } else {
    if (has_sidebar_progress_nav) {
      row_title_classes += " mb-4";
    } else {
      row_title_classes += " mb-5 mt-3";
    }
  }

  // Menu title logic
  let row_menu_title = row_title;
  if (paragraph.field_menu_title?.value) {
    if (paragraph.field_menu_title.value.trim() === "<none>") {
      row_title_classes += " no-menu-title";
    } else {
      row_menu_title = paragraph.field_menu_title.value;
    }
  }

  // Row classes
  let row_classes = "row";
  if (paragraph.field_no_gutters?.value === true) {
    row_classes += " no-gutters";
  }

  // Row title icon
  if (paragraph.field_row_title_icon_class?.value) {
    row_title_icon = `<span class="${paragraph.field_row_title_icon_class.value}"></span>`;
    attributeClasses.push("row-header-icon");
  }

  // Background image
  const has_background_image = paragraph.field_background_image?.value;
  let random_image = 0;

  if (has_background_image && paragraph.field_background_image.length > 0) {
    random_image = Math.floor(
      Math.random() * paragraph.field_background_image.length
    );
    attributeClasses.push("has-background-image");
    row_title_classes += " text-white";
  }

  // Handle title visibility
  if (paragraph.field_hide_row_title_except_sr?.value === true) {
    row_title_classes += " sr-only sr-only-focusable";
  }

  // Create ID for the row title
  const cleanId = (str) => {
    return (
      str
        ?.toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "") || ""
    );
  };

  let row_title_id = cleanId(row_menu_title);
  if (paragraph.row_title_id?.value) {
    row_title_id = cleanId(paragraph.row_title_id.value);
  }

  // Generate background image markup
  let background_image = "";
  if (has_background_image) {
    const imageUrl =
      paragraph.field_background_image[random_image].entity.fileuri;
    const imageUrlSm = imageUrl + "?style=full_width_bg_sm"; // Simplified style application
    const imageAlt = paragraph.field_background_image.alt || "";

    background_image = `
       <div class="background-image position-absolute w-100 h-100">
         <picture>
           <source media="(max-width: 767px)" srcset="data:,x" data-srcset="${imageUrlSm}" class="lazy-io">
           <img src="data:," data-src="${imageUrl}" class="carousel-image w-100 h-100 lazy-io" alt="${imageAlt}">
         </picture>
       </div>
     `;
  }

  // Generate content structure
  let content_start = "";
  let content_end = "";

  if (has_sidebar_progress_nav) {
    content_start = `
       ${
         row_title
           ? `<a class="row--title--anchor d-block position-relative invisible" id="${row_title_id}" role="button"></a>`
           : ""
       }
       ${
         has_background_image &&
         paragraph.field_background_image_always_fu?.value === true
           ? background_image
           : ""
       }
       <div class="${container_classes}">
         ${
           has_background_image &&
           paragraph.field_background_image_always_fu?.value !== true
             ? background_image
             : ""
         }
         <div class="page-columns ${inner_container_classes}">
           ${
             row_title
               ? `
             ${
               row_title_icon
                 ? `<div class="row-title-icon mb-n2">${row_title_icon}</div>`
                 : ""
             }
             ${
               (row_title.trim().length > 0 ? "<h2" : "<div") +
               ` class="row--title ${row_title_classes}">${row_title}${row_title_sr_only}</` +
               (row_title.trim().length > 0 ? "h2>" : "div>")
             }
           `
               : ""
           }
           <div class="${row_classes}">
     `;

    content_end = `
           </div>
         </div>
       </div>
     `;
  } else {
    content_start = `
       ${
         has_none_left_aligned_progress_nav
           ? '<div class="row"><div class="col-md-10 col-lg-8 col-xl-7 mx-auto mw-900">'
           : ""
       }
       
       ${
         row_title
           ? `<a class="row--title--anchor d-block position-relative invisible" id="${row_title_id}" role="button"></a>`
           : ""
       }
       ${
         has_background_image &&
         paragraph.field_background_image_always_fu?.value === true
           ? background_image
           : ""
       }
       <div class="${container_classes}">
         ${
           has_background_image &&
           paragraph.field_background_image_always_fu?.value !== true
             ? background_image
             : ""
         }
         <div class="page-columns ${inner_container_classes}">
           ${
             row_title
               ? `
             ${
               row_title_icon
                 ? `<div class="row-title-icon mb-n2">${row_title_icon}</div>`
                 : ""
             }
             ${
               (row_title.trim().length > 0 ? "<h2" : "<div") +
               ` class="row--title position-relative text-center ${row_title_classes}">${row_title}${row_title_sr_only}</` +
               (row_title.trim().length > 0 ? "h2>" : "div>")
             }
           `
               : ""
           }
           <div class="${row_classes}">
     `;

    content_end = `
           </div>
         </div>
       </div>
       
       ${has_none_left_aligned_progress_nav ? "</div></div>" : ""}
     `;
  }

  // Process content blocks
  let content_inner = "";

  // Helper function to filter content
  const withoutFields = (content, fieldsToRemove) => {
    const filteredContent = { ...content };
    fieldsToRemove.forEach((field) => {
      delete filteredContent[field];
    });
    return filteredContent;
  };

  if (has_sidebar_progress_nav) {
    content_inner += renderContent(
      withoutFields(content, ["field_row_title", "field_menu_title"])
    );
  } else {
    content_inner += renderContent(
      withoutFields(content, ["field_row_title", "field_menu_title"])
    );
  }

  // Combine attribute classes
  finalAttributes.class = attributeClasses
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (classes) {
    finalAttributes.class += " " + classes;
  }
  finalAttributes.class = finalAttributes.class.replace(
    "paragraph--unpublished",
    ""
  );

  // Convert attributes object to string
  const attrsString = Object.entries(finalAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  // Generate the final HTML markup
  return `
     <div ${attrsString}>
       ${content_start}
         ${content_inner}
       ${content_end}
     </div>
   `;
}

export const rowParagraphObject = {
  // Bottom border control
  field_no_bottom_border: {
    value: false,
  },

  // Background color options
  field_background_color: {
    value: "has_white_background", // Options: has_white_background, has_gray_background, has_primary_background, has_black_background
  },

  // Scroll reveal control
  field_disable_scroll_reveal: {
    value: false,
  },

  // Container sizing control
  field_no_container_until_xxl_wid: {
    value: false,
  },

  // Spacing controls
  field_no_top_spacing: {
    value: false,
  },
  field_no_bottom_spacing: {
    value: false,
  },

  // Custom container classes
  field_outer_container_class: {
    value: "custom-outer-class",
  },
  field_inner_container_class: {
    value: "custom-inner-class",
  },

  // Row title information
  field_row_title: {
    value: "Sample Row Title",
  },
  field_row_title_sr_only: {
    value: "Screen reader only text",
  },
  field_hide_row_title_except_sr: {
    value: false,
  },
  row_title_id: {
    value: "custom-row-id",
  },

  // Menu title (optional override for navigation)
  field_menu_title: {
    value: "Menu Navigation Title",
  },

  // Row layout controls
  field_no_gutters: {
    value: false,
  },

  // Row title icon
  field_row_title_icon_class: {
    value: "fas fa-star",
  },

  // Background image
  field_background_image: [
    {
      entity: {
        fileuri: "https://example.com/images/background1.jpg",
      },
    },
    {
      entity: {
        fileuri: "https://example.com/images/background2.jpg",
      },
    },
  ],
  field_background_image_always_fu: {
    value: false,
  },
};

// HTML attributes
export const rowAttributes = {
  id: "content-row-123",
  class: "existing-class another-class",
  "data-section": "sample-section",
};

// Content to render within the row
export const rowContent = {
  field_row_title: "<h2>Row Title (will be filtered out)</h2>",
  field_menu_title: "<div>Menu Title (will be filtered out)</div>",
  field_content:
    '<div class="col-md-6"><p>Column 1 content goes here</p></div>',
};

export const rowBackgrounds = [
   "has_white_background",
   "has_gray_background",
   "has_primary_background",
   "has_black_background",
 ];

/**
 * Helper function to render content
 * This is a simplified version - in practice would need implementation based on content structure
 * @param {Object} content
 * @returns {string}
 */
function renderContent(content) {
  return Object.values(content).join("");
}
