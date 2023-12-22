import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../design/material.module';
import { FaqDto } from '../../../types';
import { FaqData } from '../../../data';

@Component({
  selector: 'nwmedsurg-faq',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  public faqs = signal<FaqDto[]>(FaqData);
}
