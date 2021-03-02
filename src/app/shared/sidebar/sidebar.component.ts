import { Component } from '@angular/core';
import { GifsService } from '../../gifs/sevices/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial (){
    return this._gifsService.historial;
  }

  constructor(  private _gifsService: GifsService, ){}



}
