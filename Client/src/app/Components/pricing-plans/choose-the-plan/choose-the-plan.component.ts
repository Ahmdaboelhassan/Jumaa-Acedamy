import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Plan {
  type: string;
  duration: string;
  priceDuration: string;
  details: string[];
}

@Component({
  selector: 'app-choose-the-plan',
  imports: [NgClass],
  templateUrl: './choose-the-plan.component.html',
  styleUrl: './choose-the-plan.component.css',
})
export class ChooseThePlanComponent {
  selectedDuration = signal(0);

  duraions = ['30 min lesson', '40 min lesson', '60 min lesson'];

  commonPlanDetails = [
    'Free trial lesson',
    'Flexible scheduling',
    'Recorded sessions on request',
    'One-on-one personalized feedback',
  ];

  currentPrices = signal<string[]>(['$40', '$40', '$40', '$40']);

  plans: Plan[] = [
    {
      type: 'Starter Plan',
      duration: '2 lessons Per week',
      priceDuration: 'per month',
      details: this.commonPlanDetails,
    },
    {
      type: 'Standard Plan',
      duration: '3 lessons Per week',

      priceDuration: 'per month',
      details: this.commonPlanDetails,
    },
    {
      type: 'Advanced Plan',
      duration: '4 lessons Per week',
      priceDuration: 'per month',
      details: this.commonPlanDetails,
    },
    {
      type: 'Hero Plan',
      duration: '5 lessons Per week',
      priceDuration: 'per month',
      details: this.commonPlanDetails,
    },
  ];

  activeDuraion(event: Event, index: number) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('active');

    switch (index) {
      case 0:
        this.currentPrices.set(['$40', '$40', '$40', '$40']);
        this.selectedDuration.set(0);
        break;
      case 1:
        this.currentPrices.set(['$60', '$60', '$60', '$60']);
        this.selectedDuration.set(1);
        break;

      case 2:
        this.currentPrices.set(['$80', '$80', '$80', '$80']);
        this.selectedDuration.set(2);
        break;
    }
  }
}
