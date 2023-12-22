import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CtaComponent, FooterComponent, NavbarComponent } from './components';

@Component({
  selector: 'nwmedsurg-root',
  standalone: true,
  imports: [NavbarComponent, CtaComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NWMedSurg';
}
