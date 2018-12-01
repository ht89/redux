import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './counter/counter.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducer)
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
