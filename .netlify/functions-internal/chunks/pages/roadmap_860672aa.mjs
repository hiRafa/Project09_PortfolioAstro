/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { a as $$ProjectLayoutLinks, b as $$Layout } from './a3_b690f70a.mjs';
import { a as $$H2ProjectTitle } from './agendae_85cf2946.mjs';
/* empty css                             */import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';
/* empty css                             *//* empty css                             *//* empty css                             */
const $$Astro$1 = createAstro();
const $$ProjectLayoutHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayoutHead;
  const { project, projectTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative col-start-2 col-span-10 h-fit pl-12 max-md:pl-20">${renderComponent($$result, "H2ProjectTitle", $$H2ProjectTitle, { "text": project?.data.projectTitle || projectTitle, "class": "italic text-2xl font-bold clr-brand-blue" })}<p class="py-4">${project?.data.projectSubtitle}</p></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout-Head.astro", void 0);

const $$Astro = createAstro();
const $$Roadmap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Roadmap;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rafael Hirashiki's 1st Project", "data-astro-cid-khueswxm": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLayoutLinks", $$ProjectLayoutLinks, { "road": true, "data-astro-cid-khueswxm": true })}${renderComponent($$result2, "ProjectLayouHead", $$ProjectLayoutHead, { "projectTitle": "RoadMap", "data-astro-cid-khueswxm": true })}${maybeRenderHead()}<div class="col-start-2 col-span-5 text-right relative -right-4 max-md:col-span-10" data-astro-cid-khueswxm><div class="relative flex flex-col h-fit" data-astro-cid-khueswxm><div class="bar blue-bar" data-astro-cid-khueswxm></div><p class="grid-item-ball" data-astro-cid-khueswxm>
Acupuncture <br data-astro-cid-khueswxm>Game Design Video Editing<br data-astro-cid-khueswxm>VFX Design<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball" data-astro-cid-khueswxm>
Frontend Web<br data-astro-cid-khueswxm>Development studies<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball" data-astro-cid-khueswxm>
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
Level up Frontend •<br data-astro-cid-khueswxm>Basics of Backend •<br data-astro-cid-khueswxm>Start System Dev •
<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball" data-astro-cid-khueswxm>
Astro • TailWind • Typescript<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Cypress End-to-End Testing<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball" data-astro-cid-khueswxm>
Javascript Unit Testing<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><h3 class="grid-item-ball" data-astro-cid-khueswxm>
Go<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><p class="grid-item-ball clr-brand-blue" data-astro-cid-khueswxm>
API: Backend (Nest.js + Typescript)<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p><p class="grid-item-ball clr-brand-blue" data-astro-cid-khueswxm>
Full Stack Project: Frontend (Astro.js: Frontend • Go:Backend)<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></p></div><div class="relative" data-astro-cid-khueswxm><div class="bar black-bar-blue" data-astro-cid-khueswxm></div><br data-astro-cid-khueswxm><br data-astro-cid-khueswxm><h3 class="grid-item-ball ball-black" data-astro-cid-khueswxm>
Data: Python or Mobile: Dart • Flutter<i class="fa-solid fa-circle" data-astro-cid-khueswxm></i></h3><h3 class="grid-item-ball ball-black" data-astro-cid-khueswxm>
Explore Data Science<br data-astro-cid-khueswxm>Mid Engineer (System, Front or Full Stack)
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
</p></div></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/roadmap.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/roadmap.astro";
const $$url = "/roadmap";

export { $$Roadmap as default, $$file as file, $$url as url };
