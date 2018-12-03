import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-detail',
  template: `
  products detail {{productId}}
  `
})
export class ProductsDetailComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute) {
    this.route
      .paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productId = params.get('id'))
      );
  }

  ngOnInit() { }
}
