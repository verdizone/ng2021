import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey:string = 'l5riPVpNTboaKKKjqUAe81u9PmKLfRhG';
  private _historial:string[] = [];


  //TODO cambiar el tipado de any por el correspondiente
  public resultados:any[] = [];

  get historial (){
    return [...this._historial];
  }

  constructor (  private http:HttpClient, ) {}

  buscarGifs( query:string ){

    query = query.trim().toLowerCase();

    if (!this._historial.includes( query ) ){

      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

    }

    // console.log(this._historial);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=l5riPVpNTboaKKKjqUAe81u9PmKLfRhG&q=${ query }&limit=10`)
    .subscribe( ( resp:any ) => {
      console.log( resp.data );
      this.resultados = resp.data;
    })



  }


}
