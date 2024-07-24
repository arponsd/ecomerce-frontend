import { LoggerService } from '../../../services/logger.service';
import { NgFor, CurrencyPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'product-thumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-thumb.component.html'
})

export class ProductThumbComponent implements AfterViewInit {
  @Input() product: any = {};
  _console = inject(LoggerService);
  productService = inject(ProductService);

  visible = false
  ratings = signal<number[]>([1,2,3,4,5]);
  singleProduct : any | undefined = {};

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  onProductView(id: number) {
    this.singleProduct = {};
    const products = this.productService.products().data;
    this.singleProduct = products.find((item: any) => item._id === id );
  }

}
