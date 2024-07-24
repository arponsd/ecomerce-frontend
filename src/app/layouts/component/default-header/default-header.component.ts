import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FloatLabelModule, RouterModule],
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent implements OnInit {
  loginUser:any;
  authService = inject(AuthService);

  ngOnInit(): void {
    this.loginUser = this.authService.loginUser();
  }

}
