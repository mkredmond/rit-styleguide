import { renderRow, rowParagraphObject, rowBackgrounds, rowContent } from '../../templates/Row';

export default {
  title: "Components/Lists",
  argTypes: {
    outer_container_classes: {
      control: "object",
      description: "Array of row classes to generate",
      table: {
        disable: true
      }
    },
    listClass: {
      control: "multi-select",
      options: [
        "list-style-none",
        "columns-2",
        "columns-3",
        "columns-4",
        "columns-4",
        "links-list-with-arrows",
        "links-list",
        "arrows-left",
      ],
      description: "Class to apply to the <ul> element",
      defaultValue: "list-style-none"
    },
    content: {
      control: "text",
      table: {
        disable: true
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};


const Template = ({ listClass, content, ...args }) => {
  const classes = Array.isArray(listClass) ? Array.from(listClass).join(' ') : listClass;
  const dynamicList = `<ul class="${classes}">
    ${content}
  </ul>`;

  const html = {
    ...rowContent,
    field_content: dynamicList
  };

  return rowBackgrounds.map(bg_color =>
    renderRow(
      {
        ...rowParagraphObject,
        field_background_color: { value: bg_color },
      },
      html,
    )
  ).join('\n');
};

export const Default = Template.bind({});
Default.args = {
  listClass: '',
  content: `
    <li>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
  `
};

export const ListsWithCustomIcons = Template.bind({});
ListsWithCustomIcons.args = {
  listClass: 'columns-3',
  content: `
          <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-bullhorn fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#advertising-and-brand-management">Advertising and Brand Management</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-trophy-alt fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#athletics-communications">Athletics Communications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-camera-movie fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#video-production">Video Production</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-paragraph fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#writing-and-design">Writing and Design</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-user-headset fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#event-support">Event Support</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-video far text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#event-video-production">Event Video Production</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-comments-alt fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#strategic-communications">Strategic Communications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-brain fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#marketing-intelligence">Marketing Intelligence</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-newspaper fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#news-and-media-relations">News and Media Relations</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-camera fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#photography">Photography</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-book fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#key-university-publications">Key University Publications</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-hashtag fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#social-media">Social Media</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-hockey-sticks fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#sportszone">SportsZone</a></li>
  <li class="position-relative align-items-baseline d-flex icon-link-wrapper"><span
      class="fa-laptop-code fal text-align-center pl-0" aria-hidden="true"></span><a class="link-with-icon see-more"
      href="#website-and-application-development">Website and Application Development</a></li>
  `
};


export const ProgramsOfStudyListing = ({ listClass = "mb-5 links-list list-style-none columns-3", content, ...args }) => {
  const classes = Array.isArray(listClass) ? Array.from(listClass).join(' ') : listClass;
  const dynamicList = `<ul class="${classes}">
  <li class="views-row pb-3">
    <a href="/study/accounting-bs"> Accounting BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/advertising-and-public-relations-bs"> Advertising and Public Relations BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/applied-arts-and-sciences-aas"> Applied Arts and Sciences AAS </a>
    <a class="pl-1 programs-of-study--online" data-original-title="Also offered online">
      <span aria-hidden="true" class="fas fa-laptop"></span>
    </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/applied-arts-and-sciences-diploma"> Applied Arts and Sciences Diploma </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/applied-mathematics-bs"> Applied Mathematics BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/applied-modern-language-and-culture-bs"> Applied Modern Language and Culture BS </a>
    <ul class="program-options links-list py-1">
      <li class="pb-1">
        <a href="/study/applied-modern-language-and-culture-bs-chinese-option"> Chinese Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/applied-modern-language-and-culture-bs-french-option"> French Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/applied-modern-language-and-culture-bs-japanese-option"> Japanese Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/applied-modern-language-and-culture-bs-spanish-option"> Spanish Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/applied-statistics-and-data-analytics-bs"> Applied Statistics and Data Analytics BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/asl-english-interpretation-bs"> ASL-English Interpretation BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/biochemistry-bs"> Biochemistry BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/bioinformatics-and-computational-biology-bs"> Bioinformatics and Computational Biology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/biology-bs"> Biology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/biomedical-engineering-bs"> Biomedical Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/biomedical-sciences-bs"> Biomedical Sciences BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/biotechnology-and-molecular-bioscience-bs"> Biotechnology and Molecular Bioscience BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/business-exploration"> Business Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/chemical-engineering-bs"> Chemical Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/chemistry-bs"> Chemistry BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/civil-engineering-technology-bs"> Civil Engineering Technology BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/communication-bs"> Communication BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
    <ul class="program-options links-list py-1" style="position: relative; top: -2px;">
      <li class="pb-1">
        <a href="/study/communication-bs-journalism-option"> Journalism Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/community-development-and-inclusive-leadership-bs"> Community Development and Inclusive Leadership BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computer-engineering-bs"> Computer Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
    <ul class="program-options links-list py-1" style="position: relative; top: -2px;">
      <li class="pb-1">
        <a href="/study/computer-engineering-bs-secure-systems-option"> Secure Systems Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computer-engineering-technology-bs"> Computer Engineering Technology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computing-exploration"> Computing Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computing-and-information-technologies-bs"> Computing and Information Technologies BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computational-mathematics-bs"> Computational Mathematics BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/computer-science-bs"> Computer Science BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/criminal-justice-bs"> Criminal Justice BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/cybersecurity-bs"> Cybersecurity BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/deaf-cultural-studies-american-sign-language-certificate"> Deaf Cultural Studies-American Sign Language Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/diagnostic-medical-sonography-ultrasound-certificate"> Diagnostic Medical Sonography (Ultrasound) Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/diagnostic-medical-sonography-ultrasound-bs"> Diagnostic Medical Sonography (Ultrasound) BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/3d-digital-design-bfa"> 3D Digital Design BFA </a>
    <ul class="program-options links-list py-1">
      <li class="pb-1">
        <a href="/study/3d-digital-design-bfa-game-arts-option"> Game Arts Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/3d-digital-design-bfa-3d-visualization-option"> 3D Visualization Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="/study/echocardiography-cardiac-ultrasound-certificate"> Echocardiography (Cardiac Ultrasound) Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/economics-bs"> Economics BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/electrical-engineering-bs"> Electrical Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
    <ul class="program-options links-list py-1" style="position: relative; top: -2px;">
      <li class="pb-1">
        <a href="/study/electrical-engineering-bs-artificial-intelligence-option"> Artificial Intelligence Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/electrical-engineering-bs-clean-and-renewable-energy-option"> Clean and Renewable Energy Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/electrical-engineering-bs-computer-engineering-option"> Computer Engineering Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/electrical-engineering-bs-robotics-option"> Robotics Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/electrical-engineering-technology-bs"> Electrical Engineering Technology BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/engineering-exploration"> Engineering Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/engineering-technology-exploration"> Engineering Technology Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/english-bs"> English BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/environmental-science-bs"> Environmental Science BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/environmental-sustainability-health-and-safety-bs"> Environmental Sustainability, Health and Safety BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/exercise-science-bs"> Exercise Science BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/exercise-science-certificate"> Exercise Science Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/film-and-animation-bfa"> Film and Animation BFA </a>
    <ul class="program-options links-list py-1">
      <li class="pb-1">
        <a href="/study/film-and-animation-bfa-animation-option"> Animation Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/film-and-animation-bfa-production-option"> Production Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="/study/finance-bs"> Finance BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/furniture-design-aos"> Furniture Design AOS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/game-design-and-development-bs"> Game Design and Development BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/global-business-management-bs"> Global Business Management BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/global-public-health-bs"> Global Public Health BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/graphic-design-bfa"> Graphic Design BFA </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/health-systems-administration-certificate"> Health Systems Administration Certificate </a>
    <a class="pl-1 programs-of-study--online" data-original-title="Offered exclusively online">
      <span class="text-white bg-dark d-inline-block rounded-circle online-exclusive-icon">
        <span aria-hidden="true" class="fas fa-laptop"></span>
      </span>
    </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/history-bs"> History BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/hospitality-and-tourism-management-bs"> Hospitality and Tourism Management BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/humanities-computing-and-design-bs"> Humanities, Computing, and Design BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/human-centered-computing-bs"> Human-Centered Computing BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/illustration-bfa"> Illustration BFA </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/imaging-science-bs"> Imaging Science BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/individualized-program-bs"> Individualized Program BS </a>
    <a class="pl-1 programs-of-study--online" data-original-title="Also offered online">
      <span aria-hidden="true" class="fas fa-laptop"></span>
    </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/industrial-design-bfa"> Industrial Design BFA </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/industrial-engineering-bs"> Industrial Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/integrated-electronics-certificate"> Integrated Electronics Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/interior-design-bfa"> Interior Design BFA </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/international-and-global-studies-bs"> International and Global Studies BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/liberal-arts-exploration"> Liberal Arts Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/management-information-systems-mis-bs"> Management Information Systems (MIS) BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/marketing-bs"> Marketing BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/mechanical-engineering-bs"> Mechanical Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
    <ul class="program-options links-list py-1" style="position: relative; top: -2px;">
      <li class="pb-1">
        <a href="/study/mechanical-engineering-bs-aerospace-engineering-option"> Aerospace Engineering Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/mechanical-engineering-bs-automotive-engineering-option"> Automotive Engineering Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/mechanical-engineering-bs-bioengineering-option"> Bioengineering Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/mechanical-engineering-bs-energy-and-environment-option"> Energy and the Environment Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/mechanical-engineering-technology-bs"> Mechanical Engineering Technology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
    <ul class="program-options links-list py-1" style="position: relative; top: -2px;">
      <li class="pb-1">
        <a href="/study/mechanical-engineering-technology-bs-product-design-option"> Product Design Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/mechanical-engineering-technology-bs-robotics-and-automation-option"> Robotics and Automation Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/mechatronics-engineering-technology-bs"> Mechatronics Engineering Technology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/medical-illustration-bfa"> Medical Illustration BFA </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/microelectronic-engineering-bs"> Microelectronic Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/motion-picture-science-bs"> Motion Picture Science BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/museum-studies-bs"> Museum Studies BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/neuroscience-bs"> Neuroscience BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/new-media-design-bfa"> New Media Design BFA </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/new-media-interactive-development-bs"> New Media Interactive Development BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/nutritional-sciences-bs"> Nutritional Sciences BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/organizational-change-and-leadership-certificate"> Organizational Change and Leadership Certificate </a>
    <a class="pl-1 programs-of-study--online" data-original-title="Offered exclusively online">
      <span class="text-white bg-dark d-inline-block rounded-circle online-exclusive-icon">
        <span aria-hidden="true" class="fas fa-laptop"></span>
      </span>
    </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/packaging-science-bs"> Packaging Science BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/performing-arts-certificate"> Performing Arts Certificate </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/philosophy-bs"> Philosophy BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/photographic-arts-and-sciences-exploration"> Photographic Arts and Sciences Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/photographic-and-imaging-arts-bfa"> Photographic and Imaging Arts BFA </a>
    <ul class="program-options links-list py-1">
      <li class="pb-1">
        <a href="/study/photographic-and-imaging-arts-bfa-advertising-photography-option"> Advertising Photography Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/photographic-and-imaging-arts-bfa-fine-art-photography-option"> Fine Art Photography Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/photographic-and-imaging-arts-bfa-photojournalism-option"> Photojournalism Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/photographic-and-imaging-arts-bfa-visual-media-option"> Visual Media Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/photographic-sciences-bs"> Photographic Sciences BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/physics-bs"> Physics BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/physician-assistant-bs-ms"> Physician Assistant BS/MS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees required )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/political-science-bs"> Political Science BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="/study/pre-law"> Pre-Law </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/pre-med-pre-health"> Pre-Med/Pre-Health </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/print-and-graphic-media-technology-bs"> Print and Graphic Media Technology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/psychology-bs"> Psychology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/robotics-and-manufacturing-engineering-technology-bs"> Robotics and Manufacturing Engineering Technology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/sociology-and-anthropology-bs"> Sociology and Anthropology BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/software-engineering-bs"> Software Engineering BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/studio-arts-bfa"> Studio Arts BFA </a>
    <ul class="program-options links-list py-1">
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-ceramics-option"> Ceramics Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-furniture-design-option"> Furniture Design Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-glass-option"> Glass Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-metals-and-jewelry-design-option"> Metals and Jewelry Design Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-painting-option"> Painting Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-printmaking-option"> Printmaking Option </a>
      </li>
      <li class="pb-1">
        <a href="/study/studio-arts-bfa-sculpture-and-expanded-forms-option"> Sculpture and Expanded Forms Option </a>
      </li>
    </ul>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/studio-arts-exploration"> Studio Arts Exploration </a>
  </li>
  <li class="views-row pb-3">
    <a href="/study/supply-chain-management-bs"> Supply Chain Management BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/web-and-mobile-computing-bs"> Web and Mobile Computing BS </a>
  </li>
  <li class="views-row pb-3">
    <a href="https://www.rit.edu/study/womens-gender-and-sexuality-studies-bs"> Women’s, Gender, and Sexuality Studies BS </a>
    <br>
    <small class="text-muted" style="position:relative; top:-2px;">( Accelerated Bachelor’s/Master’s Degrees available )</small>
  </li>
    </ul>`;

  const html = {
    ...rowContent,
    field_content: dynamicList
  };

  return renderRow(
    {
      ...rowParagraphObject,
      field_background_color: { value: "has_white_background" },
    },
    html,
  );
};
