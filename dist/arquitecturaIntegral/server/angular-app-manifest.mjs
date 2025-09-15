
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
    'index.csr.html': {size: 696, hash: '8cc72a99de0c931e81aa6a5f7853b38b5fc8ca93bedb977cbb3304f88d226587', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '0ef6e4c281c28934d6b964acac786b4de4c9640ce16ecccd1c3976ad86786613', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 6883, hash: 'a4e8ae63ca4c9ad8d20ec01203700cea1fbce7cac13c36826ae356e251163967', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 8195, hash: 'edcf589223f4c2f74aa657757391e9af3cc4c6c8df03cf441547b4a5655fc5de', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 6092, hash: 'c694690b2129650a7ea725a657eb9dbcb3ea23da3d9f284c1bbed77dd39232fe', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 6871, hash: '5f6965a53b5cd49b145ac6c91aeb542b61d2574a1fda60231dd008896aefffc5', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8213, hash: 'e4f383d2df474c312d569de11df09dcaf56dccdd071fcd2742bf9611cfa573d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U3QAQT5S.css': {size: 1718, hash: 'GNAW3qUyoqU', text: () => import('./assets-chunks/styles-U3QAQT5S_css.mjs').then(m => m.default)}
  },
};
