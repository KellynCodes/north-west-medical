import { Component, signal } from '@angular/core';
import { ProviderDto } from '../../../types';
import { MedicalProviders } from '../../../data/providers.data';

@Component({
  selector: 'nwmedsurg-providers',
  standalone: true,
  imports: [],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss',
})
export class ProvidersComponent {
  public providers = signal<Array<ProviderDto>>(MedicalProviders);
}
