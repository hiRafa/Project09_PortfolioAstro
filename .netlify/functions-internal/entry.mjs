import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ff369759.mjs';
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

const _page0  = () => import('./chunks/generic_1a259b7b.mjs');
const _page1  = () => import('./chunks/index_b8ad3658.mjs');
const _page2  = () => import('./chunks/projects2022_b1826083.mjs');
const _page3  = () => import('./chunks/agendae_0cd8c215.mjs');
const _page4  = () => import('./chunks/roadmap_7a21115a.mjs');
const _page5  = () => import('./chunks/a3_a8239021.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects2022.astro", _page2],["src/pages/agendae.astro", _page3],["src/pages/roadmap.astro", _page4],["src/pages/a3.astro", _page5]]);
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
