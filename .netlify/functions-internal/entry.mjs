import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_eb10f0fd.mjs';
import 'preact';
import 'preact-render-to-string';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_3bb9ff26.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_e8dc6f65.mjs');
const _page1  = () => import('./chunks/index_139ef13f.mjs');
const _page2  = () => import('./chunks/solution_stwstw_65a48b66.mjs');
const _page3  = () => import('./chunks/achievements_b764f13a.mjs');
const _page4  = () => import('./chunks/solution_kat_8d95c9c5.mjs');
const _page5  = () => import('./chunks/solutions_74228a3e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/solution_stwstw.astro", _page2],["src/pages/achievements.astro", _page3],["src/pages/solution_kat.astro", _page4],["src/pages/solutions.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
