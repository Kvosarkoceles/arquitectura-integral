
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 696, hash: '46983f52b2f4a4fc8449c42d1ade8f8ab32672af1098ef034e627ca7f4ae5f98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '1f6776f46a684c14fc274a4a6c058d6a5369425583edab8ca92e20b589256363', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5165, hash: 'f4f0310b8e30f51a3af0deabaf1f3fa443ecd772e6fe67b8b5793ac7fd77c769', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PQZBT2RN.css': {size: 2113, hash: 'QF/afalrsqM', text: () => import('./assets-chunks/styles-PQZBT2RN_css.mjs').then(m => m.default)}
  },
};
