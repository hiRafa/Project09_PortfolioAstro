/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderSlot, i as renderComponent, F as Fragment } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { $ as $$CardTitle, a as $$Image, b as $$ProjectLayoutLinks, c as $$Layout, g as getEntry } from './a3_ec561d33.mjs';
/* empty css                             */
const $$Astro$3 = createAstro();
const $$ProjectLayoutBottomStars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectLayoutBottomStars;
  const { positionAbsolute } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${positionAbsolute ? "absolute right-4 bottom-4" : "absolute -bottom-10 -right-10"}  col-start-5 col-span-full h-2/3 w-10/12 max-md:col-start-3 max-md:bottom-0 max-md:-right-3 z-0`, "class")} data-astro-cid-n4vga73n>${renderSlot($$result, $$slots["default"])}<div class="" data-astro-cid-n4vga73n><img src="/Images/shape-square.svg" class="star star-top star-right" data-astro-cid-n4vga73n><div class="v-bar" data-astro-cid-n4vga73n></div><div class="h-bar" data-astro-cid-n4vga73n></div><img src="/Images/shape-square.svg" class="star star-btm star-left" data-astro-cid-n4vga73n><img src="/Images/shape-square.svg" class="star star-btm star-right" data-astro-cid-n4vga73n></div></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout-BottomStars.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const positionAbsolute = false;
  const { project, i } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative col-start-2 col-span-10 mb-28 max-sm:col-start-3 max-sm:col-span-9"><div class="mt-10 mb-10">${renderComponent($$result, "CardTitle", $$CardTitle, { "project": project, "i": i })}<p class="italic">${project?.data.projectSubtitle}</p><div class="relative card-height mt-4"><div class="absolute top-0 bottom-0 right-0 m-auto h-full w-full overflow-hidden flex justify-center"><img${addAttribute(`/Images/${project?.data.thumbnail}.webp`, "src")} class="object-cover max-h-none max-w-none"></div><div class="absolute z-50 -bottom-4 -right-4 flex flex-col gap-5 font-bold py-4 w-11/12 text-right css-glass-bg px-6 max-md:bottom-4 max-md:right-4"><ul${addAttribute(``, "class")}>${project?.data.projectBulletList.map((option) => renderTemplate`<li class="font-semibold">✦ ${option}</li>`)}</ul><div class="flex justify-end">${project && renderTemplate`<div class="flex gap-2 h-fit ">${project.data.technologies?.map(
    (ele, index) => renderTemplate`<div class="w-8 h-8 flex justify-center">${renderComponent($$result, "Image", $$Image, { "src": `/Images/logo_${ele}.png`, "width": 30, "height": 30, "format": "png", "alt": "stars bg", "class": "h-full w-auto" })}</div>`
  )}</div>`}</div><div class="flex justify-end gap-4">${project?.data.githubURL && renderTemplate`<a${addAttribute(project?.data.githubURL, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-brands fa-github url-logo-black url-logo-github"></i><p>Github</p></a>`}${project?.data.figmaURL && renderTemplate`<a${addAttribute(project?.data.figmaURL, "href")} class="flex flex-col items-center w-fit" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/Images/logo_figma.svg", "width": 144, "height": 213, "format": "svg", "alt": "figma logo", "class": "url-logo-black" })}<p>Figma</p></a>`}${project?.data.projectURL && renderTemplate`<a${addAttribute(project?.data.projectURL, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square url-logo-black"></i><p>Project</p></a>`}</div></div></div>${renderComponent($$result, "ProjectLayoutBottomStars", $$ProjectLayoutBottomStars, { "positionAbsolute": positionAbsolute })}</div></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const icons = false;
  const { projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rafael Hirashiki's Portfolio Project", "description": void 0 }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLayoutLinks", $$ProjectLayoutLinks, { "project": icons })}${maybeRenderHead()}<div class="relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9"><p class="italic text-2xl clr-brand-orange">Works at Agendae+</p>${projects.map((project, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "project": project, "i": i })}` })}`)}</div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout.astro", void 0);

const $$Astro = createAstro();
const $$Agendae = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Agendae;
  const agendae = await getEntry("projects", "agendae");
  const stw = await getEntry("projects", "stw");
  const projects = [stw, agendae];
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "projects": projects })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/agendae.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/agendae.astro";
const $$url = "/agendae";

const agendae = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agendae,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectLayout as $, agendae as a };
