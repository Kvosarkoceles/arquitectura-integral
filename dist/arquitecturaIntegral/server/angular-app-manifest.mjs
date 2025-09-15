
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
    'index.csr.html': {size: 696, hash: '68900a31f3f8fddd98ed1161eef054a941c397af930bc3c26c55dc959090b7cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '75d5f679fca877eefdd9fa863ce49a8dd2ebd8507a17a3425c4af0f0b6a7d01a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 6333, hash: 'ac1dd0635a2c28f54f5484796c603cf98025beddbe86bf370dabce5149b58bfe', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 8436, hash: 'de0a6de3bb179cf67ef3ce00d07339067c92f76f37df1eda6e89db377b97147b', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8454, hash: '0ff745ba3ba79397a7b95702b3581cd8e8ab6189357f739a61a9079730ff7b81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 7112, hash: '3956aaf38cb2de955f972f70411dfcf0beba0ac09e0f95ea9b9f248ff6721f31', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 7124, hash: 'aa261b5b292e60d627cadc76ffe176557d51ae4d09ceabaeea9d687e1adc6ba2', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'styles-U3QAQT5S.css': {size: 1718, hash: 'GNAW3qUyoqU', text: () => import('./assets-chunks/styles-U3QAQT5S_css.mjs').then(m => m.default)}
  },
};
