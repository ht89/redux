import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effect';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { ProductReducers } from './product.reducer';
import { ProductsDetailComponent } from './products-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductsDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('featureProducts', ProductReducers),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductsDetailComponent
      }
    ])
  ],
  exports: [ProductsComponent, ProductsDetailComponent]
})
export class ProductModule { }
