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
  styles: string =
    ' flex items-center justify-center rounded-[30px] text-sm md:text-lg text-center transition-all cursor-pointer px-6 py-3';

  @Input({ required: true }) label: string = '';
  @Input({ required: true }) link: string = '';
  @Input({ required: false }) fragment: string = '';
  @Input() className?: string;
  @Input() disabled? = false;
}
