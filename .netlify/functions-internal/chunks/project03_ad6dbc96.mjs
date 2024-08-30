import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"projectURL":"https://project04favoritecards.web.app/","githubURL":"https://github.com/hiRafa/Project04_react_mui_musicstore","thumbnail":"project03_thumbnail","technologies":["HTML","CSS","MUI","JS","REACT","FIREBASE"],"projectTitle":"React Music Store","year":"2022","projectSubtitle":"Advancing to React.js library. Further improving JS skills along with MUI library for visual components and Firebase for database and authentication for the first time.","projectBulletList":["Database management","Slider/Carousel","Products pagination with React Paginate","React Hooks","UseContext","Fetch API with Firebase","Authentication","User Input Data Form","Fetch Data only if corresponding user"]};
				const file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/project03.md";
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
