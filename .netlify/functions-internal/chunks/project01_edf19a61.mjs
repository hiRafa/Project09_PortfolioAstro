import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"https://hirafa.github.io/Project01_KDA_htmlCSS/#","figmaURL":"https://www.figma.com/file/roKPllzSeVSl6FSGaAw24M/Web-Project01%3A-KDA?node-id=0%3A1","githubURL":"https://github.com/hiRafa/Project01_KDA_htmlCSS","thumbnail":"project01_thumbnail","technologies":["HTML","CSS","JS"],"projectTitle":"Dance Academy Landing Page","projectSubtitle":"This is where my journey as a developer started. My 1st landing page project with basic HTML, CSS and a bit of Javascript. With a diversity of dance styles and branches. Also different payment plans available.","projectBulletList":["Exploring the basics and fundamentals of HTML5 / CSS3.","AOS Animate on Scroll Library: https://michalsnik.github.io/aos/"]};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/project01.md";
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
