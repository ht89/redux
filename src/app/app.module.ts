import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { JediModule } from './jedi/jedi.module';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // retain the last 25 states
    }),
    CounterModule,
    JediModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
