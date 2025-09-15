import { Routes } from '@angular/router';
import { HomeView } from './views/home/home';

import { Contacto } from './views/contacto/contacto';
import { About } from './views/about/about';
// import { Productos } from './views/productos/productos';
import { Servicios } from './components/servicios/servicios';
import { Proyectos } from './components/proyectos/proyectos';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    component: HomeView,
    title: `Inicio | ${environment.baseUrl.includes('localhost') ? 'Home' : 'Arquitectura Moderna'}`
  },
  {
    path: 'servicios',
    component: Servicios,
    title: 'Contacto - Mi App'
  },
  {
    path: 'proyectos',
    component: Proyectos,
    title: 'Contacto - Mi App'
  },

  {
    path: 'nosotros',
    component: About,
    title: 'Acerca de - Mi App'
  },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Contacto - Mi App'
  },
  // { 
  //   path: 'productos', 
  //   component: Productos,
  //   title: 'Productos - Mi App'
  // },
  // Ruta para páginas no encontradas (404)
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];