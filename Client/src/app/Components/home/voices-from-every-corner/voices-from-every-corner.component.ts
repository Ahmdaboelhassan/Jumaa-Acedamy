import { AfterViewInit, Component, signal } from '@angular/core';
import { SlideUpDirective } from '../../../directives/slide-up.directive';
import { single } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

export interface Student {
  Comment: string;
  Rate: number;
  Name: string;
  Location: string;
}
@Component({
  selector: 'app-voices-from-every-corner',
  imports: [SlideUpDirective, CommonModule],
  templateUrl: './voices-from-every-corner.component.html',
  styleUrl: './voices-from-every-corner.component.css',
  animations: [
    trigger('fadeText', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class VoicesFromEveryCornerComponent implements AfterViewInit {
  isFading = signal(false);
  students: Student[] = [
    {
      Comment:
        'never thought I could read the Quran correctly until I joined these lessons!',
      Name: 'Anna',
      Location: 'USA',
      Rate: 5,
    },
    {
      Comment: 'The teachers are kind, patient, and always motivate me.',
      Name: 'Yusuf,',
      Location: 'UK',
      Rate: 4.5,
    },
    {
      Comment:
        'The memorization was very hard to my son, but now he memorized many surah and he say them in the Salah, I am so proud of him',
      Name: "Hasan's mother",
      Location: 'USA',
      Rate: 4,
    },
    {
      Comment:
        'My Tajweed improved so much in just a few weeks. The explanations are simple and very clear.',
      Name: 'Fatima',
      Location: 'Canada',
      Rate: 5,
    },
    {
      Comment:
        'Amazing experience! I finally found teachers who truly care about my progress and understanding.',
      Name: 'Omar',
      Location: 'Australia',
      Rate: 4.5,
    },
    {
      Comment:
        'My daughter looks forward to every class. Her recitation is becoming more beautiful day by day.',
      Name: "Sara's mother",
      Location: 'Ukrine',
      Rate: 4,
    },
    {
      Comment:
        'Very organized lessons and supportive instructors. I recommend these classes to everyone!',
      Name: 'Ahmed Abo Elhassan',
      Location: 'Germany',
      Rate: 5,
    },
    {
      Comment:
        "I've tried many programs before, but this is the only one that kept me consistent and motivated.",
      Name: 'Layla',
      Location: 'Germany',
      Rate: 4.5,
    },
  ];

  currentStudent = 2;
  student = signal<Student>(this.students[this.currentStudent]);

  ngAfterViewInit(): void {
    setInterval(() => {
      this.isFading.set(true);

      setTimeout(() => {
        this.currentStudent = (this.currentStudent + 1) % this.students.length;

        this.student.set(this.students[this.currentStudent]);
        this.isFading.set(false);
      }, 500);
    }, 5000);
  }

  get fullStars() {
    return Math.floor(this.students[this.currentStudent].Rate);
  }

  get hasHalfStar() {
    return this.students[this.currentStudent].Rate % 1 >= 0.5;
  }

  get emptyStars() {
    return 5 - this.fullStars - (this.hasHalfStar ? 1 : 0);
  }
}
