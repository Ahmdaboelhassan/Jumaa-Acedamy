import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  imports: [],
  templateUrl: './how-it-work.component.html',
  styleUrl: './how-it-work.component.css',
})
export class HowItWorkComponent implements OnInit {
  color = '#001B30';

  ngOnInit(): void {
    this.listenForThemeChanges();
    this.updateColor();
  }

  listenForThemeChanges() {
    const observer = new MutationObserver(() => {
      this.updateColor();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateColor() {
    const root = getComputedStyle(document.documentElement);
    const primaryColor = root.getPropertyValue('--color-primary').trim();
    const secoundryColor = root.getPropertyValue('--color-secondary').trim();

    const isDark = document.documentElement.classList.contains('dark');
    this.color = isDark ? secoundryColor : primaryColor;
  }
}
