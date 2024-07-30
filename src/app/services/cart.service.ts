import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsCount = signal<number>(0);


  constructor(@Inject(PLATFORM_ID) private platformId: object) { }


  add (product: any): any {

    if (isPlatformBrowser(this.platformId)) {
      console.log('dfksk');

      if (localStorage.getItem('cartItems') === null) {
        const data = [product];
        localStorage.setItem('cartItems', JSON.stringify(data));
        this.cartItemsCount.set(data.length);
        return data;
      } else {
        const data = JSON.parse(localStorage.getItem('cartItems') as string);
        const cartItems = [...data, product];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.cartItemsCount.set(cartItems.length);
        return cartItems;
      }
    }
  }

  get () {
    if (isPlatformBrowser(this.platformId)) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') as string);
      if (cartItems) {
        return cartItems;
      } else {
        return [];
      }
    }
  };

  remove (id: any) {
    if (isPlatformBrowser(this.platformId)) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') as string);

    }
  }
}
