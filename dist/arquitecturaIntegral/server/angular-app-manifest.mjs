
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 696, hash: 'f408b846d106787dff3273b7935f00a48ae4966f4f431a3ba835ba58d73b9ad9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '589839c2b09c7dfa8d29881a39f5634d3909e2e6d458d5c17c5ed353c0ba14ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5280, hash: '55cbe05538d3670fd1a0668859b76b12798949bc8d9d20992fef303e09b6d12b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 2167, hash: 'b788e156af5fce04c5cc03837f24deac93e95a914a01d92d0e8b56f52fa91791', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5280, hash: '55cbe05538d3670fd1a0668859b76b12798949bc8d9d20992fef303e09b6d12b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 2163, hash: 'f8089a78d0e3015d8212bf84730fdd4b86dc31f446bce2ea0d1a52c634b32c35', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2155, hash: 'b8eb7f2133c06c269bdb1a46ec521f1b369e963336e04fb0833bf7a9465590b7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-PQZBT2RN.css': {size: 2113, hash: 'QF/afalrsqM', text: () => import('./assets-chunks/styles-PQZBT2RN_css.mjs').then(m => m.default)}
  },
};
