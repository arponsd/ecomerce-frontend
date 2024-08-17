import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
cartItems: any[] = [];
itemQty: number = 1;

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') as string).map((item: any ) => {
      const data = {
        selectedQty : 1,
        ...item
      };
      return data;
    });
    console.log(this.cartItems);

  }

  onQtyChange(qty: number) {
    console.log(this.itemQty);
  }

  onAddToFav() {

  }

  onRemoveItem() {

  }

}
