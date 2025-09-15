
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
    'index.csr.html': {size: 696, hash: '02c516d91b7469229cdf35142ead41f27b7835fd66993de1fc40007abe9b055a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'ba6b9d9be0c44a5f73e6365dac4eb55f3e35c3964c8593b581b42d11fe6e0918', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 3008, hash: '02269440ac114fc24aa364c3aea560042826decdc7e6aee70e2b14c8ed0c3f07', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4320, hash: '2b7fb7b4ba550e150406ce10fb7e601c6ad39db8a3c5f95d42c9b654a492ff55', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4338, hash: '9ea810c9f50c7df7321c216620f1e431633ff1d5a4d7b5b0e92a7d98ceb1ab6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 2217, hash: '0a915b793a4e036eb7d5f38622c3a9c0b41d0f2f896bcc6f65c7b2c35a1b0aa5', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 2996, hash: 'a4cd51ea696946a74fd4d1627940555bd222691eff9dcbb54698714cf47b23ff', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'styles-PQZBT2RN.css': {size: 2113, hash: 'QF/afalrsqM', text: () => import('./assets-chunks/styles-PQZBT2RN_css.mjs').then(m => m.default)}
  },
};
