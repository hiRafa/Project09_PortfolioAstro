import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"","githubURL":"","thumbnail":"projectSTW_thumbnail","technologies":["GO","ASTRO","HTMX","DOCKER","REDIS"],"projectTitle":"Save The Wild (Under Construction)","year":"2024","projectSubtitle":"Wildlife Rescue and Conservation Tracking System","projectBulletList":["Modular Monolithic API","API with Go","Frontend with Astro","System Engineering","Diagrams","DB Planning","System Requirements","Algorithms","UX/UI Flow"],"overview":"Designed a Wildlife Rescue and Conservation Tracking System that enables communities, organizations, and volunteers to report, rescue, and rehabilitate wildlife. The platform integrates incident reporting, rescue management, donations, volunteer coordination, medical records, and conservation campaigns.","challenges":[{"title":"Multi-Feature Integration","description":"Balancing reporting, rescues, donations, medical records, and volunteer coordination in a coherent system."},{"title":"Geolocation & Real-Time Alerts","description":"Ensuring precise incident tracking and timely notifications to responders."},{"title":"Data Sensitivity","description":"Structuring secure storage for animal treatment and rehabilitation progress."},{"title":"Collaboration Hub","description":"Enabling multiple organizations and volunteers to coordinate efforts without data silos."},{"title":"Transparency & Trust","description":"Designing donation and campaign tracking to build credibility and encourage participation."}],"decisions":[{"decision":"Modular Monolith Architecture","rationale":"Structured yet flexible design, balances manageable complexity with future microservices migration potential."},{"decision":"Geolocation-Enabled Reporting","rationale":"Ensures incidents are tagged with exact coordinates for faster response times."},{"decision":"Donation & Campaign Transparency","rationale":"Tracks funding progress to build trust in community initiatives."},{"decision":"Role-Based Access Control","rationale":"Ensures sensitive medical records are accessible only to authorized users."},{"decision":"Cloud-Ready & Scalable Design","rationale":"Dockerized and prepared for AWS/GCP/Azure deployment."}],"architecture":{"diagram":"/images/STW_architecture.png","workflowDiagram":"/images/STW_workflow.png","narrative":"Users report incidents which are tagged with geolocation and assigned to rescue teams. Backend tracks rescue status, medical treatment, and outcomes. Donations fund initiatives, volunteers coordinate through scheduling tools, and real-time alerts notify responders and communities."},"implementation":["Defined modular architecture with incident, rescue, donation, medical, and volunteer modules.","Designed API contracts and NoSQL data models.","Implemented geolocation-enabled incident reporting and rescue dispatch workflows.","Standardized Dockerized environments for frontend, API, and database.","Planned cloud-agnostic deployment strategy."],"outcome":["Community empowerment: anyone can report incidents, track rescues, and support campaigns.","Transparency: donation and campaign results visible to build trust.","Scalability: modular design allows adding new features without disrupting core system.","Rescue effectiveness: geolocation and real-time alerts reduce response time.","Cross-organization collaboration: shared hub connects NGOs, authorities, and volunteers."],"reflection":"Demonstrated mission-driven modular architecture, geolocation workflow design, and security practices. This project showcases skills in solutions engineering, system integration, and community-driven architecture.","visuals":{"overview":"/images/STW_overview.png","challengeWorkflow":"/images/STW_challenge-workflow.png","moduleDiagram":"/images/STW_modules.png","dashboard":"/images/STW_dashboard.png"}};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/stw.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
