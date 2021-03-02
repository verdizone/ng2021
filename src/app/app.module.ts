import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


//Modules
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular
    BrowserModule,
    HttpClientModule,
    //Third parties...

    //Mis Modulos
    SharedModule,
    GifsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
