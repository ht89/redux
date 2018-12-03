import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  template: `
    <input [(ngModel)]="user.name" />

    <button (click)="save.emit(user)">Save</button>
  `
})

export class EditUserComponent implements OnInit {
  private _user;

  @Input() get user() {
    return this._user;
  }

  set user(val) {
    this._user = Object.assign({}, val);
  }

  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
