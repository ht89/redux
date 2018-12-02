import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effect';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { ProductReducers } from './product.reducer';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('featureProducts', ProductReducers),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule
  ],
  exports: [ProductsComponent]
})
export class ProductModule { }
