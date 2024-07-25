import { LoggerService } from '../../../services/logger.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-thumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-thumb.component.html'
})

export class ProductThumbComponent {
  @Input() product: any = {};
  _console = inject(LoggerService);
  productService = inject(ProductService);

  ratings = signal<number[]>([1,2,3,4,5]);

  constructor(private router: Router) {
  }

  onProductView(id: number) {
    this.router.navigate(['product/',id]);
  }

}
