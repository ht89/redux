import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { Counter } from './counter/counter-list/counter.model';
import { counterListReducer } from './counter/counter-list/counter-list.reducer';
import { CounterListComponent } from './counter/counter-list/counter-list.component';
import { FormsModule } from '@angular/forms';

export interface CounterState {
  data: number;
  list: Array<Counter>;
}

const combinedReducers: ActionReducerMap<CounterState> = {
  data: counterReducer,
  list: counterListReducer
};

@NgModule({
  declarations: [CounterComponent, CounterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('counter', combinedReducers)
  ],
  exports: [CounterComponent, CounterListComponent]
})
export class CounterModule { }
