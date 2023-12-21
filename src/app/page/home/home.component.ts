import { Component } from '@angular/core';
import {
  ButtonComponent,
  HeroComponent,
  InsuranceComponent,
} from '../../components';

@Component({
  selector: 'nwmedsurg-home',
  standalone: true,
  imports: [HeroComponent, InsuranceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
