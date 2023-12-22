import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../design/material.module';
import { FaqDto } from '../../../types';
import { InsuranceFaqData } from '../../../data';

@Component({
  selector: 'nwmedsurg-insurance',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss',
})
export class InsuranceComponent {
  public insurances = signal<Array<FaqDto>>(InsuranceFaqData);
}
