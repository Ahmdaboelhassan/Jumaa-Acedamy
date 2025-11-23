import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideUpDirective } from '../../directives/slide-up.directive';

@Component({
  selector: 'app-main-landing',
  imports: [RouterLink, SlideUpDirective],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.css',
})
export class MainLandingComponent {
  sectionBackground = input<string>();
  sectionTitle = input<string>();
  sectionParaghrach = input<string>();
}
