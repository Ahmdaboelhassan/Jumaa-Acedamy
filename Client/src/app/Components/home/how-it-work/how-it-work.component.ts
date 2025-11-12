import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-how-it-work',
  imports: [],
  templateUrl: './how-it-work.component.html',
  styleUrl: './how-it-work.component.css',
})
export class HowItWorkComponent implements OnInit, AfterViewInit {
  @ViewChild('myElement', { static: false }) myElement!: ElementRef;
  color = '#001B30';

  constructor(private renderer: Renderer2) {}

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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'animate');
          } else {
            this.renderer.removeClass(entry.target, 'animate');
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(this.myElement.nativeElement);
  }
}
