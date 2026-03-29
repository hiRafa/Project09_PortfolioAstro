import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                                  */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, F as Fragment, j as renderSlot, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, u as unescapeHTML, p as renderHead } from '../astro_3bb9ff26.mjs';
import 'clsx';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_3d5f1d40.mjs';

const $$Astro$c = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/astro/components/Image.astro", void 0);

const $$Astro$b = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/rafae/OneDrive/%C3%81rea%20de%20Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$a = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$H1;
  const { text, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(className, "class")}${spreadAttributes(rest)}>${text}</h1>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/H1.astro", void 0);

const $$Astro$9 = createAstro();
const $$ProjectEmailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ProjectEmailIcon;
  return renderTemplate`${maybeRenderHead()}<a class="flex flex-col items-center w-fit" id="email-icon" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/images/logo_GMAIL.png", "width": 144, "height": 213, "format": "png", "alt": "gmail logo", "class": "url-logo" })}</a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectEmailIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$ProjectGithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProjectGithubIcon;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-brands fa-github url-logo-black url-logo-github"></i></a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectGithubIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$ProjectLinkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProjectLinkedin;
  return renderTemplate`${maybeRenderHead()}<a href="https://www.linkedin.com/in/rafael-hirashiki-7a5733170/" class="flex flex-col items-center w-fit" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/images/logo_linkedin.png", "width": 144, "height": 213, "format": "png", "alt": "linkedin logo", "class": "url-logo" })}</a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLinkedin.astro", void 0);

const $$Astro$6 = createAstro();
const $$ContactIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ContactIcons;
  const { class: className, classp: classNameP } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center"><li${addAttribute(`flex gap-4 mt-4 ${className}`, "class")}>${renderComponent($$result, "ProjectGithubIcon", $$ProjectGithubIcon, { "url": "https://github.com/hiRafa" })}${renderComponent($$result, "ProjectLinkedin", $$ProjectLinkedin, {})}${renderComponent($$result, "ProjectEmailIcon", $$ProjectEmailIcon, {})}</li><p${addAttribute(`pt-2 ${classNameP}`, "class")}>Get in touch with me!</p></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ContactIcons.astro", void 0);

