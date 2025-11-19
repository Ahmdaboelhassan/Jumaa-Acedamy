import { Component } from '@angular/core';

@Component({
  selector: 'app-our-techer',
  imports: [],
  templateUrl: './our-techer.component.html',
  styleUrl: './our-techer.component.css',
})
export class OurTecherComponent {
  ourTechers = [
    { name: 'Mohammed Gomma', image: 'assets/teachers/teacher.png' },
  ];
}
