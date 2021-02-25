import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
// import '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo: Personajes = {
    nombre: 'Maestro Roshi',
    poder: 900,
  };

  constructor(){  }

}
