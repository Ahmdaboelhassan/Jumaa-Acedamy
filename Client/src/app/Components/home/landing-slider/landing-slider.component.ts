import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-landing-slider',
  imports: [SlideOneComponent, SlideTwoComponent, SlideThreeComponent],
  templateUrl: './landing-slider.component.html',
  styleUrl: './landing-slider.component.css',
})
export class LandingSliderComponent implements AfterViewInit {
  @ViewChild('carousel') carouselElement!: ElementRef;
  private carousel!: Carousel;

  ngAfterViewInit(): void {
    const element = this.carouselElement.nativeElement;

    // Initialize Bootstrap carousel
    this.carousel = new Carousel(element, {
      interval: false, // disable Bootstrap auto-play
      ride: false,
    });

    // Start manual autoplay
    this.startAutoPlay();
  }

  startAutoPlay() {
    setInterval(() => {
      this.carousel.next();
    }, 5000);
  }
}
