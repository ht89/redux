import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './reducer';
import { jediListReducer } from './jedis/jedi-list.reducer';
import { JediListComponent } from './jedis/jedi-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JediListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      jediList: jediListReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
