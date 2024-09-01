/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { d as $$H2ProjectTitle, b as $$ProjectLayoutLinks, c as $$Layout } from './a3_ec561d33.mjs';
/* empty css                             */import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';
/* empty css                             *//* empty css                             */
const $$Astro$1 = createAstro();
const $$ProjectLayoutHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayoutHead;
  const { project, projectTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative col-start-2 col-span-10 h-fit">${renderComponent($$result, "H2ProjectTitle", $$H2ProjectTitle, { "text": project?.data.projectTitle || projectTitle, "class": "italic text-2xl font-bold clr-brand-blue" })}<p class="py-4">${project?.data.projectSubtitle}</p></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout-Head.astro", void 0);

const $$Astro = createAstro();
const $$Roadmap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Roadmap;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rafael Hirashiki's Career RoadMap", "data-astro-cid-khueswxm": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLayoutLinks", $$ProjectLayoutLinks, { "road": true, "data-astro-cid-khueswxm": true })}${renderComponent($$result2, "ProjectLayouHead", $$ProjectLayoutHead, { "projectTitle": "Rafael's Career RoadMap", "data-astro-cid-khueswxm": true })}${maybeRenderHead()}<div class="col-start-2 col-span-5 text-right relative -right-4 max-md:col-span-10" data-astro-cid-khueswxm><div class="relative flex flex-col h-fit" data-astro-cid-khueswxm><div class="bar blue-bar" data-astro-cid-khueswxm></div><p class="grid-item-ball" data-astro-cid-khueswxm>
Acupuncture <br data-astro-cid-khueswxm>Game Design Video Editing<br data-astro-cid-khueswxm>VFX Design<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball" data-astro-cid-khueswxm>
Frontend Web<br data-astro-cid-khueswxm>Development<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball" data-astro-cid-khueswxm>
HTML5/CSS3<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Github Basics<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>Sass<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>JS<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
React • Material UI • Firebase <i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Next.js • MongoDB • Vercel<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball" data-astro-cid-khueswxm>
Frontend Engineer (Junior)<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball" data-astro-cid-khueswxm>JQuery<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
PHP Symfony<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>MVC Models<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
EC-CUBE: e-commerce solution<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>Wordpress<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Github branching and version control<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Local, Test and Production environments<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Docker Containers<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Page Speed Performance<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
AB Test with VWO<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball" data-astro-cid-khueswxm>
Level up Frontend <br data-astro-cid-khueswxm>Basics of Backend <br data-astro-cid-khueswxm>Basic of Systems
<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball" data-astro-cid-khueswxm>
Astro • TailWind • Typescript<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Cypress End-to-End Testing<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Jest Unit Testing<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Laravel<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><br data-astro-cid-khueswxm><br data-astro-cid-khueswxm><p class="grid-item-ball clr-brand-blue" data-astro-cid-khueswxm>
API: Backend with Nest.js + Typescript<br data-astro-cid-khueswxm>Redis, Jest, JWT, Insomnia, MongoDB<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball clr-brand-blue" data-astro-cid-khueswxm>
Go • HTMX<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball clr-brand-blue" data-astro-cid-khueswxm>
Full Stack Web Project: Astro.js, HTMX • Go<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p></div><div class="relative" data-astro-cid-khueswxm><div class="bar black-bar-blue" data-astro-cid-khueswxm></div><br data-astro-cid-khueswxm><br data-astro-cid-khueswxm><h3 class="grid-item-ball ball-black" data-astro-cid-khueswxm>
Data: Python<br data-astro-cid-khueswxm>Mobile: Dart • Flutter<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><h3 class="grid-item-ball ball-black" data-astro-cid-khueswxm>
Mid Full Stack & Systems Engineer
<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball ball-black" data-astro-cid-khueswxm>
???<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball ball-black" data-astro-cid-khueswxm>
???<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball ball-black" data-astro-cid-khueswxm>
???<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p></div></div><div class="col-span-1 text-center max-md:col-start-11 max-md:col-span-2 max-sm:col-start-11" data-astro-cid-khueswxm><p class="" data-astro-cid-khueswxm>~2022</p><p class="pt-24" data-astro-cid-khueswxm>2022</p><p class="pt-64" data-astro-cid-khueswxm>2023</p><p class="pt-96" data-astro-cid-khueswxm>2024</p><p class="pt-72" data-astro-cid-khueswxm>2025</p></div><div class="hidden max-md:block max-md:col-start-1 text-center max-md:col-span-2" data-astro-cid-khueswxm><p class="pt-4" data-astro-cid-khueswxm>2023</p><p class="pt-96" data-astro-cid-khueswxm>2024</p><p class="pt-72" data-astro-cid-khueswxm>2025</p></div><div class="col-span-5 mt-96 relative -left-4 max-md:col-start-3 max-md:col-span-11 max-md:m-0" data-astro-cid-khueswxm><div class=" relative flex flex-col" data-astro-cid-khueswxm><div class="bar orange-bar" data-astro-cid-khueswxm></div><h3 class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>
System Development<br data-astro-cid-khueswxm>
2 year Degree
</h3><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>XXI Computer Architecture
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Enterprise Communication
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Career Planning
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Analysis and Requirements for Software
        and System Development
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Object-Oriented Development with Algorithms && Java Basics
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Software Design (UML Diagrams, Object Orientation, Classes)
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>More Programming Concepts with Java
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Object Oriented Programming
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Data Base Management System
</p><p class="grid-item-ball grid-item-ball-reverse" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Web Development
</p><p class="grid-item-ball grid-item-ball-reverse clr-brand-orange" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Smart Data Structures
</p><p class="grid-item-ball grid-item-ball-reverse clr-brand-orange" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Mobile Development
</p></div><div class="relative" data-astro-cid-khueswxm><div class="bar black-bar-orange" data-astro-cid-khueswxm></div><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Microservices & Containers
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>Compliance, Quality Control and IT
        Strategies
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>CyberSecurity
</p><h3 class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>
+ 2 years specialization / MBA
</h3><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p><p class="grid-item-ball grid-item-ball-reverse ball-black" data-astro-cid-khueswxm><i class="fa-solid fa-circle" data-astro-cid-khueswxm></i>???
</p></div></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/roadmap.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/roadmap.astro";
const $$url = "/roadmap";

export { $$Roadmap as default, $$file as file, $$url as url };
