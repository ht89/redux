import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, removeItem } from './counter-list.actions';

@Component({
  selector: 'app-counter-list',
  templateUrl: 'counter-list.component.html',
  styleUrls: []
})

export class CounterListComponent implements OnInit {
  list$;
  newItem: string;
  counter: number;

  constructor(private store: Store<any>) {
    this.counter = 0;

    this.list$ = this.store.select(state => state.counter.list);
  }

  ngOnInit() { }

  add() {
    this.store.dispatch(addItem(this.newItem, this.counter++));

    this.newItem = '';
  }

  remove(id) {
    this.store.dispatch(removeItem(id));
  }
}
