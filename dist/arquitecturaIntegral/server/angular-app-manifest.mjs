
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
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "route": "/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 696, hash: '2731e7ea3d1455b34bebf4b6add022d251724eecd7dcc54f7c4a76f88b072ef5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '57ca94e045d014a6bbdef28412b74103bf3ac56dae7d0a681fc3b8900ae6f982', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8213, hash: 'b291dfe8d65f824a9d44ec8ba562f5e891935f2b6e1447439eca388ab3c86568', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 8195, hash: '5f0dad609e0d4d3ed268615564e2eeeab730864ee5775c08c9936028aa4d06f6', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 6871, hash: '0f8c2e55229dd64f2601075d1f08af4f9c1c57af903cc902ac7d4fc4ea4668df', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 6092, hash: '695046e4fe9b9f190d98c7c0b1e0e69518049a8e668b26110f0e9e88afe7804c', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 6883, hash: '10dbbf999e155a159e5bcdae1c3dd0ea8c1a19f675855543a57d0c7408a05a38', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'styles-U3QAQT5S.css': {size: 1718, hash: 'GNAW3qUyoqU', text: () => import('./assets-chunks/styles-U3QAQT5S_css.mjs').then(m => m.default)}
  },
};
