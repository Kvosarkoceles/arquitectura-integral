import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Servicios } from './components/servicios/servicios';
import { Proyectos } from './components/proyectos/proyectos';
import { Nosotros } from './components/nosotros/nosotros';
import { Contacto } from './components/contacto/contacto';
@Component({
  selector: 'app-root',
  imports: [Navbar,Home, Footer, Servicios, Proyectos, Nosotros, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('arquitecturaIntegral');
}
