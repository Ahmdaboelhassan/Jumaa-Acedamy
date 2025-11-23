import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlideUp]',
})
export class SlideUpDirective {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('show');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.el.nativeElement.classList.add('slide-up');
    observer.observe(this.el.nativeElement);
  }
}
