import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_3bb9ff26.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.297f57b1.js"}],"styles":[{"type":"external","src":"/_astro/achievements.78b05b6c.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.297f57b1.js"}],"styles":[{"type":"external","src":"/_astro/achievements.78b05b6c.css"},{"type":"inline","content":".project-page[data-astro-cid-h4wkurj7]{max-width:900px;margin:auto;padding:2rem;font-family:system-ui,sans-serif}.project-header[data-astro-cid-h4wkurj7] h1[data-astro-cid-h4wkurj7]{font-size:2.5rem;margin-bottom:.2rem}.project-header[data-astro-cid-h4wkurj7] h2[data-astro-cid-h4wkurj7]{font-size:1.5rem;margin-bottom:1rem;color:#555}.project-thumbnail[data-astro-cid-h4wkurj7]{width:100%;margin-top:1rem;border-radius:8px}section[data-astro-cid-h4wkurj7]{margin-top:3rem}h2[data-astro-cid-h4wkurj7]{font-size:1.8rem;margin-bottom:1rem}ul[data-astro-cid-h4wkurj7],ol[data-astro-cid-h4wkurj7]{margin-left:1.5rem}ul[data-astro-cid-h4wkurj7] li[data-astro-cid-h4wkurj7],ol[data-astro-cid-h4wkurj7] li[data-astro-cid-h4wkurj7]{margin-bottom:.5rem}img[data-astro-cid-h4wkurj7]{width:100%;margin-top:1rem;border-radius:6px}.project-links[data-astro-cid-h4wkurj7]{margin-top:3rem}.project-links[data-astro-cid-h4wkurj7] a[data-astro-cid-h4wkurj7]{margin-right:1.5rem;color:#0070f3;text-decoration:none;font-weight:700}.project-links[data-astro-cid-h4wkurj7] a[data-astro-cid-h4wkurj7]:hover{text-decoration:underline}\n"}],"routeData":{"route":"/solution_stwstw","type":"page","pattern":"^\\/solution_stwstw\\/?$","segments":[[{"content":"solution_stwstw","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solution_stwstw.astro","pathname":"/solution_stwstw","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.297f57b1.js"}],"styles":[{"type":"external","src":"/_astro/achievements.78b05b6c.css"}],"routeData":{"route":"/achievements","type":"page","pattern":"^\\/achievements\\/?$","segments":[[{"content":"achievements","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/achievements.astro","pathname":"/achievements","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.297f57b1.js"}],"styles":[{"type":"external","src":"/_astro/achievements.78b05b6c.css"},{"type":"inline","content":".nav-menu[data-astro-cid-s7jxfdyf]{width:220px;padding:1rem;font-family:sans-serif;position:fixed;bottom:40px;right:20px;z-index:99}.nav-menu[data-astro-cid-s7jxfdyf] ul[data-astro-cid-s7jxfdyf]{list-style:none;margin:0;padding:0}.nav-menu[data-astro-cid-s7jxfdyf] li[data-astro-cid-s7jxfdyf]{margin:.25rem 0;background-color:#ffffffd6}.nav-menu[data-astro-cid-s7jxfdyf] a[data-astro-cid-s7jxfdyf]{display:flex;align-items:center;text-decoration:none;color:#333;padding:.5rem;transition:color .2s ease}.nav-menu[data-astro-cid-s7jxfdyf] a[data-astro-cid-s7jxfdyf]:hover{color:#0070f3}.nav-menu[data-astro-cid-s7jxfdyf] a[data-astro-cid-s7jxfdyf].active{font-weight:600;color:#0070f3}.nav-menu[data-astro-cid-s7jxfdyf] .bar[data-astro-cid-s7jxfdyf]{display:inline-block;width:4px;height:100%;background:#0070f3;margin-right:.5rem;border-radius:2px}.project-page[data-astro-cid-spfsmtdv]{max-width:900px;margin:auto;padding:2rem;font-family:system-ui,sans-serif}.project-header[data-astro-cid-spfsmtdv] h1[data-astro-cid-spfsmtdv]{font-size:2.5rem;margin-bottom:.2rem}.project-header[data-astro-cid-spfsmtdv] h2[data-astro-cid-spfsmtdv]{font-size:1.5rem;margin-bottom:1rem;color:#555}.project-thumbnail[data-astro-cid-spfsmtdv]{width:100%;margin-top:1rem;border-radius:8px}section[data-astro-cid-spfsmtdv]{margin-top:3rem}h2[data-astro-cid-spfsmtdv]{font-size:1.8rem;margin-bottom:1rem;font-weight:700}h3[data-astro-cid-spfsmtdv]{font-size:1.2rem;font-weight:700;margin-top:8px}ul[data-astro-cid-spfsmtdv]{list-style-type:disc;padding-left:20px;margin:10px 0}ol[data-astro-cid-spfsmtdv]{list-style-type:decimal;padding-left:30px;margin:10px 0;counter-reset:item}ul[data-astro-cid-spfsmtdv] li[data-astro-cid-spfsmtdv],ol[data-astro-cid-spfsmtdv] li[data-astro-cid-spfsmtdv]{margin-bottom:.5rem}.project-links[data-astro-cid-spfsmtdv]{margin-top:3rem}.project-links[data-astro-cid-spfsmtdv] a[data-astro-cid-spfsmtdv]{margin-right:1.5rem;color:#0070f3;text-decoration:none;font-weight:700}.project-links[data-astro-cid-spfsmtdv] a[data-astro-cid-spfsmtdv]:hover{text-decoration:underline}\n"}],"routeData":{"route":"/solution_kat","type":"page","pattern":"^\\/solution_kat\\/?$","segments":[[{"content":"solution_kat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solution_kat.astro","pathname":"/solution_kat","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.297f57b1.js"}],"styles":[{"type":"external","src":"/_astro/achievements.78b05b6c.css"}],"routeData":{"route":"/solutions","type":"page","pattern":"^\\/solutions\\/?$","segments":[[{"content":"solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/solutions.astro","pathname":"/solutions","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/achievements.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/achievements@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_kat.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/solution_kat@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solution_stwstw.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/solution_stwstw@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/pages/solutions.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/solutions@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_e200c203.mjs","/src/pages/index.astro":"chunks/pages/index_7c8dded2.mjs","/src/pages/solution_kat.astro":"chunks/pages/solution_kat_7e60ea69.mjs","/src/pages/solution_stwstw.astro":"chunks/pages/solution_stwstw_00101655.mjs","/src/pages/solutions.astro":"chunks/pages/solutions_a3ed1aca.mjs","\u0000@astrojs-manifest":"manifest_eb10f0fd.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_e8dc6f65.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_139ef13f.mjs","\u0000@astro-page:src/pages/solution_stwstw@_@astro":"chunks/solution_stwstw_65a48b66.mjs","\u0000@astro-page:src/pages/achievements@_@astro":"chunks/achievements_b764f13a.mjs","\u0000@astro-page:src/pages/solution_kat@_@astro":"chunks/solution_kat_8d95c9c5.mjs","\u0000@astro-page:src/pages/solutions@_@astro":"chunks/solutions_74228a3e.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/stw.md?astroContentCollectionEntry=true":"chunks/stw_301b410d.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects_data/kat.json?astroDataCollectionEntry=true":"chunks/kat_35a8d43d.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects_data/stwstw.json?astroDataCollectionEntry=true":"chunks/stwstw_0b3782e8.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/stw.md?astroPropagatedAssets":"chunks/stw_d14958e2.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/content/projects/stw.md":"chunks/stw_1c0cf4ae.mjs","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/src/components/ButtonToggleHeader.tsx":"_astro/ButtonToggleHeader.e69056cf.js","@astrojs/preact/client.js":"_astro/client.6ee00fd0.js","C:/Users/rafae/OneDrive/Área de Trabalho/Programming/Projects_Year3/Project09_PortfolioAstro/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.efb1079c.js","/astro/hoisted.js?q=0":"_astro/hoisted.297f57b1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/achievements.78b05b6c.css","/favicon.svg","/_redirects","/_astro/a3.c75181c7.css","/_astro/agendae.b956e83d.css","/_astro/ButtonToggleHeader.e69056cf.js","/_astro/client.6ee00fd0.js","/_astro/hoisted.297f57b1.js","/_astro/hooks.module.5e7ec7e4.js","/_astro/preact.module.ee438079.js","/_astro/signals.module.efb1079c.js","/Images/a3_2024-01.webp","/Images/a3_2024-02.webp","/Images/a3_project01.webp","/Images/a3_project02.webp","/Images/a3_project03.webp","/Images/a3_projectoshipura.webp","/Images/black_bar.svg","/Images/buttonHeader.svg","/Images/index-rafa2.png","/Images/index-rafa2.webp","/Images/index-waves.svg","/Images/logo_ANGULAR.png","/Images/logo_ArtStation2.png","/Images/logo_ASTRO.png","/Images/logo_CSS.png","/Images/logo_DOCKER.png","/Images/logo_figma.svg","/Images/logo_FIREBASE.png","/Images/logo_github.png","/Images/logo_GMAIL.png","/Images/logo_GO.png","/Images/logo_HTML.png","/Images/logo_HTMX.png","/Images/logo_IONIC.png","/Images/logo_JS.png","/Images/logo_JWT.png","/Images/logo_linkedin.png","/Images/logo_MONGODB.png","/Images/logo_MUI.png","/Images/logo_NEST.png","/Images/logo_NEST.svg","/Images/logo_NEXT.png","/Images/logo_REACT.png","/Images/logo_REDIS.png","/Images/logo_REDIS.webp","/Images/logo_SASS.png","/Images/logo_TYPE.png","/Images/orange_bar.svg","/Images/project01_thumbnail.jpg","/Images/project01_thumbnail.webp","/Images/project02_thumbnail.jpg","/Images/project02_thumbnail.webp","/Images/project03_thumbnail.webp","/Images/project04_thumbnail.jpg","/Images/project04_thumbnail.webp","/Images/project05_thumbnail.webp","/Images/projectSTW_thumbnail.png","/Images/projectSTW_thumbnail.webp","/Images/project_oldportfolio.jpg","/Images/project_oldportfolio.webp","/Images/rafa.png","/Images/shape-circle.svg","/Images/shape-square.svg","/Images/solution_kat_architecture.webp","/Images/solution_kat_cloudcannon.webp","/Images/solution_kat_thumbnail.webp","/Images/solution_kat_workflow.webp","/Images/stars-bg.svg","/Images/stars-black-topright.svg","/Images/stars-border.svg","/Images/stars-bottomleft-index.svg","/Images/stars-bottomleft.svg","/Images/stars-right-bl.svg","/Images/stars-right-index.svg","/Images/stars-right-tl.svg","/Images/stars-topleft-index.svg","/Images/stars-topleft.svg","/Images/stars-topright-black.svg","/Images/stars-topright-road.svg"]});

export { manifest };
