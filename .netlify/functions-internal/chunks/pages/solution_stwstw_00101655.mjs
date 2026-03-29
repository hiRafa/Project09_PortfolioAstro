/* empty css                                  */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_3bb9ff26.mjs';
import { a as $$Layout } from './achievements_99dbdff2.mjs';
/* empty css                                     */import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_3d5f1d40.mjs';

const projectURL = "";
const githubURL = "";
const thumbnail = "projectSTW_thumbnail";
const technologies = [
	"GO",
	"ASTRO",
	"HTMX",
	"DOCKER",
	"REDIS"
];
const projectTitle = "Save The Wild (Under Construction)";
const year = "2024~2025";
const projectSubtitle = "Wildlife Rescue and Conservation Tracking System";
const projectBulletList = [
	"Modular Monolithic API",
	"API with Go",
	"Frontend with Astro",
	"System Engineering",
	"Diagrams",
	"DB Planning",
	"System Requirements",
	"Algorithms",
	"UX/UI Flow"
];
const overview = "Designed a Wildlife Rescue and Conservation Tracking System that enables communities, organizations, and volunteers to report, rescue, and rehabilitate wildlife...";
const challenges = [
	{
		title: "Multi-Feature Integration",
		description: "Balancing reporting, rescues, donations, medical records, and volunteer coordination."
	},
	{
		title: "Geolocation & Real-Time Alerts",
		description: "Ensuring precise incident tracking and timely notifications."
	}
];
const decisions = [
	{
		decision: "Modular Monolith Architecture",
		rationale: "Structured yet flexible design for future microservices migration."
	}
];
const architecture = {
	diagram: "/images/STW_architecture.png",
	workflowDiagram: "/images/STW_workflow.png",
	narrative: "Users report incidents tagged with geolocation and assigned to rescue teams..."
};
const implementation = [
	"Defined modular architecture",
	"Designed API contracts and NoSQL data models"
];
const outcome = [
	"Community empowerment",
	"Transparency",
	"Scalability"
];
const reflection = "Demonstrated mission-driven modular architecture, geolocation workflow design, and security practices.";
const visuals = {
	overview: "/images/STW_overview.png",
	challengeWorkflow: "/images/STW_challenge-workflow.png",
	moduleDiagram: "/images/STW_modules.png",
	dashboard: "/images/STW_dashboard.png"
};
const project = {
	projectURL: projectURL,
	githubURL: githubURL,
	thumbnail: thumbnail,
	technologies: technologies,
	projectTitle: projectTitle,
	year: year,
	projectSubtitle: projectSubtitle,
	projectBulletList: projectBulletList,
	overview: overview,
	challenges: challenges,
	decisions: decisions,
	architecture: architecture,
	implementation: implementation,
	outcome: outcome,
	reflection: reflection,
	visuals: visuals
};

const $$Astro = createAstro();
const $$SolutionStwstw = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionStwstw;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-h4wkurj7": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9" data-astro-cid-h4wkurj7><header class="project-header" data-astro-cid-h4wkurj7><h1 data-astro-cid-h4wkurj7>${project.projectTitle}</h1><h2 data-astro-cid-h4wkurj7>${project.projectSubtitle}</h2><p data-astro-cid-h4wkurj7><strong data-astro-cid-h4wkurj7>Year:</strong>${project.year}</p><p data-astro-cid-h4wkurj7><strong data-astro-cid-h4wkurj7>Technologies:</strong>${project.technologies.join(", ")}</p><img${addAttribute(project.thumbnail, "src")} alt="Project Thumbnail" class="project-thumbnail" data-astro-cid-h4wkurj7></header><section class="overview" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Project Overview</h2><p data-astro-cid-h4wkurj7>${project.overview}</p><img${addAttribute(project.visuals.overview, "src")} alt="Overview Diagram" data-astro-cid-h4wkurj7></section><section class="reflection" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Reflection</h2><p data-astro-cid-h4wkurj7>${project.reflection}</p><img${addAttribute(project.visuals.moduleDiagram, "src")} alt="Module Diagram" data-astro-cid-h4wkurj7></section><section class="challenges" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>The Challenge</h2><ul data-astro-cid-h4wkurj7>${project.challenges.map((ch) => renderTemplate`<li data-astro-cid-h4wkurj7><strong data-astro-cid-h4wkurj7>${ch.title}:</strong>${ch.description}</li>`)}</ul><img${addAttribute(project.visuals.challengeWorkflow, "src")} alt="Challenge Workflow Diagram" data-astro-cid-h4wkurj7></section><section class="decisions" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Decision & Rationale</h2><ul data-astro-cid-h4wkurj7>${project.decisions.map((d) => renderTemplate`<li data-astro-cid-h4wkurj7><strong data-astro-cid-h4wkurj7>${d.decision}:</strong>${d.rationale}</li>`)}</ul></section><section class="architecture" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Solution Architecture</h2><img${addAttribute(project.architecture.diagram, "src")} alt="Architecture Diagram" data-astro-cid-h4wkurj7><img${addAttribute(project.architecture.workflowDiagram, "src")} alt="Workflow Diagram" data-astro-cid-h4wkurj7><p data-astro-cid-h4wkurj7>${project.architecture.narrative}</p></section><section class="implementation" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Implementation Process</h2><ol data-astro-cid-h4wkurj7>${project.implementation.map((step) => renderTemplate`<li data-astro-cid-h4wkurj7>${step}</li>`)}</ol></section><section class="outcome" data-astro-cid-h4wkurj7><h2 data-astro-cid-h4wkurj7>Outcome / Impact</h2><ul data-astro-cid-h4wkurj7>${project.outcome.map((item) => renderTemplate`<li data-astro-cid-h4wkurj7>${item}</li>`)}</ul><img${addAttribute(project.visuals.dashboard, "src")} alt="Dashboard / Results" data-astro-cid-h4wkurj7></section><footer class="project-links" data-astro-cid-h4wkurj7>${project.projectURL }${project.githubURL }</footer></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_stwstw.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_stwstw.astro";
const $$url = "/solution_stwstw";

export { $$SolutionStwstw as default, $$file as file, $$url as url };
