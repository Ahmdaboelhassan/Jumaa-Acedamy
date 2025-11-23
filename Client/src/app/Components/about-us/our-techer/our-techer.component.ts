import { Component } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';

@Component({
  selector: 'app-our-techer',
  imports: [SlideUpDirective],
  templateUrl: './our-techer.component.html',
  styleUrl: './our-techer.component.css',
})
export class OurTecherComponent {
  ourTechers = [
    { name: 'Mohammed Gomma', image: 'assets/teachers/teacher.png' },
  ];
}
