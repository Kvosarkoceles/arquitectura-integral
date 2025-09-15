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

   menuAbierto = true;
  cerrarMenu() {
    this.menuAbierto = false;
  }
}
