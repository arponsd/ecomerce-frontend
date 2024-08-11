import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductThumbComponent } from '../../layouts/component/product-thumb/product-thumb.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { LoggerService } from '../../services/logger.service';
@Component({
  selector: 'app-default-home',
  standalone: true,
  imports: [CommonModule, ProductThumbComponent],
  templateUrl: './default-home.component.html',
  providers: [ProductService]
})
export class DefaultHomeComponent implements OnInit  {
  productService = inject(ProductService);
  browserConsole = inject(LoggerService)
  productList = signal<any> ([]);



  selectedButton = signal<number>(1);

  constructor() {}
  ngOnInit(): void {
    this.onClickOption(this.selectedButton());
    // let products = this.productService.products().data;
    // console.log(products);

    // this.productList.set(products);
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.get().subscribe((res: any) => {
      if (res.success === true) {
        this.productList.set(res.data);
      } else {
        console.log('error');

      }
    })
  }

  onClickOption(n: number) {
    this.selectedButton.set(n);
  }

}
