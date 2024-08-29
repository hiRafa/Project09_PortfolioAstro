/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { $ as $$Image, b as $$Layout } from './a3_9ed5507f.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';
/* empty css                         *//* empty css                         */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "headerIndex": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": "/Images/index-rafa2.webp", "width": 1100, "height": 940, "format": "webp", "alt": "web development applications icons and logos", "class": "relative w-full right-0 m-auto max-lg:max-w-3xl max-lg:w-10/12 max-lg:mr-0 max-md:w-full" })}` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/index.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