const $$Astro$5 = createAstro();
const $$RafaPic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RafaPic;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Image", $$Image, { "src": "/images/rafa.png", "width": 450, "height": 450, "format": "webp", "alt": "Japanese looking guy from Brazil wearing stylish clothes", "class": "rounded-2x1 aspect-thumbnail object-cover rounded-full m-auto" })}${renderComponent($$result, "ContactIcons", $$ContactIcons, { "classp": "text-center", "class": "justify-center" })}</div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Rafa-pic.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { headerIndex, class: className, ...rest } = Astro2.props;
  const { pathname } = Astro2.url;
  const navObj = [
    {
      path: "/",
      navTitle: "Home",
      navSubtitle: null
    },
    {
      path: "/achievements",
      navTitle: "Achievements & Results",
      navSubtitle: ""
    },
    {
      path: "/solutions",
      navTitle: "Systems & Solutions",
      navSubtitle: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(className, "class")}${spreadAttributes(rest)} id="myHeader" data-astro-cid-3ef6ksr2><!-- <p class="absolute bottom-0">powered by Astro</p> -->${renderComponent($$result, "Image", $$Image, { "src": headerIndex ? "/images/stars-topleft-index.svg" : "/images/stars-topleft.svg", "width": 220, "height": 40, "format": "svg", "alt": "stars bg", "class": "absolute top-4 z-10", "data-astro-cid-3ef6ksr2": true })}<div${addAttribute(`${!headerIndex && "header-in-grid"} relative col-start-2 col-span-full grid gap-4 justify-around h-full pt-10 pr-4 max-lg:col-start-2 max-lg:col-span-10 max-md:justify-center max-md:p-0`, "class")} data-astro-cid-3ef6ksr2><img${addAttribute(headerIndex ? "/images/stars-bottomleft-index.svg" : "/images/stars-bottomleft.svg", "src")}${addAttribute(440, "width")}${addAttribute(450, "height")} alt="stars bg" class="absolute bottom-0 -left-6 z-10" data-astro-cid-3ef6ksr2>${headerIndex ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`<section class="self-start" data-astro-cid-3ef6ksr2>${renderComponent($$result2, "H1", $$H1, { "text": "RAFAEL HIRASHIKI", "index": true, "class": "text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-bold", "data-astro-cid-3ef6ksr2": true })}<p class="max-lg: text-sm" data-astro-cid-3ef6ksr2>Casual Dancer</p></section><section class="text-3xl max-lg:text-lg max-md:text-lg max-sm:text-base font-bold" data-astro-cid-3ef6ksr2><h2 class="pt-4 pb-2 flex justify-start items-center gap-4" data-astro-cid-3ef6ksr2><span data-astro-cid-3ef6ksr2>Software Engineer (Systems, Data & Automation)</span></h2></section><section class="" data-astro-cid-3ef6ksr2><p class="pb-6 text-xl max-lg:text-base max-md:text-sm " data-astro-cid-3ef6ksr2>
From Brazil, based in Tokyo. <br data-astro-cid-3ef6ksr2>
I design and build systems that transform complex problems into efficient, scalable solutions, with a focus on automation and data-driven workflows.
</p><p data-astro-cid-3ef6ksr2>Special interest in health and environmental domains.</p></section><nav class="self-end justify-self-end relative z-50 pb-20 max-md:pb-10 max-md:pt-4" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li class="" data-astro-cid-3ef6ksr2><a href="/solutions" class="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl font-bold flex flex-nowrap justify-center items-center gap-4 text-right" data-astro-cid-3ef6ksr2><p class="underline" data-astro-cid-3ef6ksr2>Systems & Solutions</p><div class="star-container" data-astro-cid-3ef6ksr2><div class="star-bar" data-astro-cid-3ef6ksr2></div><i class="fa-solid fa-diamond" data-astro-cid-3ef6ksr2></i></div></a></li>${renderComponent($$result2, "ContactIcons", $$ContactIcons, { "class": "justify-end", "classp": "text-end", "data-astro-cid-3ef6ksr2": true })}</ul></nav>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ButtonToggleHeader", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ButtonToggleHeader.tsx", "client:component-export": "default" })}${renderComponent($$result2, "RafaPic", $$RafaPic, { "class": "relative z-50 w-4/6 m-auto h-fit max-lg:w-6/6 ", "data-astro-cid-3ef6ksr2": true })}${renderComponent($$result2, "H1", $$H1, { "text": "RAFAEL HIRASHIKI", "index": false, "class": "absolute bottom-1/4 -left-10 -rotate-90 w-0 whitespace-nowrap text-3xl  max-xl:text-2xl max-lg:text-3xl max-md:text-2xl font-bold  m-auto", "data-astro-cid-3ef6ksr2": true })}<nav class="pb-16 relative z-50  max-xl:pb-20 self-end" data-astro-cid-3ef6ksr2><ul class="pr-4 flex flex-col gap-2" data-astro-cid-3ef6ksr2>${navObj.map((ele) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(ele.path, "href")} class="text-xl max-xl:text-lg max-lg:text-xl font-bold flex flex-nowrap justify-between items-center gap-4" data-astro-cid-3ef6ksr2><p${addAttribute(`flex flex-col items-start text-lg ${pathname === ele.path && "clr-brand-orange"}`, "class")} data-astro-cid-3ef6ksr2><span class="li-projectTitle" data-astro-cid-3ef6ksr2>${ele.navTitle}</span><span class="li-role" data-astro-cid-3ef6ksr2>${ele.navSubtitle}</span></p><div class="star-container" data-astro-cid-3ef6ksr2><div${addAttribute(`star-bar ${pathname === ele.path && "big-bar clr-brand-orange"} `, "class")} data-astro-cid-3ef6ksr2></div><i${addAttribute(`fa-solid fa-diamond ${pathname === ele.path && "big-diamond clr-brand-orange"} `, "class")} data-astro-cid-3ef6ksr2></i></div></a></li>`)}</ul></nav>` })}`}</div></header>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Main;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(className, "class")}${spreadAttributes(rest)} id="main">${renderSlot($$result, $$slots["default"])}</main>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Main.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/stw.md": () => import('../stw_301b410d.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects_data/kat.json": () => import('../kat_35a8d43d.mjs'),"/src/content/projects_data/stwstw.json": () => import('../stwstw_0b3782e8.mjs')

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects_data":{"type":"data","entries":{"kat":"/src/content/projects_data/kat.json","stwstw":"/src/content/projects_data/stwstw.json"}},"projects":{"type":"content","entries":{"stw":"/src/content/projects/stw.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/stw.md": () => import('../stw_d14958e2.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, headerIndex } = Astro2.props;
  const projects = await getCollection("projects");
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><title>RAFAEL HIRASHIKI, Frontend Engineer's Nifty Journey</title><meta name="description" content=" 
    Working to be a FullStack Engineer, specialized as a Frontend for now.
    Rearranging stars and creating new constellations"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- OGP --><meta property="og:title" content="RAFAEL HIRASHIKI, a Frontend Engineer's Nifty Journey"><meta property="og:type" content="website portfolio"><meta property="og:url" content="https://hirashiki-rafael-portfolio.netlify.app/"><meta property="og:description" content="
    Working to be a FullStack Engineer, specialized as a Frontend for now.
    Rearranging stars and creating new constellations"><meta property="og:image" content="../../public/images/index-rafa2.webp">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">${renderHead()}</head><body${addAttribute(`grid grid-cols-12 ${headerIndex && "clr-bg body-rows"} overflow-x-hidden css-no-scrollbar`, "class")}><!-- Home page -->${headerIndex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "headerIndex": headerIndex, "class": `relative w-full css-min-h100 col-start-1 col-span-6 grid grid-cols-8 max-lg:min-h-min max-lg:grid-cols-12 css-body-row-2 max-lg:col-span-full` })}${renderComponent($$result2, "Main", $$Main, { "projects": projects, "class": `w-full h-fit m-auto col-span-6 css-no-scrollbar css-body-row-1 max-lg:w-12/12 max-lg:my-0 max-lg:top-12 max-sm:col-span-full ` }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`}<!-- Other pages -->${!headerIndex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "headerIndex": headerIndex, "class": `css-hideHeader max-lg:absolute col-start-1 col-span-3 max-lg:col-span-3 clr-bg pt-8 grid grid-cols-5 max-lg:min-h-screen` })}${renderComponent($$result2, "Main", $$Main, { "projects": projects, "class": `w-full h-screen pb-8 col-span-9 max-lg:col-start-1 max-lg:col-span-full overflow-y-scroll pt-16 css-no-scrollbar grid grid-cols-12` }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`}</body></html>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Achievements = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Achievements;
  const topAchievements = [
    {
      title: "SEO & Ranking Optimization System",
      impact: "Ranking improved from #40 \u2192 #10",
      metrics: "+24\u201343% CTR, +100\u2013450 monthly clicks",
      description: "Designed and implemented SEO and content optimization strategies, improving search visibility and organic traffic performance."
    },
    {
      title: "Performance Engineering",
      impact: "+20\u201340 Lighthouse points",
      metrics: "-0.6s to -1.7s load time",
      description: "Optimized frontend performance through asset optimization, rendering improvements, and page structure enhancements."
    },
    {
      title: "Workflow Automation & Internal Tools",
      impact: "Saved 700\u2013960+ hours of work",
      metrics: "-16h per update, -30min/week per member",
      description: "Built internal automation systems and workflows that significantly reduced manual operations and improved team efficiency."
    },
    {
      title: "User Engagement Optimization",
      impact: "+22% direct sessions",
      metrics: "CTR up to 33%, 3,500 monthly visits",
      description: "Improved user navigation, linking strategies, and content structure to increase engagement and retention."
    },
    {
      title: "High-Scale Campaign Performance",
      impact: "745K average banner clicks",
      metrics: "Range: 184K \u2192 1.19M",
      description: "Developed and optimized campaign pages and banner systems for high-traffic marketing initiatives."
    },
    {
      title: "Design System & Component Architecture",
      impact: "50+ reusable components",
      metrics: "316+ tickets delivered",
      description: "Built scalable UI components and contributed to a consistent design system, improving development speed and maintainability."
    },
    {
      title: "Operational Efficiency Improvements",
      impact: "Reduced errors and manual effort",
      metrics: "-50min tasks, -35 misses",
      description: "Streamlined repetitive processes and reduced human error through better tooling and system design."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RAFAEL HIRASHIKI's Implemented Features and other metrics" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9"><h2 class="italic text-2xl clr-brand-orange">Performance & Results</h2><p>
Here are some examples of how my work reduced manual effort, improved
      system efficiency, and saved developer time.
</p><nav class="pt-12 pb-16 relative z-50 max-xl:pb-20 grid gap-6 md:grid-cols-2">${topAchievements.map((ele) => renderTemplate`<div class="group border border-neutral-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 bg-white"><p class="text-2xl font-semibold text-neutral-900 group-hover:text-orange-500 transition">${ele.impact}</p><p class="text-sm text-neutral-500 mt-1">${ele.metrics}</p><p class="mt-4 text-base font-medium text-neutral-800">${ele.title}</p><p class="text-sm text-neutral-600 mt-2 leading-relaxed">${ele.description}</p><div class="mt-4 h-[2px] w-12 bg-neutral-300 group-hover:bg-orange-500 transition-all duration-300"></div></div>`)}</nav></div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/achievements.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/achievements.astro";
const $$url = "/achievements";

const achievements = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Achievements,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, $$Layout as a, achievements as b, imageConfig as i };
