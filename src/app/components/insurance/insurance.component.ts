import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../design/material.module';
import { FaqDto } from '../../../types';
import { InsuranceFaqData } from '../../../data';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'nwmedsurg-insurance',
  standalone: true,
  imports: [MaterialModule, CtaComponent],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss',
})
export class InsuranceComponent {
  public insurances = signal<Array<FaqDto>>(InsuranceFaqData);
}
