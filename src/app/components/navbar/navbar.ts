import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  environment = environment;

   menuAbierto = false;
   toggleMenu() {
    console.log('Toggle menu called', this.menuAbierto);
    this.menuAbierto = !this.menuAbierto;
  }


  cerrarMenu() {
    this.menuAbierto = false;
  }
}
