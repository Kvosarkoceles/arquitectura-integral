import { Component } from '@angular/core';
import { Home  as HomeComponet} from '../../components/home/home';
import { Servicios } from '../../components/servicios/servicios';
import { Proyectos } from '../../components/proyectos/proyectos';
@Component({
  selector: 'app-homeView',
  imports: [HomeComponet, Servicios, Proyectos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class HomeView {

}
