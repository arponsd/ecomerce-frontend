import { isPlatformBrowser } from '@angular/common';
import { Component, effect, HostListener, Inject, inject, OnInit, PLATFORM_ID, runInInjectionContext, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FloatLabelModule, RouterModule],
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent implements OnInit {
  authService = inject(AuthService);
  cartService = inject(CartService);
  loginUser = Object.keys(this.authService.loginUser()).length ? this.authService.loginUser() : false;

  constructor (private router: Router) {
  }

  ngOnInit(): void {
    const cartCount = JSON.parse(localStorage.getItem('cartItems') as string).length;
    this.cartService.cartItemsCount.set(cartCount);
  }

  onLogout () {
    this.authService.logout().subscribe((res: any) => {
      if (res.success === true) {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      } else {
        console.log(res);
      }
    })
  }
}
