import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'nwmedsurg-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
})
export class NavbarComponent {
  IsOpen: boolean = false;

  toggle(): void {
    this.IsOpen = !this.IsOpen;
  }
}
