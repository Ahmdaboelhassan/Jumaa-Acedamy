import { Component } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';

@Component({
  selector: 'app-plans',
  imports: [SlideUpDirective],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent {}
