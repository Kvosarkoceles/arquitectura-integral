import { Component } from '@angular/core';
import { Home  as HomeComponet} from '../../components/home/home';
import { Servicios } from '../../components/servicios/servicios';
import { Proyectos } from '../../components/proyectos/proyectos';
// import { Nosotros  } from '../../components/nosotros/nosotros';


@Component({
  selector: 'app-contacto',
  imports: [HomeComponet,Servicios,Proyectos],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'             
})
export class Contacto {

}
