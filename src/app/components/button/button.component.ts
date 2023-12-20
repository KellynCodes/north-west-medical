import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sosinc-button',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  constructor(private router: Router) {}

  @Input({ required: true }) label: string = '';
  @Input({ required: true }) link: string = '';
  @Input({ required: false }) fragment: string = '';
  @Input() className?: string;
  @Input() disabled? = false;

  navigate(link: string, fragment: string): void {
    console.log(link);
    console.log(fragment);
    this.router.navigate([link], { fragment: fragment });
  }
}
