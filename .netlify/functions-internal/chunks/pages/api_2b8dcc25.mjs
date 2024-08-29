/* empty css                        */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderSlot, i as renderComponent, F as Fragment } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { $ as $$Image, a as $$ProjectLayoutLinks, b as $$Layout, g as getEntry } from './a3_9ed5507f.mjs';
/* empty css                         */
const $$Astro$3 = createAstro();
const $$ProjectLayoutBottomStars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectLayoutBottomStars;
  const { positionAbsolute } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${positionAbsolute ? "right-4 bottom-4" : "-right-10 -bottom-16"} absolute col-start-5 col-span-full right-4 bottom-4 h-2/3 w-10/12 max-md:col-start-3 z-0`, "class")} data-astro-cid-n4vga73n>${renderSlot($$result, $$slots["default"])}<div class="" data-astro-cid-n4vga73n><img src="/Images/shape-square.svg" class="star star-top star-right" data-astro-cid-n4vga73n><div class="v-bar" data-astro-cid-n4vga73n></div><div class="h-bar" data-astro-cid-n4vga73n></div><img src="/Images/shape-square.svg" class="star star-btm star-left" data-astro-cid-n4vga73n><img src="/Images/shape-square.svg" class="star star-btm star-right" data-astro-cid-n4vga73n></div></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout-BottomStars.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const positionAbsolute = false;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-fit col-start-3 col-span-9 mb-40"><div class="relative w-full block z-50"><img${addAttribute(`/Images/${project?.data.thumbnail}.webp`, "src")} class=""><div class="flex flex-col gap-5 absolute bottom-0 right-0 font-bold py-4 w-full  text-right css-glass-bg px-6 "><ul${addAttribute(``, "class")}>${project?.data.projectBulletList.map((option) => renderTemplate`<li class="font-semibold">❍ ${option}</li>`)}</ul><div class="flex justify-end">${project && renderTemplate`<div class="flex gap-2 h-fit ">${project.data.technologies?.map((ele, index) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": `/Images/logo_${ele}.png`, "width": 30, "height": 30, "format": "png", "alt": "stars bg", "class": "" })}`)}</div>`}</div><div class="flex justify-end gap-4"><a${addAttribute(project?.data.githubURL, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-brands fa-github url-logo-black url-logo-github"></i><p>Github</p></a>${project?.data.figmaURL && renderTemplate`<a${addAttribute(project?.data.figmaURL, "href")} class="flex flex-col items-center w-fit" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/Images/logo_figma.svg", "width": 144, "height": 213, "format": "svg", "alt": "figma logo", "class": "url-logo-black" })}<p>Figma</p></a>`}${project?.data.projectURL && renderTemplate`<a${addAttribute(project?.data.projectURL, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square url-logo-black"></i><p>Project</p></a>`}</div></div></div>${renderComponent($$result, "ProjectLayoutBottomStars", $$ProjectLayoutBottomStars, { "positionAbsolute": positionAbsolute })}</div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const icons = false;
  const { projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hirashiki Rafael's Portfolio Project", "description": void 0 }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLayoutLinks", $$ProjectLayoutLinks, { "project": icons })}${projects.map((project) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "project": project })}` })}`)}` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout.astro", void 0);

const $$Astro = createAstro();
const $$Api = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Api;
  const api = await getEntry("projects", "api");
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "project": api, "sysdev": true })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/api.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/api.astro";
const $$url = "/api";

const api = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Api,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectLayout as $, api as a };
