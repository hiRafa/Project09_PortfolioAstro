/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { $ as $$ProjectLayout } from './agendae_50c0f5bc.mjs';
import { g as getEntry } from './a3_e9861986.mjs';
import 'html-escaper';
/* empty css                             */import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';
/* empty css                             *//* empty css                             */
const $$Astro = createAstro();
const $$Projects2022 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects2022;
  const oldportfolio = await getEntry("projects", "oldportfolio");
  const project01 = await getEntry("projects", "project01");
  const project02 = await getEntry("projects", "project02");
  const project03 = await getEntry("projects", "project03");
  const project04 = await getEntry("projects", "project04");
  const projects2022 = [oldportfolio, project01, project02, project03, project04];
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "projects": projects2022 })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/projects2022.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/projects2022.astro";
const $$url = "/projects2022";

export { $$Projects2022 as default, $$file as file, $$url as url };
