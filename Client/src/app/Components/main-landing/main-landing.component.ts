import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  imports: [],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.css',
})
export class MainLandingComponent {
  sectionBackground = input<string>();
  sectionTitle = input<string>();
  sectionParaghrach = input<string>();
}
