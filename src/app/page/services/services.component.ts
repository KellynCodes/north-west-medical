import { ServiceData } from '../../../data/services';
import { Component, signal } from '@angular/core';
import { ServiceDto } from '../../../types/dtos/service.dto';
import { CtaComponent } from '../../components';

@Component({
  selector: 'nwmedsurg-services',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = signal<Array<ServiceDto>>(ServiceData);
}
