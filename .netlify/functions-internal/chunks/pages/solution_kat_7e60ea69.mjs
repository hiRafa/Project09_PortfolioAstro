/* empty css                                  */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent } from '../astro_3bb9ff26.mjs';
import { $ as $$Image, a as $$Layout } from './achievements_99dbdff2.mjs';
import 'clsx';
/* empty css                                  */import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';

const project = {
	projectURL: "",
	githubURL: "",
	technologies: [
		"HTML",
		"CSS",
		"JS",
		"Jekyll",
		"Ruby",
		"CloudCannon"
	],
	projectTitle: "Website with CloudCannon CMS (Kat Portfolio)",
	year: "2025",
	projectSubtitle: "",
	projectBulletList: [
		"System Requirements",
		"Algorithms",
		"UX/UI Flow"
	]
};
const overview = "A client requested a personal portfolio website that could be updated frequently. The main requirement was that the client should be able to manage content independently, without needing technical support.";
const reflection = [
	"I evaluated multiple platforms through the lens of client needs, engineering effort, and long-term sustainability.",
	"I delivered a custom CMS-enabled static site using Jekyll and CloudCannon, balancing trade-offs between editability, performance, and maintainability, demonstrating thoughtful architectural decision-making.",
	"The project strengthened my skills in solution evaluation, platform integration, and client enablement."
];
const challenges = [
	{
		title: "Client Requirement",
		description: "Balancing reporting, rescues, donations, medical records, and volunteer coordination."
	},
	{
		title: "Engineer Constraint",
		description: "Ensuring precise incident tracking and timely notifications."
	},
	{
		title: "Architectural Goal",
		description: "Ensuring precise incident tracking and timely notifications."
	}
];
const rationale = {
	overview: "CloudCannon provided the right balance between client usability and engineering sustainability.",
	forClient: {
		description: "The platform offered a clean and intuitive admin/editor screen that made content editing straightforward, while keeping the overall service cost low.",
		bullets: [
			"Clean, intuitive admin/editor interface",
			"Straightforward content editing",
			"Low service cost"
		]
	},
	forEngineer: {
		description: "CloudCannon’s static-site workflow with CMS support enabled a flexible architecture without the recurring maintenance burdens of traditional dynamic CMS platforms.",
		bullets: [
			"Flexible static-site architecture",
			"CMS support for structured content",
			"Minimal maintenance compared to dynamic CMS"
		]
	},
	tradeoffs: {
		description: "While setup and customization were more complex than no-code tools like Wix, the long-term sustainability and customization potential of a static-first approach outweighed the upfront complexity.",
		bullets: [
			"More complex setup than Wix or other no-code tools",
			"High long-term sustainability",
			"Greater customization potential"
		]
	},
	implementation: {
		description: "The site was implemented using Jekyll integrated with CloudCannon, leveraging the benefits of static architecture.",
		bullets: [
			"Jekyll static site generator + CloudCannon CMS",
			"Performance: pre-rendered static HTML pages",
			"Security: no live database or server-side code",
			"Hosting simplicity: deployable to any CDN or static host; CloudCannon Hosting with domain linkage",
			"Sustainability: long-term maintainable without plugins or server upkeep"
		]
	},
	outcome: {
		description: "The client received a fast, secure, low-maintenance site, while retaining independent content management.",
		bullets: [
			"Fast site performance",
			"Secure with minimal attack surface",
			"Low-maintenance architecture",
			"Independent content management via CloudCannon editor"
		]
	}
};
const architecture = [
	{
		title: "Content Editing (Client → CloudCannon Editor)",
		description: "The client logs into the CloudCannon Editor to modify text, images, and metadata via an intuitive visual interface. These changes trigger updates in the underlying content system."
	},
	{
		title: "Version Control (CloudCannon → Git Repository)",
		description: "All edits are committed directly to the project’s Jekyll repository as Markdown files and configuration data. CloudCannon tracks the commit status and logs any errors, ensuring content integrity."
	},
	{
		title: "Build & Deployment (CI/CD → Hosting)",
		description: "Changes in the repository trigger a Jekyll build through a CI/CD pipeline. The static HTML, CSS, and JavaScript output is then deployed to CloudCannon Hosting, which serves the site through a global CDN."
	},
	{
		title: "Domain & DNS (Hosting → End Users)",
		description: "The client’s custom domain, managed via a DNS provider (e.g., Squarespace), is linked to the CloudCannon-hosted site. Once the build completes, updated content becomes live for all visitors, typically within seconds to a few minutes."
	}
];
const architectureQA = [
	{
		question: "Where does content live?",
		answer: "In the Jekyll repository, as version-controlled files (Markdown, configs, images)."
	},
	{
		question: "What triggers deployments?",
		answer: "Edits in CloudCannon Admin → repo updates → automatic build → hosting update."
	},
	{
		question: "How fast does the site update?",
		answer: "Typically seconds to a few minutes, depending on build time."
	},
	{
		question: "What are the integration points?",
		answer: "CloudCannon CMS ↔ Jekyll SSG ↔ CloudCannon Hosting (with custom domain)."
	}
];
const engineerProcess = [
	{
		step: "Account Setup",
		description: "Created CloudCannon account and initialized project."
	},
	{
		step: "Template Selection",
		description: "Chose a base template from CloudCannon CMS options."
	},
	{
		step: "Customization",
		description: "Edited and modified template files (HTML, CSS, Markdown) to match the client’s brand."
	},
	{
		step: "Configuration",
		description: "Set up content sections for easy editing inside the CMS."
	},
	{
		step: "Hosting & Domain",
		description: "Guided client on domain purchase and linked it to CloudCannon hosting."
	},
	{
		step: "Testing",
		description: "Verified responsiveness across Desktop, Android, Mac, iOS."
	},
	{
		step: "Client Training",
		description: "Walked client through content editing and publishing process."
	},
	{
		step: "Validation",
		description: "Confirmed client could publish updates independently without needing developer support."
	}
];
const workflow = [
	"Client logs into CloudCannon admin panel.",
	"Client adds articles by category, filling up a form and adding an image for the thumbnail.",
	"CloudCannon updates the static site in the connected repo.",
	"Changes are deployed automatically within seconds-few minutes.",
	"Check the live website."
];
const outcome = [
	{
		title: "Client",
		description: "Gained independence in managing their portfolio site. No need to contact any developer or wait for someone else to reply."
	},
	{
		title: "Engineer",
		description: "Delivered a maintainable solution with finished long-term support. Within contract rules. Client is free to contact for emergencies."
	},
	{
		title: "Result",
		description: "A tailored CMS architecture that fit both business needs and technical constraints."
	}
];
const visuals = {
	thumbnail: "solution_kat_thumbnail",
	challenge: "solution_kat_cloudcannon",
	architecture: "solution_kat_architecture",
	workflow: "solution_kat_workflow"
};
const portfolio = {
	project: project,
	overview: overview,
	reflection: reflection,
	challenges: challenges,
	rationale: rationale,
	architecture: architecture,
	architectureQA: architectureQA,
	engineerProcess: engineerProcess,
	workflow: workflow,
	outcome: outcome,
	visuals: visuals
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$PageNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageNav;
  const { data } = Astro2.props;
  const { pathname } = Astro2.url;
  const keys = Object.keys(data).slice(0, -1);
  return renderTemplate(_a || (_a = __template(["", '<nav class="nav-menu" data-astro-cid-s7jxfdyf><ul data-astro-cid-s7jxfdyf>', '</ul></nav><script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const links = document.querySelectorAll(".nav-link");\n    const sections = [...links].map((link) =>\n      document.querySelector(`#${link.dataset.section}`)\n    );\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          const link = document.querySelector(\n            `.nav-link[data-section="${entry.target.id}"]`\n          );\n          if (entry.isIntersecting) {\n            links.forEach((l) => l.classList.remove("active"));\n            link?.classList.add("active");\n          }\n        });\n      },\n      { threshold: 0.25 }\n    );\n\n    sections.forEach((section) => section && observer.observe(section));\n  });\n<\/script>'], ["", '<nav class="nav-menu" data-astro-cid-s7jxfdyf><ul data-astro-cid-s7jxfdyf>', '</ul></nav><script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const links = document.querySelectorAll(".nav-link");\n    const sections = [...links].map((link) =>\n      document.querySelector(\\`#\\${link.dataset.section}\\`)\n    );\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          const link = document.querySelector(\n            \\`.nav-link[data-section="\\${entry.target.id}"]\\`\n          );\n          if (entry.isIntersecting) {\n            links.forEach((l) => l.classList.remove("active"));\n            link?.classList.add("active");\n          }\n        });\n      },\n      { threshold: 0.25 }\n    );\n\n    sections.forEach((section) => section && observer.observe(section));\n  });\n<\/script>'])), maybeRenderHead(), keys.map((key) => renderTemplate`<li data-astro-cid-s7jxfdyf><a${addAttribute(`${pathname}#${key}`, "href")} class="nav-link"${addAttribute(key, "data-section")} data-astro-cid-s7jxfdyf><span class="bar" data-astro-cid-s7jxfdyf></span>${key}</a></li>`));
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/PageNav.astro", void 0);

const $$Astro = createAstro();
const $$SolutionKat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionKat;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-spfsmtdv": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageNav", $$PageNav, { "data": portfolio, "data-astro-cid-spfsmtdv": true })}${maybeRenderHead()}<div class="portfolio solutions relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9" data-astro-cid-spfsmtdv><div class="project-header" id="project" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>${portfolio.project.projectTitle}</h2><h3 data-astro-cid-spfsmtdv>${portfolio.project.projectSubtitle}</h3><p data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>Year:</strong>${portfolio.project.year}</p><p data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>Technologies:</strong>${portfolio.project.technologies.join(", ")}</p>${renderComponent($$result2, "Image", $$Image, { "src": `/images/${portfolio.visuals.thumbnail}.webp`, "width": 1100, "height": 940, "format": "webp", "alt": "", "class": "w-1/2", "data-astro-cid-spfsmtdv": true })}</div><section class="overview" id="overview" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Project Overview</h2><p data-astro-cid-spfsmtdv>${portfolio.overview}</p></section><section class="reflection" id="reflection" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Reflection</h2><ul data-astro-cid-spfsmtdv>${portfolio.reflection.map((point, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv>${point}</li>`)}</ul></section><section class="challenges" id="challenges" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>The Challenge</h2><ul data-astro-cid-spfsmtdv>${portfolio.challenges.map((ch, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>${ch.title}:</strong>${ch.description}</li>`)}</ul>${renderComponent($$result2, "Image", $$Image, { "src": `/images/${portfolio.visuals.challenge}.webp`, "width": 1100, "height": 940, "format": "png", "alt": "Challenge Diagram", "class": "w-full", "data-astro-cid-spfsmtdv": true })}</section><section class="rationale" id="rationale" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Rationale</h2><p data-astro-cid-spfsmtdv>${portfolio.rationale.overview}</p><div class="rationale-section" id="rationale-forClient" data-astro-cid-spfsmtdv><h3 data-astro-cid-spfsmtdv>For the Client</h3><p data-astro-cid-spfsmtdv>${portfolio.rationale.forClient.description}</p><ul data-astro-cid-spfsmtdv>${portfolio.rationale.forClient.bullets.map((bullet, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv>${bullet}</li>`)}</ul></div><div class="rationale-section" id="rationale-forEngineer" data-astro-cid-spfsmtdv><h3 data-astro-cid-spfsmtdv>For the Engineer</h3><p data-astro-cid-spfsmtdv>${portfolio.rationale.forEngineer.description}</p><ul data-astro-cid-spfsmtdv>${portfolio.rationale.forEngineer.bullets.map((bullet, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv>${bullet}</li>`)}</ul></div><div class="rationale-section" id="rationale-tradeoffs" data-astro-cid-spfsmtdv><h3 data-astro-cid-spfsmtdv>Trade-offs</h3><p data-astro-cid-spfsmtdv>${portfolio.rationale.tradeoffs.description}</p><ul data-astro-cid-spfsmtdv>${portfolio.rationale.tradeoffs.bullets.map((bullet, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv>${bullet}</li>`)}</ul></div><div class="rationale-section" id="rationale-implementation" data-astro-cid-spfsmtdv><h3 data-astro-cid-spfsmtdv>Implementation</h3><p data-astro-cid-spfsmtdv>${portfolio.rationale.implementation.description}</p><ul data-astro-cid-spfsmtdv>${portfolio.rationale.implementation.bullets.map((bullet, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv>${bullet}</li>`)}</ul></div></section><section class="architecture" id="architecture" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Solution Architecture</h2>${renderComponent($$result2, "Image", $$Image, { "src": `/images/${portfolio.visuals.architecture}.webp`, "width": 1100, "height": 940, "format": "png", "alt": "Architecture Diagram", "class": "w-2/4", "data-astro-cid-spfsmtdv": true })}<ul data-astro-cid-spfsmtdv>${portfolio.architecture.map((step, i) => renderTemplate`<li${addAttribute(i, "key")} data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>${step.title}:</strong><p data-astro-cid-spfsmtdv>${step.description}</p></li>`)}</ul></section><section class="architecture-qa" id="architectureQA" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Architecture Q&A (Concise View)</h2><ul data-astro-cid-spfsmtdv>${portfolio.architectureQA.map((qa, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>${qa.question}:</strong>${qa.answer}</li>`)}</ul></section><section class="engineer-process" id="engineerProcess" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Engineer Process (Implementation Steps)</h2><ol data-astro-cid-spfsmtdv>${portfolio.engineerProcess.map((step, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>${step.step}:</strong>${step.description}</li>`)}</ol></section><section class="workflow" id="workflow" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Workflow</h2><ol data-astro-cid-spfsmtdv>${portfolio.workflow.map((step, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-spfsmtdv>${step}</li>`)}</ol>${renderComponent($$result2, "Image", $$Image, { "src": `/images/${portfolio.visuals.workflow}.webp`, "width": 1100, "height": 940, "format": "png", "alt": "Architecture Diagram", "class": "w-1/4", "data-astro-cid-spfsmtdv": true })}</section><section class="outcome" id="outcome" data-astro-cid-spfsmtdv><h2 data-astro-cid-spfsmtdv>Outcome</h2><ul data-astro-cid-spfsmtdv>${portfolio.outcome.map((item, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-spfsmtdv><strong data-astro-cid-spfsmtdv>${item.title}:</strong>${item.description}</li>`)}</ul></section><footer class="project-links" id="project" data-astro-cid-spfsmtdv>${portfolio.projectURL && renderTemplate`<a${addAttribute(portfolio.projectURL, "href")} target="_blank" data-astro-cid-spfsmtdv>
Live Project
</a>`}${portfolio.githubURL && renderTemplate`<a${addAttribute(portfolio.githubURL, "href")} target="_blank" data-astro-cid-spfsmtdv>
GitHub Repository
</a>`}</footer></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_kat.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_kat.astro";
const $$url = "/solution_kat";

export { $$SolutionKat as default, $$file as file, $$url as url };
