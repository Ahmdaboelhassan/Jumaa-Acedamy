import { Component } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';

@Component({
  selector: 'app-how-it-works',
  imports: [SlideUpDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent {}
