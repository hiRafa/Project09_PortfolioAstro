export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('./pages/agendae_6230906f.mjs').then(n => n.a);

export { page };
