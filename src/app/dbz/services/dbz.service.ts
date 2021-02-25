import { Injectable } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {


  private _personajes: Personajes[] = [
    {
      nombre: 'Krilin',
      poder: 800,
    },
    {
      nombre: 'Goku',
      poder: 14500,
    }
  ];

  get personajes(): Personajes [] {
    return [...this._personajes];
  }

  constructor() {
    // console.log('El servicio DBZ funciona...')
    // console.log(this._personajes);
  }



}
