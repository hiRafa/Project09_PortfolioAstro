/* empty css                                  */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_3bb9ff26.mjs';
import { a as $$Layout } from './achievements_99dbdff2.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';

const $$Astro = createAstro();
const $$Solutions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Solutions;
  const solutions = [
    {
      title: "Personal Achievements Tracking System",
      desc: "Internal system to track measurable impact, performance metrics, and workflow improvements.",
      status: "In Progress",
      link: "#"
    },
    {
      title: "A3 Workflow Automation System",
      desc: "Automation system designed to streamline repetitive tasks and reduce operational overhead.",
      status: "In Progress",
      link: "#"
    },
    {
      title: "Wild Reports System",
      desc: "Reporting system for structured data collection, analysis, and internal visibility.",
      status: "In Progress",
      link: "/solution_stwstw"
    },
    {
      title: "Website with CloudCannon CMS",
      desc: "CMS-driven website architecture focused on scalability and content management efficiency.",
      status: "Case Study",
      link: "/solution_kat"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RAFAEL HIRASHIKI's Implemented Features and other metrics" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9"><h2 class="italic text-2xl clr-brand-orange pb-8">Solutions</h2><ul class="grid md:grid-cols-2 gap-8">${solutions.map((project) => renderTemplate`<li><a${addAttribute(project.link, "href")} class="group block border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white h-full"><span class="text-xs uppercase tracking-wide text-neutral-400">${project.status}</span><h3 class="text-xl font-semibold text-neutral-900 mt-2 group-hover:text-orange-500 transition">${project.title}</h3><p class="text-sm text-neutral-600 mt-3 leading-relaxed">${project.desc}</p><div class="mt-6 flex items-center justify-between"><div class="h-[2px] w-10 bg-neutral-300 group-hover:bg-orange-500 transition-all"></div><span class="text-sm text-neutral-400 group-hover:text-orange-500 transition">
→
</span></div></a></li>`)}</ul></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solutions.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solutions.astro";
const $$url = "/solutions";

export { $$Solutions as default, $$file as file, $$url as url };
