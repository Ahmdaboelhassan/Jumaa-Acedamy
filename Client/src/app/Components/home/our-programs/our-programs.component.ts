import { Component } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-programs',
  imports: [SlideUpDirective, RouterLink],
  templateUrl: './our-programs.component.html',
  styleUrl: './our-programs.component.css',
})
export class OurProgramsComponent {}
