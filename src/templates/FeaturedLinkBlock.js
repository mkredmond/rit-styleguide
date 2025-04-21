export function FeaturedLinkBlock(title, description, links = [], callToAction = []) {
  return `
      <div class="card featured-links-block">
          <div class="card-body px-0 mb-4 mb-lg-0">
              <p class="card-title h2 mb-0 mr-5 font-weight-normal text-neutral-cool-gray-dark">
                  ${title}
              </p>
              <div class="card-text">
                  <hr class="divider mx-0 my-4 border-0"/>
                  <div class="small">
                      ${description}
                  </div>
                  <div class="mt-4">
                      ${links.map(link => `
                          <div class="field__item mb-3">
                              <a href="${link.url}" class="links-list">
                                  <span class="font-weight-bold">${link.title}</span>
                              </a>
                          </div>
                      `).join('')}
                  </div>
              </div>
              <div class="call-to-action mt-4">
                  ${callToAction.map(cta => `
                      <a href="${cta.url}" class="d-block font-weight-bold call-to-action">
                          ${cta.title}
                          ${cta.title.toLowerCase() === "read more" || cta.title.toLowerCase() === "learn more" ? `
                              <span class="sr-only"> about ${title}</span>
                          ` : ''}
                      </a>
                  `).join('')}
              </div>
          </div>
      </div>
  `;
}