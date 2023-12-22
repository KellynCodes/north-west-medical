import { Component } from '@angular/core';
import {
  ButtonComponent,
  HeroComponent,
  InsuranceComponent,
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
    ReviewsComponent,
    FaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
