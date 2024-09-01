import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"https://project07-health-record.vercel.app/","githubURL":"https://github.com/hiRafa/Project07_HealthRecord","thumbnail":"project04_thumbnail","technologies":["HTML","CSS","JS","REACT","NEXT","FIREBASE","MONGODB"],"projectTitle":"Medical Records Webapp with Next.js","year":"2023","projectSubtitle":"Leveling up to explore the full functionalities of a powerful JS framework with Next.js and building a MVP. First time dealing with backend logic and further understanding the connection between both ends and the database.","projectBulletList":["Nextauth","Firebase & MongoDB for database","Helper functions","useRouter","Forms and User Data","Backend","Database manipulation","Light and Dark mode","React Calendar","useContext"],"thumbnail_extra":["project04_thumbnail2","project04_thumbnail3"]};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/a3eeoPF.md";
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
