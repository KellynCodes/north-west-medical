import { Component } from '@angular/core';
import {
  HeroComponent,
  InsuranceComponent,
  ReviewsComponent,
  FaqComponent,
  CtaComponent,
} from '../../components';

@Component({
  selector: 'nwmedsurg-home',
  standalone: true,
  imports: [
    HeroComponent,
    InsuranceComponent,
    CtaComponent,
    ReviewsComponent,
    FaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
