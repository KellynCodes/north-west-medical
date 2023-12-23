import { Component } from '@angular/core';
import {
  HeroComponent,
  InsuranceComponent,
  LocationComponent,
  ProvidersComponent,
  ReviewsComponent,
} from '../../components';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'nwmedsurg-home',
  standalone: true,
  imports: [
    HeroComponent,
    InsuranceComponent,
    ProvidersComponent,
    LocationComponent,
    ReviewsComponent,
    FaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
