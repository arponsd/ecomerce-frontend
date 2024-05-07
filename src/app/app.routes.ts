import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultHomeComponent } from './routes/default-home/default-home.component';

export const routes: Routes = [
  {
    path: '', component:DefaultLayoutComponent,
    children: [
      {path: '', component:DefaultHomeComponent}
    ]
  }
];
