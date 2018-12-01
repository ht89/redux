import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { jediListReducer } from './jedi-list/jedi-list.reducer';

@NgModule({
  declarations: [JediListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('jediList', {
      data: jediListReducer
    })
  ],
  exports: [
    JediListComponent
  ]
})
export class JediModule { }
