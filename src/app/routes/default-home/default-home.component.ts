import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-default-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-home.component.html'
})
export class DefaultHomeComponent implements OnInit  {
  selectedButton = signal<number>(1);

  constructor() {}
  ngOnInit(): void {
    this.onClickOption(this.selectedButton());
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
