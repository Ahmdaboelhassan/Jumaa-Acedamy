import { Component, computed } from '@angular/core';
import { DarkModeService } from '../../../Services/dark-mode.service';

@Component({
  selector: 'app-join',
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {
  sectionBackground = computed(() =>
    this.darkModeService.isDarkMode()
      ? "url('assets/bg7.png')"
      : "url('assets/bg6.png')"
  );

  constructor(private darkModeService: DarkModeService) {}
}
