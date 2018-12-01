import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './reducer';
import { jediListReducer } from './jedi/jedi-list/jedi-list.reducer';
import { JediModule } from './jedi/jedi.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      jediList: jediListReducer
    }),
    JediModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
