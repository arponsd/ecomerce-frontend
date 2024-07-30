import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'product-single',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  providers: [ProductService],
  templateUrl: './product-single.component.html',
})
export class ProductSingleComponent implements OnInit  {
  id: string = '';
  product: any;
  isStockAvailable: boolean = false;

  activeRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
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
      this.product = product.data;
      if(0 < +this.product.quantity) {
        this.isStockAvailable = true;
      } else {
        this.isStockAvailable = false;
      }
    })
  }

  onAddToCart(product: any) {
    this.cartService.add(product);
  }

}
