import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductThumbComponent } from '../../layouts/component/product-thumb/product-thumb.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-default-home',
  standalone: true,
  imports: [CommonModule, ProductThumbComponent, NgFor],
  templateUrl: './default-home.component.html'
})
export class DefaultHomeComponent implements OnInit  {
  selectedButton = signal<number>(1);
  http = inject(HttpClient);

  constructor() {}
  ngOnInit(): void {
    this.onClickOption(this.selectedButton());
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data: any) => {
      console.log(data);

    })
  }

  onClickOption(n: number) {
    this.selectedButton.set(n);
    switch(this.selectedButton()) {
      case 1: {
        console.log(`this is ${this.selectedButton()}`);
        break;
      }
      case 2: {
        console.log(`this is ${this.selectedButton()}`);
        break;
      }
      case 3: {
        console.log(`this is ${this.selectedButton()}`);
        break;
      }
    }
  }

}
