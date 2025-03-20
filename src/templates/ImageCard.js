/**
 * Renders an image card with the same markup as the Twig template
 * 
 * @param {Object} paragraph - The paragraph entity with fields
 * @param {Object} content - The rendered content
 * @param {Object} attributes - HTML attributes
 * @param {Object} title_attributes - Title HTML attributes
 * @param {Boolean} has_sidebar_progress_nav - Whether there's a sidebar progress nav
 * @returns {String} HTML markup for the image card
 */
export function renderImageCard(paragraph, content, attributes = {}, title_attributes = {}, has_sidebar_progress_nav = false) {
    // Set up attributes
    const paragraphId = paragraph.id?.value || '';
    attributes.class = attributes.class || [];
    attributes.class = Array.isArray(attributes.class) ? attributes.class : [attributes.class];
    attributes.class = [...attributes.class, 'card', 'image-card', `image-card-${paragraphId}`];
    
    const attributesString = renderAttributes(attributes);
    
    // Convert Twig variables
    const enableLightbox = paragraph.field_enable_lightbox?.value ? true : false;
    const overlappingTitle = paragraph.field_overlapping_title?.value ? true : false;
    
    // Handle placement classes
    let flex_classes = '';
    let img_classes = '';
    let text_classes = '';
    let row_padding_classes = '';
    let sub_text_classes = '';
    
    const placement = paragraph.field_image_placement?.value || '';
    
    switch (placement) {
      case 'above':
        flex_classes = 'flex-column';
        // img_classes = 'w-100';
        text_classes = 'mt-4';
        row_padding_classes = 'px-3';
        break;
      case 'below':
        flex_classes = 'flex-column flex-column-reverse';
        img_classes = 'mt-4';
        text_classes = '';
        row_padding_classes = 'px-3';
        break;
      case 'left':
        flex_classes = 'flex-row left';
        img_classes = 'col-12 col-xl-7';
        text_classes = 'col-12 col-xl-5 mt-4 mt-xl-0';
        row_padding_classes = 'px-0';
        if (!has_sidebar_progress_nav) {
          img_classes = 'col-12 col-md-6';
          text_classes = 'col-12 col-md-6 mt-4 mt-md-0';
        }
        break;
      case 'right':
        flex_classes = 'flex-row flex-row-reverse right';
        img_classes = 'col-12 col-xl-7';
        text_classes = 'col-12 col-xl-5 mt-4 mt-xl-0';
        row_padding_classes = 'px-0';
        if (!has_sidebar_progress_nav) {
          img_classes = 'col-12 col-md-6';
          text_classes = 'col-12 col-md-6 mt-4 mt-md-0';
        }
        break;
      case 'full':
        flex_classes = 'text-overlay';
        img_classes = 'col-12';
        text_classes = 'container-md py-4 py-md-5';
        sub_text_classes = 'col-md-5 col-lg-4';
        row_padding_classes = 'px-md-0';
        break;
    }
    
    // Image dimensions and padding
    const image_width = paragraph.field_image?.width || 1;
    const image_height = paragraph.field_image?.height || 1;
    const padding_bottom = (image_height / image_width) * 100;
    
    // Get field values
    const field_link_url = paragraph.field_link?.url || '';
    const field_image_alt = paragraph.field_image?.alt || '';
    const field_title_value = paragraph.field_title?.value || '';
    const field_title_content = content.field_title || '';
    const field_description_content = content.field_description || '';
    
    // Check for video links
    let is_youtube = false;
    let is_vimeo = false;
    
    if (paragraph.field_link?.value) {
      const link = field_link_url.toString();
      if (link.includes("youtube.com/embed") || link.includes("youtube.com/watch") || link.includes("youtu.be/")) {
        is_youtube = true;
      }
      if (link.includes("vimeo.com/")) {
        is_vimeo = true;
      }
    }
    
    const is_streaming_video = is_youtube || is_vimeo;
    const lightbox_caption = paragraph.field_lightbox_caption?.value || '';
    
    // Image frame
    const add_image_frame = paragraph.field_add_image_frame?.value ? true : false;
    if (add_image_frame) {
      img_classes += ' person-frame-2';
    }
  
    // File URL function equivalent (would need to be replaced with actual implementation)
    const file_url = (uri) => uri;
    
    // Title attributes
    title_attributes.class = title_attributes.class || [];
    title_attributes.class = Array.isArray(title_attributes.class) ? title_attributes.class : [title_attributes.class];
    title_attributes.class = [...title_attributes.class, 'h5', 'card-title', 'mb-2'];
    const titleAttributesString = renderAttributes(title_attributes);
  
    // Build HTML template
    return `
      <div ${attributesString}>      
        <div class="card-body ${row_padding_classes} d-flex row ${flex_classes} ${overlappingTitle ? 'overlapping-title' : ''}">
          <div class="image-card--image ${img_classes} d-inline-flex w-100">
            <div class="position-relative card-img-con img-responsive w-100 allow-native-height ${is_streaming_video ? 'playable' : ''}" style="padding-bottom: ${padding_bottom}%">
              <div class="position-relative">
                ${field_link_url ? 
                  `<a href="${field_link_url}" class="d-block card-link position-relative card-img-con w-100" ${is_streaming_video ? 'data-toggle="lightbox" data-width="1000"' : ''} ${lightbox_caption ? `data-footer="${lightbox_caption}"` : ''}>` : ''}
                <img class="card-img-top lazy-io" src="${paragraph.field_image?.entity?.fileuri || 'https://picsum.photos/600/400'}" alt="${field_image_alt}" />
                ${field_link_url ? 
                  `${is_streaming_video ? 
                    `<span aria-label="Play Video${field_title_value ? ': ' + field_title_content : ''}" class="fa fa-play position-absolute text-white" aria-hidden="true"></span>` : ''}
                  </a>` : ''}
                ${enableLightbox ? 
                  `<a class="lightbox-expand" aria-label="magnifying glass icon to expand the image of ${field_image_alt}" href="${paragraph.field_image?.entity?.fileuri || ''}" data-toggle="lightbox" ${lightbox_caption ? `data-footer="${lightbox_caption}"` : ''}>
                    <span class="fal fa-search-plus" aria-hidden="true"></span>
                  </a>` : ''}
              </div>
            </div>
          </div>
          <div class="image-card--text ${text_classes}">
            ${field_link_url && field_title_value ? 
              `<a href="${field_link_url}" class="d-block card-link">` : ''}
            ${field_title_value ? 
              `<p ${titleAttributesString}>
                ${field_title_content}
              </p>` : ''}
            ${field_link_url && field_title_value ? 
              `</a>` : ''}
            <div class="card-text ${sub_text_classes}">
              ${field_description_content}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  

export const imageCardParagraph = {
   // Basic paragraph info
   id: {
     value: '123'
   },
   
   // Image card fields
   field_image: {
     width: 1200,
     height: 630,
     alt: 'Sample image description',
     entity: {
       fileuri: 'https://www-staging.rit.edu/sites/rit.edu/files/images/paragraph/image-card/graduate-p-social.jpg'
     }
   },
   
   field_image_placement: {
     value: 'left' // Options: 'above', 'below', 'left', 'right', 'full'
   },
   
   field_title: {
     value: 'Sample Image Card Title'
   },
   
   field_description: {
     value: '<p>This is a sample description for the image card. It can contain HTML markup.</p>'
   },
   
   field_link: {
     url: 'https://www.example.com',
     value: true
   },
   
   field_enable_lightbox: {
     value: true
   },
   
   field_overlapping_title: {
     value: false
   },
   
   field_lightbox_caption: {
     value: 'This is a lightbox caption'
   },
   
   field_add_image_frame: {
     value: false
   }
 };
 
export const imageCardContent = {
  field_title: [
    'Sample Image Card Title'
  ],
  field_description: [
    '<p>This is a sample description for the image card. It can contain HTML markup.</p>'
  ]
};

/**
 * Helper function to render HTML attributes
 * 
 * @param {Object} attributes - HTML attributes object
 * @returns {String} Rendered attributes string
 */
function renderAttributes(attributes) {
return Object.entries(attributes).map(([key, value]) => {
    if (key === 'class' && Array.isArray(value)) {
    return `${key}="${value.join(' ')}"`;
    }
    return `${key}="${value}"`;
}).join(' ');
}
  