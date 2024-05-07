import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DefaultFooterComponent } from '../component/default-footer/default-footer.component';
import { DefaultHeaderComponent } from '../component/default-header/default-header.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, DefaultFooterComponent, DefaultHeaderComponent],
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

}
