import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                        */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, F as Fragment, j as renderSlot, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, u as unescapeHTML, p as renderHead } from '../astro_3bb9ff26.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_3d5f1d40.mjs';
import 'clsx';
/* empty css                             *//* empty css                             */
const $$Astro$f = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
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

const $$Astro$e = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedimages = await Promise.all(
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
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedimages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/rafae/OneDrive/%C3%81rea%20de%20Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$d = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$H1;
  const { text, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(className, "class")}${spreadAttributes(rest)}>${text}</h1>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/H1.astro", void 0);

const $$Astro$c = createAstro();
const $$ProjectEmailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ProjectEmailIcon;
  return renderTemplate`${maybeRenderHead()}<a class="flex flex-col items-center w-fit" id="email-icon" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/images/logo_GMAIL.png", "width": 144, "height": 213, "format": "png", "alt": "gmail logo", "class": "url-logo" })}</a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectEmailIcon.astro", void 0);

const $$Astro$b = createAstro();
const $$ProjectGithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ProjectGithubIcon;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex flex-col items-center w-fit" target="_blank"><i class="fa-brands fa-github url-logo-black url-logo-github"></i></a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectGithubIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$ProjectLinkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ProjectLinkedin;
  return renderTemplate`${maybeRenderHead()}<a href="https://www.linkedin.com/in/rafael-hirashiki-7a5733170/" class="flex flex-col items-center w-fit" target="_blank">${renderComponent($$result, "Image", $$Image, { "src": "/images/logo_linkedin.png", "width": 144, "height": 213, "format": "png", "alt": "linkedin logo", "class": "url-logo" })}</a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLinkedin.astro", void 0);

const $$Astro$9 = createAstro();
const $$ContactIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ContactIcons;
  const { class: className, classp: classNameP } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center"><li${addAttribute(`flex gap-4 mt-4 ${className}`, "class")}>${renderComponent($$result, "ProjectGithubIcon", $$ProjectGithubIcon, { "url": "https://github.com/hiRafa" })}${renderComponent($$result, "ProjectLinkedin", $$ProjectLinkedin, {})}${renderComponent($$result, "ProjectEmailIcon", $$ProjectEmailIcon, {})}</li><p${addAttribute(`pt-2 ${classNameP}`, "class")}>Get in touch with me!</p></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ContactIcons.astro", void 0);

const $$Astro$8 = createAstro();
const $$RafaPic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$RafaPic;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Image", $$Image, { "src": "/images/rafa.png", "width": 450, "height": 450, "format": "webp", "alt": "Japanese looking guy from Brazil wearing stylish clothes", "class": "rounded-2x1 aspect-thumbnail object-cover rounded-full m-auto" })}${renderComponent($$result, "ContactIcons", $$ContactIcons, { "classp": "text-center", "class": "justify-center" })}</div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Rafa-pic.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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
      path: "/roadmap",
      navTitle: "Career & Roadmap",
      navSubtitle: "to INFINITY and Beyond!"
    },
    {
      path: "/a3",
      navTitle: "Works at A3",
      navSubtitle: "Frontend Engineer"
    },
    {
      path: "/agendae",
      navTitle: "Works at Agendae+",
      navSubtitle: "System Engineer (Backend)"
    },
    {
      path: "/projects2022",
      navTitle: "Projects 2022",
      navSubtitle: "Frontend Coder",
      navTech: "HTML/CSS/JS/Next.js"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(className, "class")}${spreadAttributes(rest)} id="myHeader" data-astro-cid-3ef6ksr2><!-- <p class="absolute bottom-0">powered by Astro</p> -->${renderComponent($$result, "Image", $$Image, { "src": headerIndex ? "/images/stars-topleft-index.svg" : "/images/stars-topleft.svg", "width": 220, "height": 40, "format": "svg", "alt": "stars bg", "class": "absolute top-4 z-10", "data-astro-cid-3ef6ksr2": true })}<div${addAttribute(`${!headerIndex && "header-in-grid"} relative col-start-2 col-span-full grid gap-4 justify-around h-full pt-10 pr-4 max-lg:col-start-2 max-lg:col-span-10 max-md:justify-center max-md:p-0`, "class")} data-astro-cid-3ef6ksr2><img${addAttribute(headerIndex ? "/images/stars-bottomleft-index.svg" : "/images/stars-bottomleft.svg", "src")}${addAttribute(440, "width")}${addAttribute(450, "height")} alt="stars bg" class="absolute bottom-0 -left-6 z-10" data-astro-cid-3ef6ksr2>${headerIndex ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`<section class="self-start" data-astro-cid-3ef6ksr2>${renderComponent($$result2, "H1", $$H1, { "text": "RAFAEL HIRASHIKI", "index": true, "class": "text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-bold", "data-astro-cid-3ef6ksr2": true })}<p class="max-lg: text-sm" data-astro-cid-3ef6ksr2>Casual Dancer</p></section><section class="text-2xl max-lg:text-lg max-md:text-lg max-sm:text-base font-bold" data-astro-cid-3ef6ksr2><h2 class="pt-4 pb-4" data-astro-cid-3ef6ksr2><i class="fa-regular fa-circle" data-astro-cid-3ef6ksr2></i> Web Frontend Engineer
</h2><h3 class="pb-4" data-astro-cid-3ef6ksr2><i class="fa-solid fa-moon" data-astro-cid-3ef6ksr2></i> System Engineer (graduating)
</h3></section><section class="" data-astro-cid-3ef6ksr2><p class="pb-6 text-xl max-lg:text-base max-md:text-sm " data-astro-cid-3ef6ksr2>
From Brazil, Based in Tokyo. <br data-astro-cid-3ef6ksr2>
Passionate for connecting stars, understanding problems, finding
              solutions, upgrading performances and flows.
</p><p data-astro-cid-3ef6ksr2>Special interest in health and nature fields</p></section><nav class="self-end justify-self-end relative z-50 pb-20 max-md:pb-10 max-md:pt-4" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li class="" data-astro-cid-3ef6ksr2><a href="/roadmap" class="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl font-bold flex flex-nowrap justify-center items-center gap-4 text-right" data-astro-cid-3ef6ksr2><p class="underline" data-astro-cid-3ef6ksr2>Career & Roadmap</p><div class="star-container" data-astro-cid-3ef6ksr2><div class="star-bar" data-astro-cid-3ef6ksr2></div><i class="fa-solid fa-diamond" data-astro-cid-3ef6ksr2></i></div></a><div class="relative z-50 flex justify-end gap-4 pr-16" data-astro-cid-3ef6ksr2><a href="https://www.behance.net/rafael-hiro" target="_blank" data-astro-cid-3ef6ksr2>
Behance
</a><a href="https://www.artstation.com/hirashiki" target="_blank" data-astro-cid-3ef6ksr2>
Artstation
</a></div></li>${renderComponent($$result2, "ContactIcons", $$ContactIcons, { "class": "justify-end", "classp": "text-end", "data-astro-cid-3ef6ksr2": true })}</ul></nav>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ButtonToggleHeader", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ButtonToggleHeader.tsx", "client:component-export": "default" })}${renderComponent($$result2, "RafaPic", $$RafaPic, { "class": "relative z-50 w-4/6 m-auto h-fit max-lg:w-6/6 ", "data-astro-cid-3ef6ksr2": true })}${renderComponent($$result2, "H1", $$H1, { "text": "RAFAEL HIRASHIKI", "index": false, "class": "absolute bottom-1/4 -left-10 -rotate-90 w-0 whitespace-nowrap text-3xl  max-xl:text-2xl max-lg:text-3xl max-md:text-2xl font-bold  m-auto", "data-astro-cid-3ef6ksr2": true })}<nav class="pb-16 relative z-50  max-xl:pb-20 self-end" data-astro-cid-3ef6ksr2><ul class="pr-4" data-astro-cid-3ef6ksr2>${navObj.map((ele) => renderTemplate`<li data-astro-cid-3ef6ksr2>${ele.path === "/projects2022" && renderTemplate`<p class="li-year" data-astro-cid-3ef6ksr2>2022 & 2023</p>`}<a${addAttribute(ele.path, "href")} class="text-xl max-xl:text-lg max-lg:text-xl font-bold flex flex-nowrap justify-between items-center gap-4" data-astro-cid-3ef6ksr2><p${addAttribute(`flex flex-col items-start ${pathname === ele.path && "clr-brand-orange"}`, "class")} data-astro-cid-3ef6ksr2><span class="li-projectTitle" data-astro-cid-3ef6ksr2>${ele.navTitle}</span><span class="li-role" data-astro-cid-3ef6ksr2>${ele.navSubtitle}</span></p><div class="star-container" data-astro-cid-3ef6ksr2><div${addAttribute(`star-bar ${pathname === ele.path && "big-bar clr-brand-orange"} `, "class")} data-astro-cid-3ef6ksr2></div><i${addAttribute(`fa-solid fa-diamond ${pathname === ele.path && "big-diamond clr-brand-orange"} `, "class")} data-astro-cid-3ef6ksr2></i></div></a></li>`)}</ul></nav>` })}`}</div></header>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/a3eeoPF.md": () => import('../a3eeoPF_01b98dd7.mjs'),"/src/content/projects/agendae.md": () => import('../agendae_85d5a429.mjs'),"/src/content/projects/oldportfolio.md": () => import('../oldportfolio_1225f8d2.mjs'),"/src/content/projects/project01.md": () => import('../project01_28681793.mjs'),"/src/content/projects/project02.md": () => import('../project02_dacbf6d2.mjs'),"/src/content/projects/project03.md": () => import('../project03_0ac3b43c.mjs'),"/src/content/projects/project04.md": () => import('../project04_cb543d65.mjs'),"/src/content/projects/stw.md": () => import('../stw_a3606d36.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects":{"type":"content","entries":{"agendae":"/src/content/projects/agendae.md","oldportfolio":"/src/content/projects/oldportfolio.md","project01":"/src/content/projects/project01.md","a3eeopf":"/src/content/projects/a3eeoPF.md","project02":"/src/content/projects/project02.md","project03":"/src/content/projects/project03.md","project04":"/src/content/projects/project04.md","stw":"/src/content/projects/stw.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/a3eeoPF.md": () => import('../a3eeoPF_706c8219.mjs'),"/src/content/projects/agendae.md": () => import('../agendae_6365f0f1.mjs'),"/src/content/projects/oldportfolio.md": () => import('../oldportfolio_4dc10ed2.mjs'),"/src/content/projects/project01.md": () => import('../project01_92c579ce.mjs'),"/src/content/projects/project02.md": () => import('../project02_a5c8c800.mjs'),"/src/content/projects/project03.md": () => import('../project03_6c1990cd.mjs'),"/src/content/projects/project04.md": () => import('../project04_7ded36b7.mjs'),"/src/content/projects/stw.md": () => import('../stw_eb2f17bd.mjs')

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

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, headerIndex } = Astro2.props;
  const projects = await getCollection("projects");
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><title>RAFAEL HIRASHIKI, Frontend Engineer's Nifty Journey</title><meta name="description" content=" 
    Working to be a FullStack Engineer, specialized as a Frontend for now.
    Shooting for the stars. 
    \`If I give it my all, will it pay off?
    Workin' overtime, no days off
    All these shootin' stars in the dark (Yeah)
    All these shootin' stars in the dark, make a wish (Yeah)
    Takin' off from the ground, it's amazin'
    So outta this world, I'm in space\`"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- OGP --><meta property="og:title" content="RAFAEL HIRASHIKI, a Frontend Engineer's Nifty Journey"><meta property="og:type" content="website portfolio"><meta property="og:url" content="https://hirashiki-rafael-portfolio.netlify.app/"><meta property="og:description" content="
    Working to be a FullStack Engineer, specialized as a Frontend for now.
    Shooting for the stars. 
    \`If I give it my all, will it pay off?
    Workin' overtime, no days off
    All these shootin' stars in the dark (Yeah)
    All these shootin' stars in the dark, make a wish (Yeah)
    Takin' off from the ground, it's amazin'
    So outta this world, I'm in space\`"><meta property="og:image" content="../../public/images/index-rafa2.webp">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">${renderHead()}</head><body${addAttribute(`grid grid-cols-12 ${headerIndex && "clr-bg body-rows"} overflow-x-hidden css-no-scrollbar`, "class")}>${headerIndex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "headerIndex": headerIndex, "class": `relative w-full css-min-h100 col-start-1 col-span-5 grid grid-cols-8 max-lg:min-h-min max-lg:grid-cols-12 css-body-row-2 max-lg:col-span-full` })}${renderComponent($$result2, "Main", $$Main, { "projects": projects, "class": `w-full h-fit m-auto col-span-7 css-no-scrollbar css-body-row-1 max-lg:w-12/12 max-lg:my-0 max-lg:top-12 max-sm:col-span-full ` }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`}${!headerIndex && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "headerIndex": headerIndex, "class": `css-hideHeader max-lg:absolute col-start-1 col-span-3 max-lg:col-span-3 clr-bg pt-8 grid grid-cols-5 max-lg:min-h-screen` })}${renderComponent($$result2, "Main", $$Main, { "projects": projects, "class": `w-full h-screen pb-8 col-span-9 max-lg:col-start-1 max-lg:col-span-full overflow-y-scroll pt-16 css-no-scrollbar grid grid-cols-12` }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`}</body></html>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProjectLayoutLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectLayoutLinks;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" absolute top-8 pl-4 gap-y-4 w-6/6 z-0" data-astro-cid-icmde3tq><div class="bars-container col-start-1 col-span-full" data-astro-cid-icmde3tq><div class="relative h-bar-container" data-astro-cid-icmde3tq><i class="fa-solid fa-circle star -top-3 -left-1 text-xl opacity-100" data-astro-cid-icmde3tq></i><div class="h-bar" data-astro-cid-icmde3tq></div><i class="fa-solid fa-circle star -top-3 -right-4 text-xl opacity-100" data-astro-cid-icmde3tq></i><div class="d-barup" data-astro-cid-icmde3tq></div></div><div class="relative v-bar-container" data-astro-cid-icmde3tq><i class="fa-solid fa-circle star -top-2 -left-2 text-xl opacity-100" data-astro-cid-icmde3tq></i><div class="v-bar" data-astro-cid-icmde3tq></div><i class="fa-solid fa-circle star -bottom-2 -left-2 text-xl opacity-100" data-astro-cid-icmde3tq></i></div><div class="d-bar-container" data-astro-cid-icmde3tq><div class="d-bar" data-astro-cid-icmde3tq></div></div></div></div>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ProjectLayout-Links.astro", void 0);

const $$Astro$2 = createAstro();
const $$H2ProjectTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$H2ProjectTitle;
  const { text, class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(className, "class")}${spreadAttributes(rest)}>${text}</h2>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/H2project-title.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardTitle;
  const { project, i } = Astro2.props;
  const date = project.data ? project.data.year : project.year;
  const title = project.data ? project.data.projectTitle : project.title;
  const url = project.data ? project.data.url : project.url;
  return renderTemplate`${maybeRenderHead()}<a class="flex items-center mb-4 gap-3"${addAttribute(url, "href")} target="_blank">${renderComponent($$result, "H2ProjectTitle", $$H2ProjectTitle, { "text": `${i + 1}.${title} ${date}`, "class": "italic text-2xl font-bold max-md:text-lg" })}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/CardTitle.astro", void 0);

const $$Astro = createAstro();
const $$A3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$A3;
  const projects = [
    {
      tech: "Laravel",
      title: "eeo Plataform Page Renewal",
      year: "2024",
      url: "https://eeo.today/",
      thumbnail: "a3_2024-02",
      problems: [
        "Worked with an overseas team to migrate the front end from Astro.js to a Laravel project.",
        "Reestructured components and file queueing to improve performance."
      ]
    },
    {
      tech: "Wordpress",
      title: "A3 corporate site Renewal",
      year: "2024",
      url: "https://athree3.com/",
      thumbnail: "a3_2024-01",
      problems: [
        "Created and planned all pages, components, and structures for future updates from scratch.",
        "Developed reusable components to ensure consistency across multiple pages.",
        "Created custom fields for easy content updates by admins.",
        "Maintained consistent design and CSS variables across all pages."
      ]
    },
    {
      tech: "Symfony",
      title: "eeo Store Special Products Page",
      year: "2024",
      url: "https://eeo.today/store/101/specialfeature/oshiplus",
      thumbnail: "a3_projectoshipura",
      problems: [
        "Complex design, and big design differences between Mobile and Desktop",
        "Ensured Design Functionality, Responsiveness, and Performance."
      ]
    },
    {
      tech: "Astro.js",
      title: "eeo Cafe Branding Renewal Page",
      year: "2023",
      url: "https://eeo.today/graffartcafe/",
      thumbnail: "a3_project02",
      problems: [
        "Optimized My First Page as a Frontend Engineer.",
        "Customized Splide.js library to allow sliders within each slide of a slider",
        "Resized and Converted Heavy images to WebP for Optimization.",
        "Maximized Page Speed Despite Numerous Large images and Carousels.",
        "Enhanced SEO with Proper HTML Tags, Especially H1.",
        "Followed HTML Best Practices for SEO and Accessibility.",
        "Ensured Design Functionality, Responsiveness, and Performance.",
        "Contributed to the Design Process."
      ]
    },
    {
      tech: "HTML, CSS, JQuery",
      title: "eeo Stage Page Branding Renewal",
      year: "2023",
      url: "https://eeo.today/stage/",
      thumbnail: "a3_project01",
      problems: [
        "Solved Twitter Widget Interfering in the Page Performance Loading.",
        "Adapted Design Concepts to Better Solutions on The Frontend for FCP, LCP, etc.",
        "Reached Above 90 Points in Performance During the Release Time.",
        "Applied Downloaded Fonts in WOFF2 Format to Improve Page Performance."
      ]
    },
    {
      tech: "HTML, CSS, Symfony",
      title: "eeo Store e-commerce UI Renewal, Major update",
      year: "2023",
      url: "https://eeo.today/store/101/",
      thumbnail: "a3_project03",
      problems: [
        "Tackled my first major project at A3 as a Frontend Engineer.",
        "Quickly learned to navigate and understand a PHP/Symfony project with minimal guidance, successfully implementing all requested updates.",
        "Improved code maintainability by refactoring HTML, CSS/SASS, and JS/jQuery to eliminate redundancy.",
        "Removed a significant number of unnecessary HTML elements and CSS rules.",
        "Upgraded from Slick Carousel to Swiper Carousel for better performance and customization.",
        "Gained experience working with GitHub branches, as well as local, test, and production environments.",
        "Independently resolved configuration issues on my local environment after initial setup instructions"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RAFAEL HIRASHIKI's Main Projects at A3" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLayoutLinks", $$ProjectLayoutLinks, {})}${maybeRenderHead()}<div class="relative z-50 col-start-2 col-span-10 max-sm:col-start-3 max-sm:col-span-9"><p class="italic text-2xl clr-brand-orange">Works at A3</p>${projects?.map((project, i) => renderTemplate`<div class="mt-10 mb-20">${renderComponent($$result2, "CardTitle", $$CardTitle, { "i": i, "project": project })}<a${addAttribute(project.url, "href")} target="_blank" class="relative z-50 card-height block">${renderComponent($$result2, "Image", $$Image, { "src": `/images/${project.thumbnail}.webp`, "width": 1100, "height": 940, "format": "webp", "alt": "", "class": "w-auto" })}<div class="relative -bottom-4 -right-4 css-glass-bg font-bold w-fit ml-auto text-right css-glass-bg px-6 py-8 mt-8"><h3>${project.tech}</h3><br><h3>Solved Challenges</h3><ul>${project.problems?.map((bullet) => renderTemplate`<li>❍ ${bullet}</li>`)}</ul></div></a></div>`)}</div>` })}`;
}, "C:/Users/rafae/OneDrive/\xC1rea de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/a3.astro", void 0);

const $$file = "C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/a3.astro";
const $$url = "/a3";

const a3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$A3,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardTitle as $, $$Image as a, $$ProjectLayoutLinks as b, $$Layout as c, $$H2ProjectTitle as d, a3 as e, getEntry as g, imageConfig as i };
