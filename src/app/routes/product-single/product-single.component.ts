import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-single',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './product-single.component.html',
})
export class ProductSingleComponent implements OnInit  {
  id: string = '';
  product: any;

  activeRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  constructor() {
  }
  ngOnInit(): void {
    this.getRouteParams();
    this.getSingleProduct();
  }

  getRouteParams():void {
    this.activeRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    })
  }

  getSingleProduct() {
    this.productService.single(this.id).subscribe((product: any) => {
      this.product = product;
      console.log(this.product);

    })
  }

}
