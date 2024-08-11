import { tap } from 'rxjs';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor (private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      email: ['arponsd420@gmail.com', [Validators.required, Validators.email]],
      password: ['123456789', Validators.required],
    })
  }


  onSubmit() {
    const value = this.loginForm.value;
    let body = {
      ...value
    };
    this.authService.login(body).subscribe((res: any) => {
      if(res.status === 'success') {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      } else {
        alert('Wrong email or password');
      }
    })
  }


}
