import { Component } from '@angular/core';
import { ChooseThePlanComponent } from './choose-the-plan/choose-the-plan.component';
import { MainLandingComponent } from '../main-landing/main-landing.component';

@Component({
  selector: 'app-pricing-plans',
  imports: [ChooseThePlanComponent, MainLandingComponent],
  templateUrl: './pricing-plans.component.html',
  styleUrl: './pricing-plans.component.css',
})
export class PricingPlansComponent {}
