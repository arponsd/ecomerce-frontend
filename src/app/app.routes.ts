import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultHomeComponent } from './routes/default-home/default-home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductSingleComponent } from './routes/product-single/product-single.component';

export const routes: Routes = [
  {
    path: '', component:DefaultLayoutComponent,
    children: [
      {path: '', component: DefaultHomeComponent},
      {path: 'product/:id', component: ProductSingleComponent}
    ]
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'register', component:RegisterComponent
  }
];
