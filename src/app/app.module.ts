import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';


// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
