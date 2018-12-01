import { Component, OnInit } from '@angular/core';
import { Jedi } from './jedi.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { addJedi, removeJedi, loadJedis } from './jedi-list.actions';

@Component({
  selector: 'app-jedi-list',
  template: `
    <div *ngFor="let jedi of list$ | async">
      {{ jedi.name }}
      <button (click)="remove(jedi.id)">Remove</button>
    </div>

    <input [(ngModel)]="newJedi" placeholder="" />
    <button (click)="add()">Add</button>
    <button (click)="clear()">Clear</button>
  `
})

export class JediListComponent implements OnInit {
  list$: Observable<Array<Jedi>>;
  counter = 0;
  newJedi = '';

  constructor(private store: Store<AppState>) {
    this.list$ = store.select('jediList');
  }

  ngOnInit() { }

  add() {
    this.store.dispatch(addJedi(this.counter++, this.newJedi));
    this.newJedi = '';
  }

  remove(id) {
    this.store.dispatch(removeJedi(id));
  }

  clear() {
    this.store.dispatch(loadJedis([]));
    this.counter = 0;
  }
}
