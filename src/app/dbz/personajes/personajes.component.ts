import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {


  @Input('personajesData') personajes:Personajes[] = [];



}
