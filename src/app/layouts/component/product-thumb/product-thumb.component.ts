import { Component, signal } from '@angular/core';

@Component({
  selector: 'product-thumb',
  standalone: true,
  imports: [],
  templateUrl: './product-thumb.component.html'
})
export class ProductThumbComponent {
  ratings = signal<number[]>([1,2,3,4,5]);

}
