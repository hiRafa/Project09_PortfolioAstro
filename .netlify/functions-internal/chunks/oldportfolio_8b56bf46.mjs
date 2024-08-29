import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"https://hirafa.github.io/hiRafa_portfolio/","figmaURL":"https://www.figma.com/file/g9ML4plXzTaOHjoUrEHkBX/Portfolio-v1?type=design&node-id=0-1&mode=design&t=TgLBR82qpuLhcUQn-0","githubURL":"https://github.com/hiRafa/hiRafa_portfolio","thumbnail":"project_oldportfolio","technologies":["HTML","CSS","JS"],"projectTitle":"Portfolio v1.0","projectSubtitle":"My first portfolio that got me job interviews in Japan","projectBulletList":["Basic HTML Javascript stuff"],"thumbnail_extra":["project_oldportfolio01","project_oldportfolio02","project_oldportfolio03"]};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/oldportfolio.md";
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
