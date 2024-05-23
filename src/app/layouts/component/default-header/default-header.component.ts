import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FloatLabelModule],
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent {

}
