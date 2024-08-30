import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"https://hirafa.github.io/Project02_BatataPan/","figmaURL":"https://www.figma.com/file/P5c6cwZl3dwCxIcjAJZQff/Web-Project02%3A-BatataPan?type=design&node-id=0-1&mode=design&t=tDKnggVX8bIdItaD-0","githubURL":"https://github.com/hiRafa/Project02_BatataPan","thumbnail":"project02_thumbnail","technologies":["HTML","CSS","SASS","JS"],"year":"2022","projectTitle":"Bakery Chain Landing Page","projectSubtitle":"Expanding beyond HTML and CSS with my first programming language: Javascript.","projectBulletList":["DOM Manipulation","Event Listeners Observer","JSON file Parse","Filters and tabs"]};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/project02.md";
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
