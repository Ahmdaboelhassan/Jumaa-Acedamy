import { Component } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  imports: [SlideUpDirective, RouterLink],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent {}
