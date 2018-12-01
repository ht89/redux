import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [JediListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    JediListComponent
  ]
})
export class JediModule { }
