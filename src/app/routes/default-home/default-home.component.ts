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

  selectedButton = signal<number>(1);
  productList: any = this.productService.products().data;

  constructor() {}
  ngOnInit(): void {
    this.onClickOption(this.selectedButton());
  }

  onClickOption(n: number) {
    this.selectedButton.set(n);
  }

}
