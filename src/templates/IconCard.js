export function IconCard(content, link, icons = []) {
  const hasIcon = icons.length > 0;

  return `
      <div class="card icon-card">
  <div class="card-body px-0 text-center text-sm-left">
          ${link ? `<a href="${link}" class="d-block">` : ''}
              ${hasIcon ? `
                  <span class="card-title mb-1 mt-3 font-weight-normal d-block icon-card--icons">
                      ${icons.map((icon, key) => `
                          <span class="${icon}${key === 1 ? ' pl-2' : ''}"></span>
                      `).join('')}
                  </span>
              ` : ''}
              <span class="d-block card-text pt-3${hasIcon ? ' mb-3' : ''}">
                  <hr class="divider mx-auto mx-sm-0 mt-0 mb-3"/>
                  ${content}
              </span>
          ${link ? `</a>` : ''}
      </div>
      </div>
  `;
}