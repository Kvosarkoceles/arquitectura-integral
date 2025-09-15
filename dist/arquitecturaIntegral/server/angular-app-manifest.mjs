
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
    'index.csr.html': {size: 696, hash: 'd57d5156b8954ed94e384e440bbf7671aab1a96c7330597d3a90078e1ef6413b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'a01530bb0a9031111f80aa48132e42b8d0ecbff430e6ad8dedc1bb8c1d405479', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 2932, hash: '1ae52d92738f1f1f52da65f7d6a4336f6abc44ebec84170c5d8f248c00d2c696', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4256, hash: '0d7a21609cf3b35637022b78c6139698f3780a0685c1c86de5f1c10926a24d74', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 2153, hash: '69140c357e5175ca303aa762082d5daa56344294383b864bf2129159bbb5e634', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 2944, hash: 'eb147b7ad2d21b39e9694f6ad16e41db1f83d408c4718d19cb1723ef3e8fad37', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4258, hash: 'ac1066baaf4e6a2c3f56910cc13effd6911223ed86a2bcc603bf5868417a752f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PQZBT2RN.css': {size: 2113, hash: 'QF/afalrsqM', text: () => import('./assets-chunks/styles-PQZBT2RN_css.mjs').then(m => m.default)}
  },
};
